import { For } from "solid-js";
import { education } from "~/assets/profile";
import ResumeSection from "~/components/ResumeSection";
import ResumeTimeline from "~/components/ResumeTimeline";

export default function Education() {
	return (
		<ResumeSection title="Education">
			<For each={education}>
				{(timeline) => <ResumeTimeline {...timeline} />}
			</For>
		</ResumeSection>
	);
}
