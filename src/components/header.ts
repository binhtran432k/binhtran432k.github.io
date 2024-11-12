import { env } from "mini-van-plate/shared";

export const Header = () => {
	const { header, div, a, span, nav } = env.van.tags;
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
			nav(
				{ class: "navbar" },
				a({ href: "#home", class: "cool-link" }, span("Home")),
				a({ href: "#education", class: "cool-link" }, span("Education")),
				a({ href: "#contact", class: "cool-button" }, span("Contact")),
			),
		),
	);
};
