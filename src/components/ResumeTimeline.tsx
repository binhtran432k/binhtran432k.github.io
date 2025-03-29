import type { TimelineItem } from "~/assets/profile";

export default function ResumeTimeline(props: TimelineItem) {
	return (
		<article class="my-1 ml-4 flex justify-between">
			<div class="flex flex-col">
				<h3 class="font-bold">{props.label}</h3>
				<p class="italic opacity-80">{props.sublabel}</p>
			</div>
			<div class="flex flex-col items-end">
				<span>{props.timeline}</span>
				<span class="italic opacity-80">{props.location}</span>
			</div>
		</article>
	);
}
