import { env } from "mini-van-plate/shared";

import { Background } from "./background.js";
import { Header } from "./header.js";
import { Intro } from "./intro.js";
import { Social } from "./social.js";

export const About = () => {
	const { div, section } = env.van.tags;
	return [
		Header(),
		section(
			{ class: "about container" },
			div({ id: "about" }),
			Background({ class: "background" }),
			Intro(),
			Social(),
		),
	];
};
