import { env } from "mini-van-plate/shared";
import type { ChildDom } from "mini-van-plate/van-plate";
import { joinClasses } from "~/utils/core";

export const Section = (
	props: { class?: string; title: string },
	...body: ChildDom[]
) => {
	const { section, h2 } = env.van.tags;

	return section(
		{ class: joinClasses(["section container", props.class]) },
		h2({ class: "title" }, props.title),
		...body,
	);
};
