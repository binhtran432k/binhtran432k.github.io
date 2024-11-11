import { env } from "mini-van-plate/shared";

export const Header = () => {
	const { header, div, a, span, nav } = env.van.tags;
	return header(
		{ class: "header" },
		div(
			{ class: "header__container" },
			a(
				{ href: "/", class: "header__logo" },
				"Binh",
				" ",
				span({ class: "header__site" }, "Home"),
			),
			nav(
				{ class: "navbar" },
				a(
					{ href: "#home", class: "navbar__link navbar--active" },
					span("Home"),
				),
				a({ href: "#education", class: "navbar__link" }, span("Education")),
				a({ href: "#contact", class: "cool-button" }, span("Contact")),
			),
		),
	);
};
