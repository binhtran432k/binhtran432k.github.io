import { readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { parseArgs } from "node:util";

import { minifyGlsl } from "~/utils/minify.js";
import { registerMiniVan } from "~/utils/van.js";
import "~/index.js";

export const SRC_MAP = {
	script: "src/scripts",
	style: "src/styles",
	main: "src",
	public: "public",
} as const;

const CACHE_MAP = {
	script: ".cache/scripts",
	style: ".cache/styles",
} as const;

export async function main() {
	const { values } = parseArgs({
		args: Bun.argv,
		options: {
			target: { type: "string" },
		},
		strict: true,
		allowPositionals: true,
	});
	if (values.target === "script") {
		await initOutput();
		await cacheScripts();
	} else if (values.target === "style") {
		await initOutput();
		await cacheStyles();
	} else if (values.target === "public") {
		await initOutput();
		await copyPublic();
	} else if (values.target === "sites") {
		await initOutput();
		await generateSites();
	} else {
		await cleanOutput();

		await initOutput();

		await cacheStyles();
		await cacheScripts();

		await copyPublic();
		await generateSites();
	}
}

async function cleanOutput() {
	await Bun.$`rm -rf dist .cache`;
}

async function initOutput() {
	await Bun.$`mkdir -p dist`;
}

async function copyPublic() {
	await Bun.$`cp -r public/* dist`;
}

async function generateSites() {
	await registerMiniVan();
	const { fetchSite, pageMap } = await import("~/index.js");

	async function writeSite(pathname: string): Promise<number> {
		return await Bun.write(`dist${pathname}`, fetchSite(pathname).content);
	}
	await Promise.all([...Object.keys(pageMap).map((page) => writeSite(page))]);
}

async function cacheScripts() {
	const files = await readdir(SRC_MAP.script);
	await Bun.build({
		entrypoints: files.map((f) => `${SRC_MAP.script}/${f}`),
		outdir: CACHE_MAP.script,
		minify: true,
		splitting: true,
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
	await Bun.$`cp -rf ${CACHE_MAP.script} dist`;
}

async function cacheStyles() {
	const files = await readdir(SRC_MAP.style);
	await Bun.build({
		entrypoints: files.map((f) => `${SRC_MAP.style}/${f}`),
		outdir: CACHE_MAP.style,
		experimentalCss: true,
		splitting: true,
		minify: true,
	});
	// await Bun.$`cp -rf .cache/styles dist`;
	// HACK: Add postfix "src/styles" to solve Bun bundler path when the number of files is >= 9
	await Bun.$`cp -rf ${CACHE_MAP.style}/src/styles dist`;
}

if (import.meta.main) {
	await main();
}
