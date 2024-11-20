import { debounceAnimationFrame } from "~/utils/core.js";
import { initShaderProgram, resizeCanvasToDisplaySize } from "~/utils/webgl.js";

import hoverFragmentSource from "~/sharders/hover-fragment.glsl" with {
	type: "text",
};
import hoverVertexSource from "~/sharders/hover-vertex.glsl" with {
	type: "text",
};

/** Use to limit FPS (ms/fps) */
const TIME_PER_FRAME = Math.floor(1000 / 30);
const FRAMES_PER_UPDATE = Math.floor(300 / TIME_PER_FRAME);
const DELTA_STRENGTH = -1;

type ProgramInfo = {
	image: {
		elem: HTMLImageElement;
		x: number;
		y: number;
		alpha: number;
		dx: number;
		dy: number;
		dalpha: number;
	};
	program: WebGLProgram;
	texture: WebGLTexture;
	attribute: {
		position: GLint;
		texCoord: GLint;
	};
	uniform: {
		resolution: WebGLUniformLocation;
		alpha: WebGLUniformLocation;
		delta: WebGLUniformLocation;
	};
	buffer: {
		position: WebGLBuffer;
		texCoord: WebGLBuffer;
	};
};

export function setupCoolCursor() {
	const canvas = document.getElementById(
		"background-hover",
	) as HTMLCanvasElement;
	const gl = canvas.getContext("webgl", { premultipliedAlpha: false });
	if (!gl) return;

	resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);

	const shaderProgram = initShaderProgram(
		gl,
		hoverVertexSource,
		hoverFragmentSource,
	);
	if (!shaderProgram) return;

	const programInfo: ProgramInfo = {
		program: shaderProgram,
		texture: gl.createTexture() as WebGLTexture,
		attribute: {
			position: gl.getAttribLocation(shaderProgram, "a_position"),
			texCoord: gl.getAttribLocation(shaderProgram, "a_texCoord"),
		},
		uniform: {
			alpha: gl.getUniformLocation(
				shaderProgram,
				"u_alpha",
			) as WebGLUniformLocation,
			delta: gl.getUniformLocation(
				shaderProgram,
				"u_delta",
			) as WebGLUniformLocation,
			resolution: gl.getUniformLocation(
				shaderProgram,
				"u_resolution",
			) as WebGLUniformLocation,
		},
		buffer: {
			position: gl.createBuffer() as WebGLBuffer,
			texCoord: gl.createBuffer() as WebGLBuffer,
		},
		image: {
			elem: new Image(),
			x: gl.canvas.width / 2,
			y: gl.canvas.height / 2,
			alpha: 1,
			dx: 0,
			dy: 0,
			dalpha: 0,
		},
	};

	setupImage(gl, programInfo);
}

function setupImage(gl: WebGLRenderingContext, programInfo: ProgramInfo) {
	programInfo.image.elem.src = "/assets/avatar.webp";
	programInfo.image.elem.width = Math.min(300, gl.canvas.width / 2);
	programInfo.image.elem.height = Math.round(
		(programInfo.image.elem.width * 4) / 3,
	);
	programInfo.image.elem.onload = setupImageEffect.bind(null, gl, programInfo);
}

function drawImage(gl: WebGLRenderingContext, programInfo: ProgramInfo) {
	resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

	gl.clearColor(0, 0, 0, 0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	gl.bindBuffer(gl.ARRAY_BUFFER, programInfo.buffer.position);
	setRectangle(
		gl,
		programInfo.image.x - programInfo.image.elem.width / 2,
		programInfo.image.y - programInfo.image.elem.height / 2,
		programInfo.image.elem.width,
		programInfo.image.elem.height,
	);

	gl.uniform2f(
		programInfo.uniform.resolution,
		gl.canvas.width,
		gl.canvas.height,
	);

	gl.uniform2f(
		programInfo.uniform.delta,
		programInfo.image.dx * DELTA_STRENGTH,
		programInfo.image.dy * DELTA_STRENGTH,
	);

	gl.uniform1f(programInfo.uniform.alpha, programInfo.image.alpha);

	gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function setupImageEffect(gl: WebGLRenderingContext, programInfo: ProgramInfo) {
	const drawImageLoop = debounceAnimationFrame(
		(
			time,
			props: {
				oldTime?: number;
				x?: number;
				y?: number;
				alpha: number;
				restore?: boolean;
			},
		) => {
			if (!props.oldTime || time - props.oldTime > FRAMES_PER_UPDATE) {
				if (!props.oldTime) props.oldTime = time;
				else props.oldTime += FRAMES_PER_UPDATE;

				if (props.restore) {
					const changedDX = Math.abs(programInfo.image.dx) > 0.001;
					const changedDY = Math.abs(programInfo.image.dy) > 0.001;
					const changedDAlpha = Math.abs(programInfo.image.dalpha) > 0.001;

					if (!changedDX && !changedDY && !changedDAlpha) {
						programInfo.image.dx = 0;
						programInfo.image.dy = 0;
						programInfo.image.dalpha = 0;
						drawImage(gl, programInfo);
						return;
					}

					if (changedDX) programInfo.image.dx /= 1.5;
					if (changedDY) programInfo.image.dy /= 1.5;
					if (changedDAlpha) programInfo.image.dalpha /= 1.5;
				} else {
					const changedX =
						props.x && Math.abs(programInfo.image.x - props.x) > 0.001;
					const changedY =
						props.y && Math.abs(programInfo.image.y - props.y) > 0.001;
					const changedAlpha =
						Math.abs(programInfo.image.alpha - props.alpha) > 0.001;

					if (!changedX && !changedY && !changedAlpha) {
						props.restore = true;
						drawImageLoop(props);
						return;
					}

					if (changedX) programInfo.image.x += programInfo.image.dx;
					if (changedY) programInfo.image.y += programInfo.image.dy;
					if (changedAlpha) programInfo.image.alpha += programInfo.image.dalpha;
				}
				drawImage(gl, programInfo);
			}

			drawImageLoop(props);
		},
	);

	const updateCursor = ({
		x,
		y,
		alpha,
	}: { x?: number; y?: number; alpha: number }) => {
		if (x) programInfo.image.dx = (x - programInfo.image.x) / FRAMES_PER_UPDATE;
		if (y) programInfo.image.dy = (y - programInfo.image.y) / FRAMES_PER_UPDATE;
		programInfo.image.dalpha =
			(alpha - programInfo.image.alpha) / FRAMES_PER_UPDATE;
		drawImageLoop({ x, y, alpha });
	};

	const hideCursor = debounceAnimationFrame(() => updateCursor({ alpha: 0 }));

	document.addEventListener(
		"mousemove",
		(e) => {
			const { x, y } = getCursorCoord(
				e.clientX,
				e.clientY,
				gl.canvas.width,
				gl.canvas.height,
			);
			programInfo.image.x = x;
			programInfo.image.y = y;
			programInfo.image.alpha = 0;
			initDraw(gl, programInfo);
			drawImage(gl, programInfo);

			let oldTime: number | undefined;
			document.addEventListener(
				"mousemove",
				debounceAnimationFrame((time, e) => {
					if (window.scrollY >= gl.canvas.height) return;

					if (oldTime && time - oldTime < TIME_PER_FRAME) return;
					oldTime = time;

					if ((e.target as HTMLElement).closest("[hidecoolcursor]"))
						return hideCursor();

					if (e.clientY + window.scrollY >= gl.canvas.height)
						return hideCursor();
					const { x, y } = getCursorCoord(
						e.clientX,
						e.clientY + window.scrollY,
						gl.canvas.width,
						gl.canvas.height,
					);
					updateCursor({ x, y, alpha: 1 });
				}),
			);
			document.addEventListener("mouseleave", hideCursor);
		},
		{ once: true },
	);
}

function getCursorCoord(
	x: number,
	y: number,
	width: number,
	height: number,
): { x: number; y: number } {
	return {
		x: x + (x - width / 2) / 2,
		y: y + (y - height / 2) / 2,
	};
}

function initDraw(gl: WebGLRenderingContext, programInfo: ProgramInfo) {
	gl.useProgram(programInfo.program);

	gl.bindTexture(gl.TEXTURE_2D, programInfo.texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	gl.texImage2D(
		gl.TEXTURE_2D,
		0,
		gl.RGBA,
		gl.RGBA,
		gl.UNSIGNED_BYTE,
		programInfo.image.elem,
	);

	gl.bindBuffer(gl.ARRAY_BUFFER, programInfo.buffer.position);
	setRectangle(
		gl,
		programInfo.image.x - programInfo.image.elem.width / 2,
		programInfo.image.y - programInfo.image.elem.height / 2,
		programInfo.image.elem.width,
		programInfo.image.elem.height,
	);
	gl.enableVertexAttribArray(programInfo.attribute.position);
	gl.bindBuffer(gl.ARRAY_BUFFER, programInfo.buffer.position);
	gl.vertexAttribPointer(
		programInfo.attribute.position,
		2,
		gl.FLOAT,
		false,
		0,
		0,
	);

	gl.bindBuffer(gl.ARRAY_BUFFER, programInfo.buffer.texCoord);
	setRectangle(gl, 0, 0, 1, 1);
	gl.enableVertexAttribArray(programInfo.attribute.texCoord);
	gl.bindBuffer(gl.ARRAY_BUFFER, programInfo.buffer.texCoord);
	gl.vertexAttribPointer(
		programInfo.attribute.texCoord,
		2,
		gl.FLOAT,
		false,
		0,
		0,
	);
}

function setRectangle(
	gl: WebGLRenderingContext,
	x: number,
	y: number,
	width: number,
	height: number,
) {
	const x1 = x;
	const y1 = y;
	const x2 = x + width;
	const y2 = y + height;
	gl.bufferData(
		gl.ARRAY_BUFFER,
		new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]),
		gl.STATIC_DRAW,
	);
}
