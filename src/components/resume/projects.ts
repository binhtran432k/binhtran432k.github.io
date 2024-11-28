import { env } from "mini-van-plate/shared";

import { OpenInNewIcon } from "~/icons.js";
import { Section } from "./section.js";

export const Project = (props: {
	name: string;
	url: string;
	techs: string[];
	details: string[];
}) => {
	const { article, h3, span, ul, li, a } = env.van.tags;
	return article(
		{ class: "project" },
		h3(
			{ class: "name" },
			a({ href: props.url, target: "_blank" }, props.name, OpenInNewIcon()),
		),
		span({ class: "techs" }, props.techs.join(", ")),
		ul(
			{ class: "details" },
			props.details.map((d) => li(d)),
		),
	);
};

export const Projects = () => {
	return Section(
		{ class: "projects", title: "Projects" },
		Project({
			name: "Ungrammar Language Features",
			url: "https://binhtran432k.com/ungrammar-language-features",
			techs: ["TypeScript", "LSP", "Monaco", "Astro", "Preact", "Tailwind CSS"],
			details: [
				"Developed a Language Server for the Ungrammar language, including features such as autocompletion, go-to definition, hover, etc.",
				"Hosted a website to demonstrate product features without requiring installation.",
				"Ensured product quality through CI/CD pipelines using GitHub Actions.",
				"Deployed the product to VS Marketplace and NPM for easier installation.",
			],
		}),
		Project({
			name: "Story Mapping Generator",
			url: "https://binhtran432k.com/story-mapping-generator",
			techs: ["TypeScript", "Monaco", "Svelte", "Tailwind CSS"],
			details: [
				"Developed a Story Mapping Generator that compiles YAML-like code into SVG diagrams.",
				"Hosted a website to showcase product features, including an IntelliSense-enabled editor.",
				"Maintained coding standards through CI/CD pipelines using Biome and GitHub Actions.",
			],
		}),
		Project({
			name: "Portfolio",
			url: "https://binhtran432k.com",
			techs: ["TypeScript", "SSG", "Bun", "VanJS", "WebGL", "SVG"],
			details: [
				"Developed an internal frontend SSG framework based on VanJS and Bun.",
				"Integrated WebGL functionality without external libraries.",
				"Designed and created custom SVG graphics, optimizing image sizes for better performance.",
			],
		}),
	);
};
