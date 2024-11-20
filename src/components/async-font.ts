import { env } from "mini-van-plate/shared";

export const AsyncFont = ({ href }: { href: string }) => {
	const { link } = env.van.tags;
	return link({
		rel: "preload",
		href,
		as: "font",
		type: "font/woff2",
		crossorigin: true,
	});
};
