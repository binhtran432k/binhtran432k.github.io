import { env } from "mini-van-plate/shared";

import { Footer } from "~/components/footer.js";
import { ResumeHeader } from "~/components/header.js";
import { Education } from "~/components/resume/education";
import { OpenSourceWork } from "~/components/resume/opensource-work";
import { Overview } from "~/components/resume/overview.js";
import { Projects } from "~/components/resume/projects.js";
import { Skills } from "~/components/resume/skills.js";
import { ResumeIconDefs } from "~/icons.js";
import type { MyPage } from "~/index.js";

import headerJs from "~scripts/header.js" with { type: "text" };
import iconCss from "~styles/icon.css" with { type: "text" };
import resumeCss from "~styles/resume.css" with { type: "text" };

export const resumePage: MyPage = {
	title: "BINH TRAN - Resume",
	author: "Binh Tran",
	styles: [
		":root{--primary-rgb:var(--info-rgb);--primary:rgb(var(--primary-rgb));}",
		resumeCss.trim(),
		iconCss.trim(),
	],
	scripts: [(headerJs as string).trim()],
	useBodyBackground: true,
	svgShare: () => ResumeIconDefs(),
	getChild: () => {
		const { main } = env.van.tags;
		return [
			ResumeHeader(),
			main(Overview(), OpenSourceWork(), Skills(), Projects(), Education()),
			Footer(),
		];
	},
};
