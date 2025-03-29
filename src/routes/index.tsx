import { Meta, Title } from "@solidjs/meta";
import Footer from "~/sections/home/Footer";
import Header from "~/sections/home/Header";
import Intro from "~/sections/home/Intro";

export default function Home() {
	return (
		<>
			<Title>
				Binh Tran - Aspiring Full-Stack Developer with Automation Focus
			</Title>
			<Meta
				name="description"
				content="Aspiring full-stack developer dedicated to crafting scalable and efficient web solutions. My current skillset includes React, Spring Boot, and Asp.Net Core, and I'm actively developing my expertise in automation testing to deliver high-quality, dependable applications. Check out my work!"
			/>
			<Meta
				name="keywords"
				content="binh tran, fullstack, automation, developer, tester, javascript, typescript, rust, golang, zig, language server, lsp"
			/>
			<div class="relative flex min-h-dvh flex-col">
				<Header />
				<Intro />
			</div>
			<Footer />
		</>
	);
}
