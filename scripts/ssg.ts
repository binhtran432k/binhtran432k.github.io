import { readdir } from "node:fs/promises";

// Imports for watch only
import "~/styles/header.css";
import "~/styles/landing.css";
import "~/styles/core.css";
import "~/styles/lazy-landing.css";

// Init dist folder
await Bun.$`rm -rf dist`;
await Bun.$`mkdir dist`;

await Promise.all([
	// Build Clients
	buildScripts(),
	buildStyles(),
]);

const { fetchSite } = await import("~/index.js");

await Promise.all([
	// Copy public
	Bun.$`cp -r public/* dist`,
	// Write Sites
	writeSite("/"),
	Bun.write("dist/404.html", fetchSite(null).content),
]);

async function writeSite(pathname: string): Promise<number> {
	return await Bun.write(
		`dist${pathname}index.html`,
		fetchSite(pathname).content,
	);
}

export async function buildScripts() {
	const files = await readdir("src/scripts");
	await Bun.build({
		entrypoints: files.map((f) => `src/scripts/${f}`),
		outdir: "dist/scripts",
		splitting: true,
		minify: true,
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
