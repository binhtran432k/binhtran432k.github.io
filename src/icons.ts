import { env } from "mini-van-plate/shared";

type DIcon = {
	id: string;
	path: string;
};

const Icon = (id: string) => {
	const { svg, use } = env.van.tags("http://www.w3.org/2000/svg");
	return svg(
		{
			viewBox: "0 0 24 24",
			xmlns: "http://www.w3.org/2000/svg",
			class: "icon",
		},
		use({ "xlink:href": `#${id}` }),
	);
};

const icons = {
	github: {
		id: "i-github",
		path: "M12 .3c6.6 0 12 5.4 12 12 0 5.3-3.4 9.8-8.2 11.4-.7.1-.9-.3-.9-.6 0-.4.1-1.7.1-3.3 0-1.1-.4-1.8-.9-2.2 2.7-.3 5.5-1.3 5.5-5.9 0-1.3-.4-2.4-1.2-3.2.1-.4.5-1.6-.1-3.2 0 0-1-.3-3.3 1.2-1-.3-2-.4-3-.4s-2.1.1-3 .4C6.7 5 5.7 5.3 5.7 5.3 5 6.9 5.4 8.1 5.6 8.5c-.8.8-1.3 1.9-1.3 3.2 0 4.6 2.8 5.6 5.5 5.9-.3.3-.6.8-.7 1.6-.7.3-2.5.8-3.5-1 0 0-.7-1.1-1.9-1.2 0 0-1.2 0-.1.7 0 0 .8.4 1.4 1.8 0 0 .7 2.3 4 1.6 0 1 0 1.7 0 2 0 .3-.2.7-.8.6C3.4 22.1 0 17.6 0 12.3 0 5.7 5.4.3 12 .3",
	},
	linkedin: {
		id: "i-linkedin",
		path: "M22.2 0c1 0 1.8.8 1.8 1.7V22.3c0 .9-.8 1.7-1.8 1.7H1.8C.8 24 0 23.2 0 22.3V1.7C0 .8.8 0 1.8 0H22.2ZM7.1 9H3.6V20.5H7.1ZM5.3 7.4a2.1 2.1 0 10-2-2 2.1 2.1 0 002 2M20.4 20.5V14.2c0-3.1-.6-5.5-4.2-5.5-1.8 0-2.9 1-3.4 1.9V9H9.4V20.5h3.5V14.8c0-1.5.3-3 2.1-3 1.9 0 1.9 1.8 1.9 3.1v5.6h3.5Z",
	},
	call: {
		id: "i-call",
		path: "M19.9 21q-3.1 0-6.1-1.4T8.2 15.8 4.4 10.2 3 4q0-.4.3-.7T4 3H8.1q.3 0 .6.2t.3.6l.7 3.5q.1.4 0 .7t-.3.4L7 10.9q.5.9 1.2 1.8t1.5 1.7q.7.7 1.6 1.4T13.1 17l2.3-2.3q.3-.3.6-.4t.8 0l3.4.6q.4.1.6.4t.2.6v4q0 .5-.3.8t-.8.3",
	},
	globe: {
		id: "i-globe",
		path: "M12 22q-2.1 0-3.9-.8T4.9 19.1 2.8 15.9 2 12t.8-3.9T4.9 4.9 8.1 2.8 12 2t3.9.8 3.2 2.1 2.1 3.2T22 12t-.8 3.9-2.1 3.2-3.2 2.1T12 22m0-2q3.3 0 5.7-2.3T20 12q0-.2 0-.4t0-.3q-.2.8-.7 1.2T18 13H16q-.8 0-1.4-.6T14 11V10H10V8q0-.8.6-1.4T12 6h1q0-.6.3-1t.8-.7q-.5-.2-1-.2T12 4Q8.7 4 6.3 6.3T4 12H9q1.7 0 2.8 1.2T13 16v1H10v2.8q.5.1 1 .1t1 .1",
	},
	email: {
		id: "i-email",
		path: "M4 20q-.8 0-1.4-.6T2 18V6q0-.8.6-1.4T4 4H20q.8 0 1.4.6T22 6V18q0 .8-.6 1.4T20 20Zm8-7 8-5V6l-8 5L4 6V8Z",
	},
	openInNew: {
		id: "i-open-in-new",
		path: "M19 9q0 .4.3.7t.7.3.7-.3T21 9V4q0-.4-.3-.7T20 3H15q-.4 0-.7.3T14 4t.3.7.7.3h2.6L9 13.6q-.3.3-.3.7T9 15t.7.3.7-.3L19 6.4Zm0 12q.8-0 1.4-.6T21 19V13q0-.4-.3-.7T20 12t-.7.3-.3.7v6H5V5h6q.4 0 .7-.3T12 4t-.3-.7T11 3H5q-.8 0-1.4.6T3 5V19q0 .8.6 1.4T5 21Z",
	},
	print: {
		id: "i-print",
		path: "M8 21q-.8 0-1.4-.6T6 19V17H4q-.8 0-1.4-.6T2 15V11q0-1.3.9-2.1T5 8H19q1.3 0 2.1.9T22 11v4q0 .8-.6 1.4T20 17H18v2q0 .8-.6 1.4T16 21ZM18 7H6V5q0-.8.6-1.4T8 3h8q.8 0 1.4.6T18 5Zm0 5.5q.4 0 .7-.3t.3-.7-.3-.7-.7-.3-.7.3-.3.7.3.7.7.3M8 19h8V15H8Z",
	},
} satisfies Record<string, DIcon>;

export const GithubIcon = Icon.bind(null, icons.github.id);
export const LinkedinIcon = Icon.bind(null, icons.linkedin.id);
export const CallIcon = Icon.bind(null, icons.call.id);
export const GlobeIcon = Icon.bind(null, icons.globe.id);
export const EmailIcon = Icon.bind(null, icons.email.id);
export const OpenInNewIcon = Icon.bind(null, icons.openInNew.id);
export const PrintIcon = Icon.bind(null, icons.print.id);

function getIconDefs(icons: DIcon[]) {
	const { defs, path } = env.van.tags("http://www.w3.org/2000/svg");

	return defs(icons.map((ic) => path({ id: ic.id, d: ic.path })));
}

export const ResumeIconDefs = getIconDefs.bind(null, [
	icons.github,
	icons.linkedin,
	icons.call,
	icons.email,
	icons.globe,
	icons.print,
]);
