import { env } from "mini-van-plate/shared";

import { type ProjectData, projects } from "~/profile.js";

import { EyeButton } from "~/components/eye-button.js";
import { UndercurlText } from "~/components/undercurl.js";

const Project = (
	index: string,
	{ title, src, image, previewLink, date, techs }: ProjectData,
) => {
	const { div, span, h4, p, article, img, a } = env.van.tags;
	return article(
		p(span({ class: "index" }, index), span({ class: "date" }, date)),
		h4(title),
		div(
			{ class: "body" },
			div(
				{ class: "image" },
				img({
					src: image,
					width: 720,
					height: 360,
					alt: `${title} Preview`,
				}),
			),
			div(
				{ class: "content" },
				div(
					{ class: "techs" },
					techs.map((x) => UndercurlText(x)),
				),
				div(
					{ class: "buttons" },
					a(
						{ class: "cool-button", target: "_blank", href: src },
						span("Source"),
					),
					previewLink &&
						EyeButton({
							target: "_blank",
							href: `https://binhtran432k.com${previewLink}`,
						}),
				),
			),
		),
	);
};

export const Projects = () => {
	const { div, section, h3 } = env.van.tags;
	return section(
		{ class: "projects" },
		div({ id: "project" }),
		div(
			{ class: "container" },
			h3("Projects"),
			div(projects.map((p, i) => Project(`${i + 1}/${projects.length}`, p))),
		),
	);
};
