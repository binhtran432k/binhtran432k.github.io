import { registerEnv } from "mini-van-plate/shared";
import van, { type ChildDom } from "mini-van-plate/van-plate";

import { notFoundPage } from "./pages/404.js";
import { landingPage } from "./pages/landing.js";
import coreCss from "./styles/core.css" with { type: "text" };
import { minifyCss } from "./utils/css.js";

const { head, title, body, meta, link, style } = van.tags;

registerEnv({ van });

export interface MyServer {
	fetch(request: Request): string;
}

export type MySite = {
	content: string;
	status: 200 | 404;
};

export type MyPage = {
	title: string;
	description?: string;
	keywords?: string[];
	author?: string;
	status?: MySite["status"];
	getExtraHead?: () => ChildDom;
	getChild?: () => ChildDom;
};

export function fetchSite(pathname: string | null): MySite {
	const page = resolvePage(pathname);
	const content = van.html(
		{ lang: "en-us" },
		head(
			meta({ charSet: "utf-8" }),
			link({ href: "/manifest.json", rel: "manifest" }),
			title(page.title),
			link({ href: "https://binhtran432k.com/", rel: "canonical" }),
			meta({
				content: "width=device-width, initial-scale=1.0",
				name: "viewport",
			}),
			link({ href: "/favicon.svg", rel: "icon", type: "image/svg+xml" }),
			page.description &&
				meta({ name: "description", content: page.description }),
			page.keywords &&
				meta({ name: "keywords", content: page.keywords.join(", ") }),
			page.author && meta({ name: "author", content: page.author }),

			// Styles
			style(minifyCss(coreCss)),

			// Extra Head Elements
			page.getExtraHead?.(),
		),
		body(page.getChild?.()),
	);
	return {
		content,
		status: page.status ?? 200,
	};
}

function resolvePage(pathname: string | null): MyPage {
	if (pathname === "/") return landingPage;
	return notFoundPage;
}
