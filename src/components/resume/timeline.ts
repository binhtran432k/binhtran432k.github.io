import { env } from "mini-van-plate/shared";

export const Timeline = (props: {
	label: string;
	sublabel?: string;
	timeline?: string;
	location?: string;
}) => {
	const { article, div, h4, p, span } = env.van.tags;
	return article(
		{ class: "timeline" },
		div(
			h4({ class: "label" }, props.label),
			p({ class: "sublabel" }, props.sublabel),
		),
		div(
			span({ class: "time" }, props.timeline),
			span({ class: "location" }, props.location),
		),
	);
};
