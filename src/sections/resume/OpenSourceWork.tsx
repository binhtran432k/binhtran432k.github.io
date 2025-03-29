import { For } from "solid-js";
import { opensourceWorks } from "~/assets/profile";
import ResumeSection from "~/components/ResumeSection";
import ResumeWork from "~/components/ResumeWork";

export default function OpenSourceWork() {
	return (
		<ResumeSection title="Open Source Work">
			<For each={opensourceWorks}>{(work) => <ResumeWork {...work} />}</For>
		</ResumeSection>
	);
}
