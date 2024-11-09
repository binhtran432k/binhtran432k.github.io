import { env } from "mini-van-plate/shared";
import { WavingHand } from "../icons/waving-hand";

export const Intro = () => {
	const { div, h1, h2, h3 } = env.van.tags;
	return div(
		{ class: "intro" },
		h3(
			"Hi ",
			WavingHand({ class: "waving-hand", "aria-label": "there" }),
			", My name is",
		),
		h1("BINH TRAN"),
		h2("Self Studied Developer"),
		h2("from Vietnam"),
	);
};
