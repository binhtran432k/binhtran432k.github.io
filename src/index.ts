import { registerEnv } from "mini-van-plate/shared";
import van, { type ChildDom } from "mini-van-plate/van-plate";

import { AsyncCss } from "~/components/async-css.js";
import { notFoundPage } from "~/pages/404.js";
import { landingPage } from "~/pages/landing.js";
import { contactSuccessPage } from "./pages/contact-success.js";
import { resumePage } from "./pages/resume.js";

import headerJs from "~scripts/header.js" with { type: "text" };
import coreCss from "~styles/core.css" with { type: "text" };
import eyeButtonCss from "~styles/eye-button.css" with { type: "text" };
import footerCss from "~styles/footer.css" with { type: "text" };
import headerCss from "~styles/header.css" with { type: "text" };
import undercurlCss from "~styles/undercurl.css" with { type: "text" };
import { EyeDefs } from "./components/eye-button.js";
import { UndercurlDefs } from "./components/undercurl.js";
import { joinRaw } from "./utils/core.js";

const { head, title, body, meta, link, style, script } = van.tags;
const { svg } = van.tags("http://www.w3.org/2000/svg");

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
	useBodyBackground?: boolean;
	description?: string;
	keywords?: string[];
	author?: string;
	status?: MySite["status"];
	styles?: string[];
	scripts?: string[];
	asyncCsses?: string[];
	icons?: () => ChildDom;
	getExtraHead?: () => ChildDom;
	getChild?: () => ChildDom;
	svgShare?: () => ChildDom;
};

export function fetchSite(pathname: string | null): MySite {
	const page = resolvePage(pathname);
	const stylesRaw = joinRaw([
		coreCss,
		eyeButtonCss,
		undercurlCss,
		headerCss,
		footerCss,
		page.styles?.join(""),
	]);
	const scriptsRaw = joinRaw([headerJs as string, page.scripts?.join("")]);
	const svgShare = [UndercurlDefs(), EyeDefs(), page.svgShare?.()];
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
			style(stylesRaw),
			page.asyncCsses?.map((href) => AsyncCss({ href })),

			// Extra Head Elements
			page.getExtraHead?.(),
		),
		body(
			page.useBodyBackground && { class: "background" },
			page.getChild?.(),
			svg({ style: "display:none;", hidden: true }, svgShare),
			script(scriptsRaw),
		),
	);
	return {
		content,
		status: page.status ?? 200,
	};
}

export const pageMap: Readonly<Record<string, MyPage>> = {
	"/index.html": landingPage,
	"/contact/success/index.html": contactSuccessPage,
	"/resume/index.html": resumePage,
	"/404.html": notFoundPage,
};

function resolvePage(pathname: string | null): MyPage {
	const page = pathname && pageMap[pathname];
	if (page) return page;

	const indexPage =
		pathname &&
		pageMap[new URL("index.html", Bun.pathToFileURL(pathname)).pathname];
	if (indexPage) return indexPage;

	return pageMap["/404.html"];
}
