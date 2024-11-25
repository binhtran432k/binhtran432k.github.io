import { env } from "mini-van-plate/shared";

import { socials } from "~/profile.js";

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
