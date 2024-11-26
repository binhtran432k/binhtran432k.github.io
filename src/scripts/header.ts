import { debounceAnimationFrame } from "~/utils/core.js";

function setupHeaderBackground() {
	const header = document.querySelector("header") as HTMLDivElement;
	const originHeaderBgColor = header.style.backgroundColor;

	const navbarToggle = document.getElementById("navbar-toggle") as
		| HTMLInputElement
		| undefined;
	if (!navbarToggle) return;

	let isTransparent = false;
	const handleBackground = debounceAnimationFrame(() => {
		if (navbarToggle.checked || window.scrollY > 100) {
			if (isTransparent) {
				header.style.transitionDuration = ".5s";
				header.style.backgroundColor = originHeaderBgColor;
				isTransparent = false;
			}
		} else if (!isTransparent) {
			isTransparent = true;
			header.style.backgroundColor = "transparent";
		}
	});

	document.addEventListener("scroll", handleBackground);
	handleBackground();

	navbarToggle.addEventListener("change", handleBackground);
}

function headerMain() {
	setupHeaderBackground();
}

headerMain();
