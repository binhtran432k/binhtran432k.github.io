import { Title } from "@solidjs/meta";
import Certificates from "~/sections/resume/Certificates";
import Education from "~/sections/resume/Education";
import Experiences from "~/sections/resume/Experiences";
import OpenSourceWork from "~/sections/resume/OpenSourceWork";
import Overview from "~/sections/resume/Overview";
import Skills from "~/sections/resume/Skills";

export default function Resume() {
	return (
		<>
			<Title>Binh Tran | Resume</Title>
			<main class="not-print:container m-auto print:m-[1.5cm]">
				<Overview />
				<OpenSourceWork />
				<Experiences />
				<Skills />
				<Certificates />
				<Education />
			</main>
		</>
	);
}
