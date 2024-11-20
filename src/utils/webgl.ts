export function initShaderProgram(
	gl: WebGLRenderingContext,
	vertexSource: string,
	fragmentSource: string,
): WebGLProgram | null {
	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexSource);
	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
	const shaderProgram = gl.createProgram();

	if (!shaderProgram || !vertexShader || !fragmentShader) return null;

	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) return null;

	return shaderProgram;
}

export function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement): boolean {
	const displayWidth = canvas.clientWidth;
	const displayHeight = canvas.clientHeight;

	const needResize =
		canvas.width !== displayWidth || canvas.height !== displayHeight;
	if (needResize) {
		canvas.width = displayWidth;
		canvas.height = displayHeight;
	}

	return needResize;
}

function loadShader(
	gl: WebGLRenderingContext,
	type: typeof gl.VERTEX_SHADER | typeof gl.FRAGMENT_SHADER,
	source: string,
): WebGLShader | null {
	const shader = gl.createShader(type) as WebGLShader;

	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error(gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}

	return shader;
}
