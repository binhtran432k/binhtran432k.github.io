import { env } from "mini-van-plate/shared";

import { Header } from "~/components/header";
import { Intro } from "~/components/intro.js";
import type { MyPage } from "~/index.js";

import coreLandingCss from "~styles/core-landing.css" with { type: "text" };

export const landingPage: MyPage = {
	title: "BINH TRAN - Self Studied Developer",
	description:
		"Self studied web developer with enthusiasm on developing Intelligence Language Tools",
	keywords: [
		"binh tran",
		"fullstack",
		"automation",
		"developer",
		"tester",
		"web development",
		"javascript",
		"typescript",
		"golang",
		"zig",
		"low level language",
		"language server",
		"lsp",
	],
	author: "Binh Tran",
	styles: [coreLandingCss.trim()],
	asyncCsses: [
		"/styles/landing.css",
		"https://i.icomoon.io/public/temp/e9a02c2957/binhtran432k/style.css",
	],
	getChild: () => {
		const { main } = env.van.tags;
		return main({ id: "home", class: "landing" }, Header(), Intro());
	},
};
