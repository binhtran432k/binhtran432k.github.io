export interface ProjectItem {
	name: string;
	imageUrl?: string;
	srcUrl?: string;
	url?: string;
	timeline: string;
	techs: string[];
}

export interface WorkItem {
	name: string;
	url?: string;
	timeline: string;
	extra: string;
	details: string[];
}

export interface SkillItem {
	name: string;
	items: string[];
}

export interface CertificateItem {
	name: string;
	url: string;
	brand: string;
}

export interface TimelineItem {
	label: string;
	sublabel?: string;
	timeline?: string;
	location?: string;
}

export const metadata = {
	firstName: "Binh",
	middleName: "Duc",
	lastName: "Tran",
	job: "Fullstack Developer | Automation Tester",
	address: "District 12, Ho Chi Minh City, Vietnam",
	websiteUrl: "https://binhtran432k.com",
	resumeUrl: "https://binhtran432k.com/resume",
	phone: "tel:+84 8 32 30 61 05",
	email: "mailto:binhtran432k@gmail.com",
	avatar: "/assets/profile.webp",
} as const;

export const socialData = {
	linkedin: "https://www.linkedin.com/in/binhtran432k",
	github: "https://github.com/binhtran432k",
	instagram: undefined,
	x: "https://x.com/binhtran432k",
	facebook: "https://www.facebook.com/binhtran432k",
	youtube: "https://www.youtube.com/@binhtran432k",
} as const;

export const contacts = [
	socialData.github,
	socialData.linkedin,
	metadata.email,
	metadata.phone,
	metadata.websiteUrl,
] as const;

export const opensourceWorks: WorkItem[] = [
	{
		name: "Cucumber Open",
		url: "https://github.com/cucumber",
		extra: "Committer",
		timeline: "Jan 2024 - Present",
		details: [
			"Researching the next generation of editor tools for Cucumber (Private).",
			"Resolved critical startup crash issues within Cucumber editor tools.",
			"Improved Gherkin syntax by enhancing Vietnamese language support.",
			"Developed comprehensive Gherkin documentation.",
		],
	},
];

export const experiences: WorkItem[] = [
	{
		name: "Nash Tech",
		url: "https://www.nashtechglobal.com/",
		extra: "Internship (Automation Tester)",
		timeline: "Sep 2022 - Dec 2022",
		details: [
			"Gained practical understanding of the Software Development Lifecycle (SDLC) through participation in Scrum/Agile methodologies.",
			"Developed skills in test case planning, design, and efficient execution to ensure software quality.",
			"Acquired hands-on experience with a variety of automation testing tools and their application across diverse project contexts.",
			"Actively contributed to a real-world software development project as an Automation Tester, applying learned principles and tools.",
		],
	},
];

export const skills: SkillItem[] = [
	{
		name: "Sort Skills",
		items: [
			"Collaboration",
			"Communication",
			"Problem-solving",
			"Adaptability",
		],
	},
	{
		name: "Technical Skills",
		items: [
			"Agile",
			"Scrum",
			"Linux",
			"Automation Testing",
			"CI/CD",
			"Git",
			"Github Action",
			"Test-Driven Development (TDD)",
			"Behavior-Driven Development (BDD)",
		],
	},
	{
		name: "Frameworks and Libraries",
		items: ["Selenium", "Cucumber", "Playwright", "Cypress", "JUnit", "NUnit"],
	},
	{
		name: "Programming Languages",
		items: ["Typescript", "Javascript", "Python", "Java", "C#", "Rust"],
	},
];

export const projects: ProjectItem[] = [
	{
		name: "Ungrammar Language Features",
		timeline: "Oct 2024",
		imageUrl: "/assets/projects/ungrammar-language-features.webp",
		srcUrl: "https://github.com/binhtran432k/ungrammar-language-features",
		url: "/ungrammar-language-features",
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
		name: "Story Mapping Generator",
		timeline: "Jun 2024",
		imageUrl: "/assets/projects/story-mapping.webp",
		srcUrl: "https://github.com/binhtran432k/story-mapping-generator",
		url: "/story-mapping-generator",
		techs: [
			"Diagram Generator",
			"Monaco",
			"TypeScript",
			"Svelte",
			"Tailwind CSS",
		],
	},
	{
		name: "Portfolio",
		timeline: "Nov 2024",
		imageUrl: "/assets/projects/portfolio.webp",
		srcUrl: "https://github.com/binhtran432k/binhtran432k.github.io",
		url: "/",
		techs: ["Van JS", "Bun", "TypeScript", "WebGL", "SVG"],
	},
];

export const certificates: CertificateItem[] = [
	{
		brand: "NashTech",
		name: "The Rookies (Automation Testing)",
		url: "https://binhtran432k.com/certificates/nashtech/pdf/rookie.pdf",
	},
	{
		url: "https://coursera.org/share/5063212fad06cdf1b4dfd2ef39ab0fd9",
		name: "Introduction to Test and Behavior Driven Development",
		brand: "IBM",
	},
	{
		url: "https://udemy.com/certificate/UC-1995d87e-047e-4343-b6e7-2494f0eb8731/",
		name: "Manual Software Testing: Complete Course with Practical Labs",
		brand: "Udemy",
	},
	{
		url: "https://coursera.org/share/8c380166e974cdeb50c9dcafd17936e4",
		name: "Agile Software Development",
		brand: "University of Minnesota",
	},
	{
		url: "https://www.hackerrank.com/certificates/245f7e25aa3c",
		name: "SQL (Advanced)",
		brand: "HackerRank",
	},
];

export const education: TimelineItem[] = [
	{
		label: "Ho Chi Minh city University of Technology",
		sublabel: "Bachelor of Engineering in Computer Science",
		timeline: "Sep 2018 - Nov 2024",
		location: "Ho Chi Minh, Vietnam",
	},
];
