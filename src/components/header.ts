import { env } from "mini-van-plate/shared";

const CoolLink = ({ href, title }: { href: string; title: string }) => {
	const { a, span } = env.van.tags;
	return a({ href, class: "cool-link", hidecoolcursor: true }, span(title));
};

const CoolButton = ({ href, title }: { href: string; title: string }) => {
	const { a, span } = env.van.tags;
	return a({ href, class: "cool-button", hidecoolcursor: true }, span(title));
};

export const Header = () => {
	const { header, div, a, input, label, span, nav } = env.van.tags;
	return header(
		div(
			{ class: "container" },
			a(
				{ href: "/", class: "logo", hidecoolcursor: true },
				"Binh",
				" ",
				span({ class: "site" }, "Landing"),
			),
			input({ type: "checkbox", id: "navbar-toggle", style: "display:none;" }),
			label({
				for: "navbar-toggle",
				class: "navbar-toggle",
				hidecoolcursor: true,
			}),
			nav(
				{ class: "navbar" },
				CoolLink({ href: "#intro", title: "Intro" }),
				CoolLink({ href: "#skill", title: "Skills" }),
				CoolLink({ href: "#github-profile", title: "Github Profile" }),
				CoolButton({ href: "#contact", title: "Contact" }),
			),
		),
	);
};
