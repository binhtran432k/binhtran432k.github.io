import { env } from "mini-van-plate/shared";

import { Overview } from "~/components/cv/overview.js";
import { Footer } from "~/components/footer.js";
import { CvHeader } from "~/components/header.js";
import { IconDefs } from "~/icons";
import type { MyPage } from "~/index.js";

import headerJs from "~scripts/header.js" with { type: "text" };
import cvCss from "~styles/cv.css" with { type: "text" };
import iconCss from "~styles/icon.css" with { type: "text" };

export const cvPage: MyPage = {
	title: "BINH TRAN - Curriculum Vitae",
	author: "Binh Tran",
	styles: [
		":root{--primary-rgb:var(--info-rgb);--primary:rgb(var(--primary-rgb));}",
		cvCss.trim(),
		iconCss.trim(),
	],
	scripts: [(headerJs as string).trim()],
	asyncCsses: ["/styles/lazy-landing.css"],
	useBodyBackground: true,
	svgShare: () => IconDefs(),
	getChild: () => {
		const { main } = env.van.tags;
		return [CvHeader(), main(Overview()), Footer()];
	},
};
