export function debounceAnimationFrame<P>(
	fn: (time: number, props: P) => unknown,
) {
	let frame: number | undefined;
	return (props: P = undefined as P) => {
		if (frame) cancelAnimationFrame(frame);
		frame = requestAnimationFrame((time) => {
			fn(time, props);
		});
	};
}

export function debounceTimeout<P extends Array<unknown>>(
	fn: (...p: P) => unknown,
	timeout: number,
): (...params: P) => void {
	let timer: Timer | undefined;
	return (...params: P) => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...params);
		}, timeout);
	};
}
