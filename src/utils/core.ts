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

export function joinRaw(raws: (string | undefined)[]): string {
	return raws
		.map((x) => x?.trim())
		.filter(Boolean)
		.join("");
}

export function joinClasses(classes: (string | undefined)[]): string {
	return [...new Set(classes.map((x) => x?.trim()).filter(Boolean))].join(" ");
}

export const listFormat = (arr: string[]) =>
	new Intl.ListFormat("en").format(arr);
