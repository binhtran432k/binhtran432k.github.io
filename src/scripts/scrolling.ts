import { debounceTimeout } from "~/utils/core.js";

export let isScrolling: boolean | undefined;

export function setupScrolling() {
	if (isScrolling !== undefined) return;

	isScrolling = false;
	const addScroll = () =>
		document.addEventListener(
			"scroll",
			() => {
				isScrolling = true;
			},
			{ once: true },
		);
	document.addEventListener(
		"scrollend",
		debounceTimeout(() => {
			isScrolling = false;
			addScroll();
		}, 300),
	);
	addScroll();
}
