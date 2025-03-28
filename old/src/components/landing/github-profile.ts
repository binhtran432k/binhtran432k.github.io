import { env } from "mini-van-plate/shared";

const ghStatsStyle = {
	disable_animations: "true",
	hide_border: "true",
	bg_color: "00000000",
	text_color: "f8f8f2",
	title_color: "bd93f9",
	icon_color: "bd93f9",
};

const GithubStats = () => {
	const { img, a } = env.van.tags;
	return a(
		{
			href: `https://github-readme-stats.vercel.app/api?${new URLSearchParams({
				username: "binhtran432k",
				show_icons: "true",
			})}`,
			target: "_blank",
		},
		img({
			src: `https://github-readme-stats.vercel.app/api?${new URLSearchParams({
				username: "binhtran432k",
				show_icons: "true",
				...ghStatsStyle,
			})}`,
			width: 467,
			height: 195,
			alt: "Github Stats of Binh Tran",
		}),
	);
};

const GithubLanguages = () => {
	const { img, a } = env.van.tags;
	return a(
		{
			href: `https://github-readme-stats.vercel.app/api/top-langs/?${new URLSearchParams(
				{
					username: "binhtran432k",
					hide: "html,css",
					langs_count: "10",
					layout: "compact",
				},
			)}`,
			target: "_blank",
		},
		img({
			src: `https://github-readme-stats.vercel.app/api/top-langs/?${new URLSearchParams(
				{
					username: "binhtran432k",
					hide: "html,css",
					langs_count: "10",
					layout: "compact",
					...ghStatsStyle,
				},
			)}`,
			width: 300,
			height: 215,
			alt: "Top Languages of Binh Tran",
		}),
	);
};

export const GithubProfile = () => {
	const { section, div, img, a, h3 } = env.van.tags;
	return section(
		{ class: "github-profile container" },
		div({ id: "github-profile" }),
		h3({ class: "title" }, "Github Profile"),
		div(
			{ class: "content" },
			a(
				{
					class: "avatar",
					href: "https://github.com/binhtran432k",
					target: "_blank",
				},
				img({
					src: "/assets/avatar.webp",
					alt: "Avatar of Binh Tran",
					width: 150,
					height: 150,
				}),
			),
			div({ class: "stats" }, GithubStats(), GithubLanguages()),
		),
	);
};
