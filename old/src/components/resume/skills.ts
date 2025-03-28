import { env } from "mini-van-plate/shared";
import { listFormat } from "~/utils/core.js";
import { Section } from "./section.js";

const LabeledSkills = (label: string, items: string[]) => {
	const { article, b, span } = env.van.tags;
	return article(b({ class: "label" }, label), ": ", span(listFormat(items)));
};

export const Skills = () => {
	return Section(
		{ class: "skills", title: "Skills" },
		LabeledSkills("Languages", [
			"TypeScript",
			"JavaScript",
			"Lua",
			"Rust",
			"Zig",
		]),
		LabeledSkills("Frameworks and libraries", [
			"React",
			"Vite",
			"Preact",
			"Astro",
			"Svelte",
			"Tailwind CSS",
		]),
		LabeledSkills("Tools", [
			"Neovim",
			"Bun",
			"Git",
			"Docker",
			"GNU Make",
			"Bash",
			"UNIX",
		]),
		LabeledSkills("Domain interests", [
			"Functional programming",
			"Domain Specific Language",
			"Language Server Protocol",
			"Compilers",
			"Systems",
		]),
	);
};
