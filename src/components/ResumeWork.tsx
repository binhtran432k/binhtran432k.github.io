import { For, Show } from "solid-js";
import type { WorkItem } from "~/assets/profile";

export default function ResumeWork(props: WorkItem) {
	return (
		<article class="my-1 ml-3">
			<div class="flex flex-wrap gap-x-2">
				<Show
					when={props.url}
					fallback={<h3 class="font-bold">{props.name}</h3>}
				>
					<a
						class="inline-flex flex-wrap items-center gap-1 font-bold text-info hover:opacity-80 not-print:dark:text-info-dark"
						href={props.url}
						target="_blank"
						rel="noreferrer"
					>
						{props.name}
						<span class="icon-[material-symbols--open-in-new]" />
					</a>
				</Show>
				|<span>{props.timeline}</span>|<span>{props.extra}</span>
			</div>
			<ul class="ml-5 list-disc text-sm/5">
				<For each={props.details}>{(detail) => <li>{detail}</li>}</For>
			</ul>
		</article>
	);
}
