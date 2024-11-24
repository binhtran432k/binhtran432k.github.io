import { env } from "mini-van-plate/shared";

let buttonIdTrack = 0;
export const EyeButton = ({
	href,
	target,
}: { href: string; target?: "_blank" }) => {
	const { a } = env.van.tags;
	const { svg, mask, rect, defs, use, g } = env.van.tags(
		"http://www.w3.org/2000/svg",
	);
	const id = buttonIdTrack++;
	const maskId = `eye-mask${id}`;

	return a(
		{ href, target, class: "eye-button" },
		svg(
			{
				viewBox: "0 0 100 100",
				xmlns: "http://www.w3.org/2000/svg",
			},
			defs(
				mask(
					{ id: maskId },
					rect({ width: "100%", height: "100%", fill: "white" }),
					use({ "xlink:href": "#eye-outline", class: "lid", fill: "black" }),
				),
			),
			use({ class: "text", "xlink:href": "#eye-text" }),
			g(
				{ class: "eye" },
				use({ "xlink:href": "#eye-path" }),
				use({
					"xlink:href": "#eye-outline",
					mask: `url(#${maskId})`,
					fill: "currentColor",
				}),
			),
		),
	);
};

export const EyeDefs = () => {
	const { defs, path, text, textPath } = env.van.tags(
		"http://www.w3.org/2000/svg",
	);

	return defs(
		path({
			d: "M35 50c0 1 5 9 15 9s15-8 15-9-5-9-15-9-15 8-15 9Z",
			id: "eye-outline",
		}),
		path({
			id: "eye-path",
			d: "M35 50c0 1 5 9 15 9s15-8 15-9-5-9-15-9-15 8-15 9Zm15 7c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7Zm0-4c-1 0-3-1-3-3 0-3 3-3 3-3v3l3-1s1 4-3 4Z",
			fill: "currentColor",
		}),
		path({ id: "eye-line", d: "M50 13a1 1 0 010 74 1 1 0 010-74Z" }),
		text(
			{ id: "eye-text", fill: "currentColor", style: "font-size:12px;" },
			textPath(
				{ href: "#eye-line", startoffset: "0" },
				".CLICK TO SEE THE LIVE VERSION.",
			),
		),
	);
};
