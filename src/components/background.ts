import { env } from "mini-van-plate/shared";

const colors = {
	bg: "transparent",
	primary: "#BD93F9",
	secondary: "#FF79C6",
} as const;

const size = {
	width: 256,
	height: 144,
};

const circles = {
	sizeA: 60,
	sizeB: 46,
	sizeC: 38,
	sizeD: 30,
} as const;

export const Background = (props?: Record<string, unknown>) => {
	const { svg, circle, path, defs, linearGradient, stop, g } = env.van.tags(
		"http://www.w3.org/2000/svg",
	);

	return svg(
		{
			width: "1920",
			height: "1080",
			viewBox: `0 0 ${size.width} ${size.height}`,
			...props,
		},
		defs(
			linearGradient(
				{ id: "bg-grad1", x1: "0%", y1: "100%", x2: "100%", y2: "0%" },
				stop({ offset: "0%", "stop-color": colors.primary }),
				stop({ offset: "100%", "stop-color": colors.secondary }),
			),
		),
		g(
			{
				transform: `translate(${size.width / 2},${size.height / 2})`,
				opacity: 0.6,
			},
			circle({ r: circles.sizeA, fill: `${colors.primary}2F` }),
			path({
				d: `M0,-${circles.sizeA} a1,1 0 0,1 0,${circles.sizeA * 2}Z`,
				transform: "rotate(30 0,0)",
				fill: `${colors.primary}2F`,
			}),
			circle({
				r: (circles.sizeB + circles.sizeC) / 2,
				fill: "none",
				stroke: `${colors.primary}7F`,
				"stroke-width": circles.sizeB - circles.sizeC,
			}),
			circle({
				r: circles.sizeC,
				fill: "url(#bg-grad1)",
				transform: "rotate(180 0,0)",
				opacity: 0.8,
			}),
			circle({ r: circles.sizeD, fill: "url(#bg-grad1)" }),
		),
	);
};
