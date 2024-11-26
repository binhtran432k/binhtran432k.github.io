import { env } from "mini-van-plate/shared";

import { Footer } from "~/components/footer.js";
import { LandingHeader } from "~/components/header.js";
import type { MyPage } from "~/index.js";

import headerJs from "~scripts/header.js" with { type: "text" };
import iconCss from "~styles/icon.css" with { type: "text" };

export const contactSuccessPage: MyPage = {
	title: "BINH TRAN - Contact Success",
	author: "Binh Tran",
	styles: [
		":root{--primary-rgb:var(--success-rgb);--primary:rgb(var(--primary-rgb));}",
		iconCss.trim(),
	],
	scripts: [(headerJs as string).trim()],
	asyncCsses: ["/styles/lazy-landing.css"],
	getChild: () => {
		const { main, h1, p, section } = env.van.tags;
		return main(
			{ class: "background" },
			LandingHeader(),
			section(
				{ class: "page-content container" },
				h1("Thank You! 🎉"),
				p("Your message has been successfully sent."),
				p("I’ll get back to you as soon as possible."),
				p("Feel free to explore the rest of the site in the meantime!"),
			),
			Footer(),
		);
	},
};
