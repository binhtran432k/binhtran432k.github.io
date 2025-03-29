import { For } from "solid-js";
import { type SkillItem, skills } from "~/assets/profile";
import ResumeSection from "~/components/ResumeSection";

function Skill(props: SkillItem) {
	return (
		<div class="after:content-['.']">
			<h3 class="inline font-bold">{props.name}</h3>:{" "}
			<span>{new Intl.ListFormat("en").format(props.items)}</span>
		</div>
	);
}

export default function Skills() {
	return (
		<ResumeSection title="Skills">
			<ul class="my-1 ml-8 list-disc">
				<For each={skills}>
					{(skill) => (
						<li>
							<Skill {...skill} />
						</li>
					)}
				</For>
			</ul>
		</ResumeSection>
	);
}
