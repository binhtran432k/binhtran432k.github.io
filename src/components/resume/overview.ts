import { env } from "mini-van-plate/shared";
import type { ChildDom } from "mini-van-plate/van-plate";

import {
	CallIcon,
	EmailIcon,
	GithubIcon,
	GlobeIcon,
	LinkedinIcon,
} from "~/icons.js";
import { contacts, metadata } from "~/profile.js";
import { trimProtocol } from "~/utils/profile.js";

function getContactIcon(url: string): ChildDom {
	if (url.startsWith("mailto:")) return EmailIcon();
	if (url.startsWith("tel:")) return CallIcon();
	if (url.includes("github.com")) return GithubIcon();
	if (url.includes("linkedin.com")) return LinkedinIcon();
	return GlobeIcon();
}

const Link = (url: string) => {
	const { a } = env.van.tags;
	return a({ href: url, target: "_blank" }, trimProtocol(url));
};

const ContactLink = (url: string) => {
	const { a } = env.van.tags;
	return a(
		{ href: url, target: "_blank", class: "ctc" },
		getContactIcon(url),
		trimProtocol(url),
	);
};

export const Overview = () => {
	const { section, div, h1, p } = env.van.tags;

	return section(
		{ class: "overview container" },
		h1({ class: "name" }, `${metadata.firstName} ${metadata.lastName}`),
		div(
			{ class: "ctcs" },
			Object.values(contacts).map((url) => ContactLink(url)),
		),
		p("(Live version: ", Link(metadata.resume), ")"),
	);
};
