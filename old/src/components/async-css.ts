import { env } from "mini-van-plate/shared";

export const AsyncCss = ({ href }: { href: string }) => {
	const { link, noscript } = env.van.tags;
	return [
		link({
			rel: "preload",
			href,
			as: "style",
			onload: "this.onload=null;this.rel='stylesheet'",
		}),
		noscript(link({ rel: "stylesheet", href })),
	];
};
