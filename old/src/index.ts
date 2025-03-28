import van from "mini-van-plate/van-plate";

import type { MyPage, MySite } from "./type.d";

import { AsyncCss } from "./components/async-css.js";
import { EyeDefs } from "./components/eye-button.js";
import { UndercurlDefs } from "./components/undercurl.js";
import { notFoundPage } from "./pages/404.js";
import { contactSuccessPage } from "./pages/contact-success.js";
import { landingPage } from "./pages/landing.js";
import { resumePage } from "./pages/resume.js";

const { head, title, body, meta, link, script } = van.tags;
const { svg } = van.tags("http://www.w3.org/2000/svg");

export function fetchSite(pathname: string | null): MySite {
	const page = resolvePage(pathname);
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
			[
				"core.css",
				"eye-button.css",
				"undercurl.css",
				"header.css",
				"footer.css",
			].map((x) => link({ rel: "stylesheet", href: `/styles/${x}` })),
			page.styles?.map((x) =>
				link({ rel: "stylesheet", href: `/styles/${x}` }),
			),
			page.asyncCsses?.map((x) => AsyncCss({ href: `/styles/${x}` })),

			// Extra Head Elements
			page.getExtraHead?.(),
		),
		body(
			page.useBodyBackground && { class: "background" },
			page.getChild?.(),
			svg({ style: "display:none;", hidden: true }, svgShare),
			["header.js", ...(page.scripts ?? [])].map((x) =>
				script({ src: `/scripts/${x}`, type: "module" }),
			),
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
