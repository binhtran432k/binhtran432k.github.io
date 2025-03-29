import { For, Show } from "solid-js";
import { contacts, metadata } from "~/assets/profile";

function getContactIconClassName(url: string): string {
	if (url.startsWith("mailto:")) return "icon-[material-symbols--mail]";
	if (url.startsWith("tel:")) return "icon-[material-symbols--phone-enabled]";
	if (url.includes("github.com")) return "icon-[fa6-brands--github]";
	if (url.includes("linkedin.com")) return "icon-[fa6-brands--linkedin]";
	return "icon-[material-symbols--globe]";
}

export function trimProtocol(link: string): string {
	return link.replace(/^(tel:|mailto:|https?:\/\/(www\.)?)/, "");
}

function Link(props: { url: string }) {
	return (
		<a
			class="text-info hover:opacity-80 not-print:dark:text-info-dark"
			href={props.url}
			target="_blank"
			rel="noreferrer"
		>
			{trimProtocol(props.url)}
		</a>
	);
}

function ContactLink(props: { url: string }) {
	return (
		<a
			class="inline-flex items-center gap-1 text-info hover:opacity-80 not-print:dark:text-info-dark"
			href={props.url}
			target="_blank"
			rel="noreferrer"
		>
			<span
        class="text-lg"
				classList={{
					[getContactIconClassName(props.url)]: true,
				}}
			/>
			{trimProtocol(props.url)}
		</a>
	);
}

export default function Overview() {
	return (
		<div class="text-center">
			<h1 class="p-2 font-bold text-4xl">
				{metadata.firstName} {metadata.lastName}
			</h1>
			<ul class="flex flex-wrap justify-center px-4">
				<For each={contacts}>
					{(url, i) => (
						<>
							<li>
								<ContactLink url={url} />
							</li>
							<Show when={i() !== contacts.length - 1}>
								<span class="px-2">|</span>
							</Show>
						</>
					)}
				</For>
			</ul>
			{/* <p>(Live version: {<Link url={metadata.resumeUrl} />})</p> */}
		</div>
	);
}
