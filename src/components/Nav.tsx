import { For } from "solid-js";
import CoolLink, { type CoolLinkProps } from "./CoolLink";
import DarkToggleButton from "./DarkToggleButton";

const navLinks: CoolLinkProps[] = [
	{ url: "/#intro", label: "Intro" },
	{ url: "/#skill", label: "Skills" },
	{ url: "/#github-profile", label: "Github Profile" },
	{ url: "/#project", label: "Projects" },
];

export default function Nav() {
	return (
		<nav>
			<ul class="flex flex-wrap items-center gap-4 md:gap-8 md:px-2 md:text-lg">
				<For each={navLinks}>
					{(item) => (
						<li class="font-bold">
							<CoolLink {...item} />
						</li>
					)}
				</For>
				<DarkToggleButton />
			</ul>
		</nav>
	);
}
