import { Section } from "./section.js";
import { Timeline } from "./timeline.js";

export const Education = () => {
	return Section(
		{ class: "education", title: "Education" },
		Timeline({
			label: "Ho Chi Minh city University of Technology",
			sublabel: "Bachelor of Engineering in Computer Science",
			timeline: "Sep 2018 - Nov 2024",
			location: "Ho Chi Minh, Vietnam",
		}),
	);
};
