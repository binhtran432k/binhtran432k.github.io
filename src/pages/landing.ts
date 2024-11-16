import { env } from "mini-van-plate/shared";
import { GithubProfile } from "~/components/github-profile";

import { About } from "~/components/about.js";
import { Skill } from "~/components/skill.js";
import type { MyPage } from "~/index.js";

import iconCss from "~styles/icon.css" with { type: "text" };
import landingCss from "~styles/landing.css" with { type: "text" };

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
	styles: [landingCss.trim(), iconCss.trim()],
	asyncCsses: ["/styles/lazy-landing.css"],
	getChild: () => {
		const { main } = env.van.tags;
		return main(About(), Skill(), GithubProfile());
	},
};
