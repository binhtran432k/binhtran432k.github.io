import { env } from "mini-van-plate/shared";

import { Contact } from "~/components/contact.js";
import { Footer } from "~/components/footer.js";
import { GithubProfile } from "~/components/github-profile.js";
import { LandingHeader } from "~/components/header.js";
import { Intro } from "~/components/intro.js";
import { Projects } from "~/components/project.js";
import { Skills } from "~/components/skill.js";
import type { MyPage } from "~/index.js";

import landingJs from "~scripts/landing.js" with { type: "text" };
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
	scripts: [(landingJs as string).trim()],
	asyncCsses: ["/styles/lazy-landing.css"],
	getChild: () => {
		const { main } = env.van.tags;
		return main(
			LandingHeader(),
			Intro(),
			Skills(),
			GithubProfile(),
			Projects(),
			Contact(),
			Footer(),
		);
	},
};
