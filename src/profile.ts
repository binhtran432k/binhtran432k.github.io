export type ProjectData = {
	title: string;
	image: string;
	src: string;
	previewLink?: string;
	date: string;
	techs: string[];
};

export const metadata = {
	name: "Binh Tran",
	fullname: "Binh Duc Tran",
	email: "binhtran432k@gmail.com",
} as const;

export const socials = {
	linkedin: "https://www.linkedin.com/in/binhtran432k",
	github: "https://github.com/binhtran432k",
	instagram: undefined,
	x: "https://twitter.com/binhtran432k",
	facebook: "https://www.facebook.com/binhtran432k",
	youtube: "https://www.youtube.com/@binhtran432k",
} as const;

export const skillMap = {
	soft: ["Collaboration", "Communication", "Problem-solving", "Adaptability"],
	technical: [
		"Agile",
		"Scrum",
		"NodeJS",
		"Bun",
		"Linux",
		"Responsive Design",
		"Automation Testing",
		"CI/CD",
		"Git",
		"Github Action",
		"TDD",
		"BDD",
	],
	programmingLanguage: ["Javascript", "Typescript", "Lua", "Go", "Zig"],
} as const;

export const projects: ProjectData[] = [
	{
		title: "Ungrammar Language Features",
		date: "Oct 2024",
		image: "/assets/projects/ungrammar-language-features.webp",
		src: "https://github.com/binhtran432k/ungrammar-language-features",
		previewLink: "/ungrammar-language-features",
		techs: [
			"Language Server Protocol",
			"VSCode Extension",
			"NPM Deployment",
			"Monaco",
			"TypeScript",
			"Astro",
			"Preact",
			"Tailwind CSS",
		],
	},
	{
		title: "Story Mapping Generator",
		date: "Jun 2024",
		image: "/assets/projects/story-mapping.webp",
		src: "https://github.com/binhtran432k/story-mapping-generator",
		previewLink: "/story-mapping-generator",
		techs: [
			"Diagram Generator",
			"Monaco",
			"TypeScript",
			"Svelte",
			"Tailwind CSS",
		],
	},
	{
		title: "Portfolio",
		date: "Nov 2024",
		image: "/assets/projects/portfolio.webp",
		src: "https://github.com/binhtran432k/binhtran432k.github.io",
		previewLink: "/",
		techs: ["Van JS", "Bun", "TypeScript", "WebGL", "SVG"],
	},
];
