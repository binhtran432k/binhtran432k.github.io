import { A } from "@solidjs/router";
import { For } from "solid-js";

interface SocialLinkProps {
	url: string;
	label: string;
	icon: string;
}

const socials: SocialLinkProps[] = [
	{
		url: "https://github.com/binhtran432k",
		label: "Github",
		icon: "icon-[simple-icons--github]",
	},
	{
		url: "https://www.linkedin.com/in/binhtran432k",
		label: "Linkedin",
		icon: "icon-[ri--linkedin-fill]",
	},
	{
		url: "https://x.com/binhtran432k",
		label: "X",
		icon: "icon-[simple-icons--x]",
	},
	{
		url: "https://www.facebook.com/binhtran432k",
		label: "Facebook",
		icon: "icon-[simple-icons--facebook]",
	},
	{
		url: "https://www.youtube.com/@binhtran432k",
		label: "Youtube",
		icon: "icon-[simple-icons--youtube]",
	},
];

function SocialLink(props: SocialLinkProps) {
	return (
		<div class="group relative flex place-items-center">
			<span
				class="absolute top-0 left-0 hidden text-info group-hover:block group-hover:animate-around group-hover:[animation-duration:300ms]"
				classList={{ [props.icon]: true }}
			/>
			<span
				class="absolute top-0 left-0 hidden text-danger group-hover:block group-hover:animate-around group-hover:[animation-delay:150ms] group-hover:[animation-duration:300ms]"
				classList={{ [props.icon]: true }}
			/>
			<A
				href={props.url}
				target="_blank"
				title={`Social Link of ${props.label}`}
				class="z-10"
				rel="noreferrer"
			>
				<span classList={{ [props.icon]: true }} />
			</A>
		</div>
	);
}

export default function Social() {
	return (
		<ul class="container m-auto flex flex-wrap justify-center gap-4 px-2 py-4">
			<For each={socials}>
				{(social) => (
					<li class="text-3xl">
						<SocialLink {...social} />
					</li>
				)}
			</For>
		</ul>
	);
}
