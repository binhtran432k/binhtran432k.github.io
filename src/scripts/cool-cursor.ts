import { debounceAnimationFrame } from "~/utils/core.js";
import { initShaderProgram, resizeCanvasToDisplaySize } from "~/utils/webgl.js";
import { isScrolling } from "./scrolling.js";

import hoverFragmentSource from "~/sharders/hover-fragment.glsl" with {
	type: "text",
};
import hoverVertexSource from "~/sharders/hover-vertex.glsl" with {
	type: "text",
};

const TIME_PER_FRAME = Math.floor(1000 / 60);
const DIVISOR_PER_FRAME = Math.floor(200 / TIME_PER_FRAME);
const DELTA_STRENGTH_Y = -1;
const DELTA_STRENGTH_X = DELTA_STRENGTH_Y * (4 / 3);

type ProgramInfo = {
	image: {
		elem: HTMLImageElement;
		x: number;
		y: number;
		alpha: number;
		dx: number;
		dy: number;
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
	const gl = canvas.getContext("webgl", {
		premultipliedAlpha: false,
		depth: false,
		antialias: false,
	} as WebGLContextAttributes);
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

function setupImageEffect(gl: WebGLRenderingContext, programInfo: ProgramInfo) {
	const drawImageLoop = debounceAnimationFrame(
		(props: { x?: number; y?: number; alpha: number }) => {
			if (isScrolling) {
				programInfo.image.alpha = 0;
				drawImage(gl, programInfo);
				return;
			}

			const changedX = props.x ? props.x - programInfo.image.x : 0;
			const changedY = props.y ? props.y - programInfo.image.y : 0;
			const changedAlpha = props.alpha - programInfo.image.alpha;

			const hasChangedX = Math.abs(changedX) > 1;
			const hasChangedY = Math.abs(changedY) > 1;
			const hasChangedAlpha = Math.abs(changedAlpha) > 0.01;

			if (!hasChangedX && !hasChangedY && !hasChangedAlpha) {
				programInfo.image.dy = 0;
				programInfo.image.dx = 0;
				programInfo.image.alpha = props.alpha;
				drawImage(gl, programInfo);
				return;
			}

			if (hasChangedX) {
				programInfo.image.dx = changedX / DIVISOR_PER_FRAME;
				programInfo.image.x += programInfo.image.dx;
			}
			if (hasChangedY) {
				programInfo.image.dy = changedY / DIVISOR_PER_FRAME;
				programInfo.image.y += programInfo.image.dy;
			}
			if (hasChangedAlpha)
				programInfo.image.alpha += changedAlpha / DIVISOR_PER_FRAME;

			drawImage(gl, programInfo);

			drawImageLoop(props);
		},
	);

	const handleMoveMouse = debounceAnimationFrame((e: MouseEvent) => {
		if (isScrolling || window.scrollY >= gl.canvas.height) return;

		if ((e.target as HTMLElement).closest("[hidecoolcursor]"))
			return handleHideMouse();

		if (e.clientY + window.scrollY >= gl.canvas.height)
			return handleHideMouse();
		const { x, y } = getCursorCoord(
			e.clientX,
			e.clientY + window.scrollY,
			gl.canvas.width,
			gl.canvas.height,
		);

		drawImageLoop({ x, y, alpha: 1 });
	});

	const handleHideMouse = debounceAnimationFrame(
		drawImageLoop.bind(null, { alpha: 0 }),
	);

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

			document.addEventListener("mousemove", handleMoveMouse);
			document.addEventListener("mouseleave", handleHideMouse);
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

	const indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	const indices = [0, 1, 2, 2, 1, 3];
	gl.bufferData(
		gl.ELEMENT_ARRAY_BUFFER,
		new Uint16Array(indices),
		gl.STATIC_DRAW,
	);

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
	gl.vertexAttribPointer(
		programInfo.attribute.texCoord,
		2,
		gl.FLOAT,
		false,
		0,
		0,
	);

	clearImage(gl);

	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

	// Array Buffer will be position only now
	gl.bindBuffer(gl.ARRAY_BUFFER, programInfo.buffer.position);

	// Element Array Buffer will be index only now
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
}

function clearImage(gl: WebGLRenderingContext) {
	gl.clearColor(0, 0, 0, 0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}

function drawImage(gl: WebGLRenderingContext, programInfo: ProgramInfo) {
	if (resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement)) {
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	}

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
		programInfo.image.dx * DELTA_STRENGTH_X,
		programInfo.image.dy * DELTA_STRENGTH_Y,
	);

	gl.uniform1f(programInfo.uniform.alpha, programInfo.image.alpha);

	// gl.drawArrays(gl.TRIANGLES, 0, 6);
	gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
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
		new Float32Array([x1, y1, x2, y1, x1, y2, x2, y2]),
		gl.STATIC_DRAW,
	);
}
