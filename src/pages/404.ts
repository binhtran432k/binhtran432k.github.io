import { env } from "mini-van-plate/shared";

import type { MyPage } from "../index.js";

export const notFoundPage: MyPage = {
	title: "Page Not Found",
	status: 404,
	getChild: () => {
		const { h1, p, div } = env.van.tags;
		return div(
			h1("Page not found"),
			p("Sorry, that page doesn't seem to exist"),
		);
	},
};
