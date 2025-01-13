import type { ChildDom } from "mini-van-plate/van-plate";

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
