import { For } from "solid-js";
import ScrollDown from "~/components/ScrollDown";
import Social from "~/components/Social";

function IntroText() {
	return (
		<div class="container m-auto p-4 font-mono">
			<h2 class="text-xl md:text-2xl lg:text-3xl">Hi 👋, My name is</h2>
			<h1 class="text-2xl md:text-4xl lg:text-5xl">Binh Tran</h1>
			<ul>
				<For
					each={[
						"Full stack web developer",
						"Automation tester",
						"from Vietnam",
					]}
				>
					{(txt) => <li class="text-xl md:text-2xl lg:text-3xl">{txt}</li>}
				</For>
			</ul>
		</div>
	);
}

export default function Intro() {
	return (
		<div id="intro" class="flex grow flex-col flex-wrap justify-between">
			<div class="flex grow flex-col justify-between">
				<IntroText />
				<Social />
			</div>
      <ScrollDown />
		</div>
	);
}
