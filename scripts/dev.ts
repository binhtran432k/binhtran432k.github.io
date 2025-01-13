import { watch } from "node:fs";
import { parseArgs } from "node:util";
import type { BunFile } from "bun";

import { SRC_MAP } from "./ssg.js";

function watchCache(): void {
	function watchSrcAndBuild(src: string, buildFn: () => Promise<unknown>) {
		let time: Timer | undefined;
		return watch(src, { recursive: true }, () => {
			if (!time) clearTimeout(time);
			time = setTimeout(async () => {
				await buildFn();
				console.log(`Rebuilt ${src}`);
			}, 500);
		});
	}
	watchSrcAndBuild(
		SRC_MAP.script,
		async () => await Bun.$`bun scripts/ssg.ts --target script`,
	);
	watchSrcAndBuild(
		SRC_MAP.style,
		async () => await Bun.$`bun scripts/ssg.ts --target style`,
	);
	watchSrcAndBuild(
		SRC_MAP.main,
		async () => await Bun.$`bun scripts/ssg.ts --target sites`,
	);
	watchSrcAndBuild(
		SRC_MAP.public,
		async () => await Bun.$`bun scripts/ssg.ts --target public`,
	);
}

async function main() {
	const { values } = parseArgs({
		args: Bun.argv,
		options: {
			preview: { type: "boolean" },
			port: { type: "string" },
		},
		strict: true,
		allowPositionals: true,
	});

	await Bun.$`bun scripts/ssg.ts`;
	if (!values.preview) {
		watchCache();
	}

	const server = Bun.serve({
		port: values.port ?? 5000,
		async fetch(req) {
			const url = new URL(req.url);

			const file = await getPreviewFile(url.pathname);
			if (file) return new Response(file);

			return new Response(await getPreviewFile("/404.html"), { status: 404 });
		},
	});

	console.log(`Try visiting the server via http://localhost:${server.port}`);
}

async function getPreviewFile(pathname: string): Promise<BunFile | null> {
	const trimedPath = pathname.replace(/^\/|\/$/g, "");

	const file = Bun.file(`dist/${trimedPath}`);
	if (await file.exists()) return file;

	const indexFile = Bun.file(`dist/${trimedPath}/index.html`);
	if (await indexFile.exists()) return indexFile;

	return null;
}

if (import.meta.main) {
	main();
}
