import { env } from "mini-van-plate/shared";

const socials = {
	linkedin: "https://www.linkedin.com/in/binhtran432k",
	github: "https://github.com/binhtran432k",
	instagram: undefined,
	x: "https://twitter.com/binhtran432k",
	facebook: "https://www.facebook.com/binhtran432k",
	youtube: "https://www.youtube.com/@binhtran432k",
} as const;

export const Social = () => {
	const { div, a, span } = env.van.tags;
	return div(
		{ class: "social" },
		Object.entries(socials)
			.filter(([, x]) => Boolean(x))
			.map(([label, href]) =>
				a(
					{
						href,
						target: "_blank",
						"aria-label": `${label} link`,
						hidecoolcursor: true,
					},
					span({ class: `bi-${label}` }),
				),
			),
	);
};
