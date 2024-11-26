import { env } from "mini-van-plate/shared";

const CoolLink = ({ href, title }: { href: string; title: string }) => {
	const { a, span } = env.van.tags;
	return a({ href, class: "cool-link", hidecoolcursor: true }, span(title));
};

const CoolButton = ({ href, title }: { href: string; title: string }) => {
	const { a, span } = env.van.tags;
	return a(
		{ href, class: "cool-button shadow", hidecoolcursor: true },
		span(title),
	);
};

const HeaderLogo = ({ href }: { href: string }, page: string) => {
	const { a, span } = env.van.tags;
	return a(
		{ href, class: "logo", hidecoolcursor: true },
		"Binh",
		" ",
		span({ class: "site" }, page),
	);
};

const HeaderNav = (
	links: { href: string; title: string; isButton?: boolean }[],
) => {
	const { input, label, nav } = env.van.tags;
	return [
		input({ type: "checkbox", id: "navbar-toggle", style: "display:none;" }),
		label({
			for: "navbar-toggle",
			class: "navbar-toggle",
			hidecoolcursor: true,
		}),
		nav(
			{ class: "navbar" },
			links.map(({ href, title, isButton }) =>
				isButton ? CoolButton({ href, title }) : CoolLink({ href, title }),
			),
		),
	];
};

export const CvHeader = () => {
	const { header, div } = env.van.tags;
	return header(
		div(
			{ class: "container" },
			HeaderLogo({ href: "/cv" }, "CV"),
			HeaderNav([{ href: "/#contact", title: "Contact", isButton: true }]),
		),
	);
};

export const LandingHeader = () => {
	const { header, div } = env.van.tags;
	return header(
		div(
			{ class: "container" },
			HeaderLogo({ href: "/" }, "Landing"),
			HeaderNav([
				{ href: "/#intro", title: "Intro" },
				{ href: "/#skill", title: "Skills" },
				{ href: "/#github-profile", title: "Github Profile" },
				{ href: "/#project", title: "Projects" },
				{ href: "/#contact", title: "Contact", isButton: true },
			]),
		),
	);
};
