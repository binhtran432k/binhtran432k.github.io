import { env } from "mini-van-plate/shared";
import { metadata, socials } from "~/profile";
import { EyeButton } from "./eye-button";
import { UndercurlLink } from "./undercurl";

const FootAvatar = () => {
	const { div, img, h3, h4 } = env.van.tags;
	return div(
		{ class: "foot-avatar" },
		img({ src: "/assets/profile.webp", alt: "Footer Avatar" }),
		div(h3(metadata.name), h4("Software Engineer")),
	);
};

const FootMail = () => {
	const { div, h3, h4 } = env.van.tags;
	return div({ class: "foot-mail" }, h4("Get in touch"), h3(metadata.email));
};

const FootSocial = () => {
	const { div } = env.van.tags;
	return div(
		{ class: "foot-social" },
		Object.entries(socials)
			.filter(([, x]) => Boolean(x))
			.map(([title, href]) => UndercurlLink({ href, target: "_blank" }, title)),
	);
};

export const Footer = () => {
	const { footer, div, p } = env.van.tags;
	return footer(
		{ class: "container" },
		div(
			{ class: "summary" },
			FootAvatar(),
			FootMail(),
			EyeButton({ href: "/#contact", isContact: true }),
		),
		FootSocial(),
		p(`Copyright © ${new Date().getFullYear()}`),
	);
};
