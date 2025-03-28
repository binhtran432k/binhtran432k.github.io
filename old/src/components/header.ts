import { env } from "mini-van-plate/shared";
import type { ChildDom } from "mini-van-plate/van-plate";
import { PrintIcon } from "~/icons";

const CoolLink = ({ href, label }: { href: string; label: string }) => {
	const { a, span } = env.van.tags;
	return a({ href, class: "cool-link" }, span(label));
};

const CoolButton = ({ href, label }: { href: string; label: string }) => {
	const { a, span } = env.van.tags;
	return a({ href, class: "cool-button shadow" }, span(label));
};

const HeaderLogo = ({ href }: { href: string }, page: string) => {
	const { a, span } = env.van.tags;
	return a({ href, class: "logo" }, "Binh", " ", span({ class: "site" }, page));
};

const HeaderNav = (
	links: { href: string; label?: string; isButton?: boolean }[],
	...extra: ChildDom[]
) => {
	const { div, input, label, nav } = env.van.tags;
	return div(
		{ class: "wrap-nav" },
		...extra,
		input({ type: "checkbox", id: "nav-toggle", style: "display:none;" }),
		label({
			for: "nav-toggle",
			class: "nav-toggle",
			hidecoolcursor: true,
		}),
		nav(
			links.map(({ href, label, isButton }) =>
				isButton
					? CoolButton({ href, label: label ?? href })
					: CoolLink({ href, label: label ?? href }),
			),
		),
	);
};

export const ResumeHeader = () => {
	const { header, div, button } = env.van.tags;
	return header(
		div(
			{ class: "container" },
			HeaderLogo({ href: "/resume" }, "Resume"),
			HeaderNav(
				[{ href: "/", label: "Landing", isButton: true }],
				button({ class: "print", onclick: "window.print();" }, PrintIcon()),
			),
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
				{ href: "/#intro", label: "Intro" },
				{ href: "/#skill", label: "Skills" },
				{ href: "/#github-profile", label: "Github Profile" },
				{ href: "/#project", label: "Projects" },
				{ href: "/#contact", label: "Contact", isButton: true },
			]),
		),
	);
};
