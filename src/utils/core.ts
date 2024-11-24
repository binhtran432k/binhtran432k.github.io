export function debounceAnimationFrame<P extends unknown[]>(
	fn: (...params: P) => unknown,
) {
	let frame: number | undefined;
	return (...params: P) => {
		if (frame) cancelAnimationFrame(frame);
		frame = requestAnimationFrame(() => {
			fn(...params);
		});
	};
}

export function debounceTimeout<P extends unknown[]>(
	fn: (...params: P) => unknown,
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
