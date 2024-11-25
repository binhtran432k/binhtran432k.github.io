import { readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { Background } from "./background.js";

import { minifyGlsl } from "~/utils/minify.js";

// Imports for watch only
import "~/styles/header.css";
import "~/styles/landing.css";
import "~/styles/icon.css";
import "~/styles/core.css";
import "~/styles/lazy-landing.css";
import "~/scripts/cool-cursor.js";
import "~/scripts/landing.js" with { type: "text" };

// Init dist folder
await Bun.$`rm -rf dist`;

// Build Clients
await Bun.write("dist/assets/background.svg", Background().render());
await Promise.all([buildScripts(), buildStyles()]);

const { fetchSite, pageMap } = await import("~/index.js");

await Promise.all([
	// Copy public
	Bun.$`cp -r public/* dist`,
	// Write Sites
	...Object.keys(pageMap).map((page) => writeSite(page)),
]);

async function writeSite(pathname: string): Promise<number> {
	return await Bun.write(`dist${pathname}`, fetchSite(pathname).content);
}

export async function buildScripts() {
	const files = await readdir("src/scripts");
	await Bun.build({
		entrypoints: files.map((f) => `src/scripts/${f}`),
		outdir: "dist/scripts",
		minify: true,
		plugins: [
			{
				name: "glsl",
				setup(builder) {
					builder.onLoad({ filter: /\.glsl$/ }, ({ path }) => ({
						loader: "text",
						contents: minifyGlsl(readFileSync(path, "utf8")),
					}));
				},
			},
		],
	});
}

export async function buildStyles() {
	const files = await readdir("src/styles");
	await Bun.build({
		entrypoints: files.map((f) => `src/styles/${f}`),
		outdir: "dist/styles",
		experimentalCss: true,
		minify: true,
	});
}
