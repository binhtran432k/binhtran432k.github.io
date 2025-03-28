import { env } from "mini-van-plate/shared";
import type { MyPage } from "~/type.d.js";

import { Footer } from "~/components/footer.js";
import { LandingHeader } from "~/components/header.js";

export const contactSuccessPage: MyPage = {
	title: "BINH TRAN - Contact Success",
	author: "Binh Tran",
	styles: [
		// ":root{--primary-rgb:var(--success-rgb);--primary:rgb(var(--primary-rgb));}",
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
					h1("Thank You! 🎉"),
					p("Your message has been successfully sent."),
					p("I’ll get back to you as soon as possible."),
					p("Feel free to explore the rest of the site in the meantime!"),
				),
			),
			Footer(),
		];
	},
};
