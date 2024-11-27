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

type ContactKey = keyof typeof contacts;

const contactIconMap: {
	[x in ContactKey]: () => ChildDom;
} = {
	github: GithubIcon,
	linkedin: LinkedinIcon,
	email: EmailIcon,
	phone: CallIcon,
	website: GlobeIcon,
};

const Link = (url: string) => {
	const { a } = env.van.tags;
	return a({ href: url, target: "_blank" }, trimProtocol(url));
};

const ContactLink = (label: ContactKey, url: string) => {
	const { a } = env.van.tags;
	return a(
		{ href: url, target: "_blank", class: "ctc" },
		contactIconMap[label],
		trimProtocol(url),
	);
};

export const Overview = () => {
	const { section, div, h1, p, a } = env.van.tags;

	return section(
		{ class: "overview container" },
		h1({ class: "name" }, `${metadata.firstName} ${metadata.lastName}`),
		div(
			{ class: "ctcs" },
			Object.entries(contacts).map(([label, url]) =>
				ContactLink(label as ContactKey, url),
			),
		),
		p("(Live version: ", Link(metadata.cv), ")"),
	);
};
