import { env } from "mini-van-plate/shared";

export const UndercurlText = (value: string) => {
	const { span } = env.van.tags;
	const { svg, use } = env.van.tags("http://www.w3.org/2000/svg");

	return span(
		{ class: "undercurl" },
		span(value),
		svg(
			{
				viewBox: "0 0 256 72",
				xmlns: "http://www.w3.org/2000/svg",
				preserveAspectRatio: "none",
			},
			use({ class: "line", "xlink:href": "#undercurl" }),
		),
	);
};

export const UndercurlDefs = () => {
	const { defs, path } = env.van.tags("http://www.w3.org/2000/svg");

	return defs(
		path({
			id: "undercurl",
			d: "M5 64l25-11c9 0 8 10 15 10s18-10 27-10 11 9 19 9 16-10 25-10 9 10 18 10 18-9 24-9 9 8 19 8 18-10 27-9 6 10 19 9l30-8",
		}),
	);
};
