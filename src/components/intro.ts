import { env } from "mini-van-plate/shared";

import { Background } from "./background.js";
import { Social } from "./social.js";

export const Intro = () => {
	const { div, h1, h2, h3, span } = env.van.tags;
	return div(
		{ class: "intro container" },
		Background({ class: "background" }),
		div(
			{ class: "content" },
			h3("Hi ", span({ class: "bi-waving-hand" }), ", My name is"),
			h1("BINH TRAN"),
			h2("Self Studied Developer"),
			h2("from Vietnam"),
		),
		Social(),
	);
};
