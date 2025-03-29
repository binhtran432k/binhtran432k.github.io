import { A } from "@solidjs/router";
import { For } from "solid-js";
import { socialData } from "~/assets/profile";

interface SocialLinkProps {
	url: string;
	label: string;
	icon: string;
}

const socials: SocialLinkProps[] = [
	{
		url: socialData.github,
		label: "Github",
		icon: "icon-[fa6-brands--github]",
	},
	{
		url: socialData.linkedin,
		label: "Linkedin",
		icon: "icon-[fa6-brands--linkedin]",
	},
	{
		url: socialData.x,
		label: "X",
		icon: "icon-[fa6-brands--x-twitter]",
	},
	{
		url: socialData.facebook,
		label: "Facebook",
		icon: "icon-[fa6-brands--facebook]",
	},
	{
		url: socialData.youtube,
		label: "Youtube",
		icon: "icon-[fa6-brands--youtube]",
	},
];

function SocialLink(props: SocialLinkProps) {
	return (
		<div class="group relative flex place-items-center">
			<span
				class="absolute top-0 left-0 hidden text-info group-hover:block group-hover:animate-around dark:text-info-dark group-hover:[animation-duration:300ms]"
				classList={{ [props.icon]: true }}
			/>
			<span
				class="absolute top-0 left-0 hidden text-danger group-hover:block group-hover:animate-around dark:text-danger-dark group-hover:[animation-delay:150ms] group-hover:[animation-duration:300ms]"
				classList={{ [props.icon]: true }}
			/>
			<A
				href={props.url}
				target="_blank"
				title={`Social Link for ${props.label}`}
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
