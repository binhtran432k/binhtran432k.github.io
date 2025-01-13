import { env } from "mini-van-plate/shared";
import type { MyPage } from "~/type.d.js";

import { Footer } from "~/components/footer.js";
import { LandingHeader } from "~/components/header.js";

export const notFoundPage: MyPage = {
	title: "Page Not Found",
	status: 404,
	author: "Binh Tran",
	styles: [
		// ":root{--primary-rgb:var(--danger-rgb);--primary:rgb(var(--primary-rgb));}",
		"icon.css",
	],
	useBodyBackground: true,
	getChild: () => {
		const { main, h1, p, section } = env.van.tags;
		return [
			LandingHeader(),
			main(
				section(
					{ class: "page-content container" },
					h1("Page not found"),
					p("This is not the web page you are looking for."),
				),
			),
			Footer(),
		];
	},
};
