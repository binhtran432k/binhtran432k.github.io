import type { JSX } from "solid-js";

export default function ResumeSection(props: { title: string; children?: JSX.Element }) {
	return (
		<section class="m-2">
			<h2 class="border-b-1 font-semibold text-xl [font-variant:small-caps]">{props.title}</h2>
			{props.children}
		</section>
	);
}
