import { env } from "mini-van-plate/shared";

export const WavingHand = (props?: Record<string, unknown>) => {
	const { svg, path } = env.van.tags("http://www.w3.org/2000/svg");
	return svg(
		{
			width: 32,
			height: 32,
			viewBox: "0 0 24 24",
			...props,
		},
		path({
			fill: "currentColor",
			d: "M17 23q-.4 0-.7-.3T16 22t.3-.7T17 21q1.7 0 2.8-1.2T21 17q0-.4.3-.7t.7-.3t.7.3t.3.7q0 2.5-1.8 4.3T17 23M2 8q-.4 0-.7-.3T1 7q0-2.5 1.7-4.3T7 1q.4 0 .7.3t.3.7t-.3.7T7 3Q5.4 3 4.2 4.2T3 7q0 .4-.3.7T2 8m3.3 10.7Q3 16.5 3 13.3T5.3 7.8L6.8 6.3q0-.1.3-0t.3.1q.7.7.7 1.8T7.4 9.8l-.4.4q-.3.3-.3.7t.3.7l1 1q.7.7.7 1.6T8 15.7q-.2.2-.2.5t.2.5t.5.2t.5-.2q1-1 1-2.6T9 11.4l-.6-.6q.7-.7 1-1.5T9.6 8l4.5-4.5q.3-.3.7-.3t.7.3t.3.7t-.3.7l-4.7 4.7l1 1l6-6q.3-.3.7-.3t.7.3t.3.7t-.3.7l-6 6l1 1l5.3-5.3q.3-.3.7-.3t.7.3t.3.7t-.3.7l-5.3 5.3l1 1l4-4q.3-.3.7-.3t.7.3t.3.7t-.3.7l-6 6Q14 21 10.8 21T5.3 18.7",
		}),
	);
};
