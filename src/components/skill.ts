import { env } from "mini-van-plate/shared";

import { skillMap } from "~/profile.js";

const skills: string[] = [
	...skillMap.soft,
	...skillMap.technical,
	...skillMap.programmingLanguage,
];

export const Skill = () => {
	const { section, div, p, h3, span } = env.van.tags;
	const skillElems = skills.map((skill) => span(skill));
	return section(
		{ class: "skill" },
		div({ id: "skill" }),
		h3("Skills"),
		div({ class: "container" }, p(skillElems), p(skillElems)),
	);
};
