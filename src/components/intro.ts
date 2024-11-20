import { env } from "mini-van-plate/shared";

import { Header } from "./header.js";
import { Social } from "./social.js";

export const IntroContent = () => {
	const { div, h1, h2, h3, span } = env.van.tags;
	return div(
		{ class: "content" },
		h3("Hi ", span({ class: "bi-waving-hand" }), ", My name is"),
		h1("BINH TRAN"),
		h2("Self Studied Developer"),
		h2("from Vietnam"),
	);
};

export const Intro = () => {
	const { div, section, canvas } = env.van.tags;
	return [
		div({ id: "intro" }),
		canvas({ id: "background-hover", width: 1920, height: 1080 }),
		Header(),
		section({ class: "intro container" }, IntroContent(), Social()),
	];
};
