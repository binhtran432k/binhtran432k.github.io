import { debounceAnimationFrame } from "~/utils/core.js";

import { setupCoolCursor } from "./cool-cursor.js";

function setupHeaderBackground() {
	const header = document.querySelector("header") as HTMLDivElement;
	const originHeaderBgColor = header.style.backgroundColor;
	const navbarToggle = document.getElementById(
		"navbar-toggle",
	) as HTMLInputElement;

	const handleBackground = debounceAnimationFrame(() => {
		if (navbarToggle.checked || window.scrollY > 100) {
			header.style.transitionDuration = ".5s";
			header.style.backgroundColor = originHeaderBgColor;
		} else {
			header.style.backgroundColor = "transparent";
		}
	});

	document.addEventListener("scroll", handleBackground);
	handleBackground();

	navbarToggle.addEventListener("change", handleBackground);
}

function setupLinks() {
	const links = document.getElementsByTagName("a");
	for (let i = 0; i < links.length; i++) {
		const link = links[i];
		const url = new URL(link.href);
		if (url.pathname === "/" && !url.hash) {
			link.onclick = (e) => {
				e.preventDefault();
				window.history.replaceState("", "/", window.location.pathname);
			};
		}
	}
}

function main() {
	setupHeaderBackground();
	setupLinks();
	setupCoolCursor();
}

main();
