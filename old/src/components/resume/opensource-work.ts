import { Project } from "./projects.js";
import { Section } from "./section.js";

export const OpenSourceWork = () => {
	return Section(
		{ class: "projects", title: "Open Source Work" },
		Project({
			name: "Cucumber Open",
			url: "https://github.com/cucumber",
			techs: ["TypeScript", "LSP", "NPM", "Diagram"],
			details: [
				"Fixed critical crash issues related to editor tools startup.",
				"Enhanced Vietnamese language support for Gherkin syntax.",
				"Created class diagrams to represent Gherkin syntax structure.",
			],
		}),
		Project({
			name: "IBus Bamboo - Bộ gõ tiếng Việt cho Linux/BSD",
			url: "https://github.com/BambooEngine/ibus-bamboo",
			techs: ["Go", "Unicode", "Icons"],
			details: [
				"Added Unicode typing feature with the shortcut `Ctrl + Shift + U`.",
				"Implemented an English mode version.",
				"Designed icons for Vietnamese and English modes with various fancy themes.",
			],
		}),
		Project({
			name: "Dracula colorscheme for NEOVIM written in Lua",
			url: "https://github.com/Mofiqul/dracula.nvim",
			techs: ["Lua", "Neovim"],
			details: [
				"Rewrote the entire theme using Lua API methods to improve startup performance.",
				"Adopted a modern configuration style for the theme.",
				"Added new demonstration images.",
			],
		}),
	);
};
