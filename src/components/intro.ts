import { env } from "mini-van-plate/shared";

import { WavingHand } from "~/icons/waving-hand.js";
import { Background } from "./background.js";

export const Intro = () => {
	const { div, h1, h2, h3 } = env.van.tags;
	return div(
		{ class: "intro" },
		Background({ class: "intro__background" }),
		h3(
			"Hi ",
			WavingHand({ class: "intro__waving-hand", "aria-label": "there" }),
			", My name is",
		),
		h1("BINH TRAN"),
		h2("Self Studied Developer"),
		h2("from Vietnam"),
	);
};
