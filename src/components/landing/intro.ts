import { env } from "mini-van-plate/shared";

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
	const { div, section } = env.van.tags;
	return section(
		{ class: "intro container" },
		div({ id: "intro" }),
		IntroContent(),
		Social(),
	);
};
