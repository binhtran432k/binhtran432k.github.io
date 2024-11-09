import { env } from "mini-van-plate/shared";

import { AsyncCss } from "../components/async-css.js";
import { AsyncFont } from "../components/async-font.js";
import { Intro } from "../components/intro.js";
import type { MyPage } from "../index.js";
import { minifyCss } from "../utils/css.js";

import coreLandingCss from "../styles/core-landing.css" with { type: "text" };

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
	getExtraHead: () => {
		const { style } = env.van.tags;
		return [
			AsyncFont({ href: "/fonts/noir_et_blanc.woff2" }),
			style(minifyCss(coreLandingCss)),
			AsyncCss({ href: "/styles/landing.css" }),
		];
	},
	getChild: () => {
		const { main } = env.van.tags;
		return main(Intro());
	},
};
