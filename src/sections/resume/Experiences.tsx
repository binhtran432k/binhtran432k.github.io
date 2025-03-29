import { For } from "solid-js";
import { experiences } from "~/assets/profile";
import ResumeSection from "~/components/ResumeSection";
import ResumeWork from "~/components/ResumeWork";

export default function Experiences() {
	return (
		<ResumeSection title="Experiences">
			<For each={experiences}>{(work) => <ResumeWork {...work} />}</For>
		</ResumeSection>
	);
}
