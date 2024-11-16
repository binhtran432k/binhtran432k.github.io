import { env } from "mini-van-plate/shared";

export const Header = () => {
	const { header, div, a, input, label, span, nav } = env.van.tags;
	return header(
		{ class: "header" },
		div(
			{ class: "container" },
			a(
				{ href: "/", class: "logo" },
				"Binh",
				" ",
				span({ class: "site" }, "Home"),
			),
			input({ type: "checkbox", id: "navbar-toggle", style: "display:none;" }),
			label({ for: "navbar-toggle", class: "navbar-toggle" }),
			nav(
				{ class: "navbar" },
				a({ href: "#about", class: "cool-link" }, span("About")),
				a({ href: "#skill", class: "cool-link" }, span("Skills")),
				a(
					{ href: "#github-profile", class: "cool-link" },
					span("Github Profile"),
				),
				a({ href: "#contact", class: "cool-button" }, span("Contact")),
			),
		),
	);
};
