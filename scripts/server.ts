import type { BunFile } from "bun";

import { fetchSite } from "../src/index.js";

const server = Bun.serve({
	port: Bun.argv[2] ?? 3000,
	async fetch(req) {
		const url = new URL(req.url);
		const site = fetchSite(url.pathname);

		if (site.status === 404) {
			const file = await getFile(url.pathname);
			if (file) return new Response(file);
		}

		return new Response(site.content, {
			headers: { "Content-Type": "text/html; charset=UTF-8" },
			status: site.status,
		});
	},
});

async function getFile(pathname: string): Promise<BunFile | null> {
	const path = getFallbackPath(pathname);
	if (!path) return null;

	const file = Bun.file(path);
	if (await file.exists()) return file;
	return null;
}

function getFallbackPath(pathname: string): string | null {
	if (/^.*\.css/.test(pathname)) return `src${pathname}`;
	if (/^.*\.(js|svg|json|woff2)/.test(pathname)) return `public${pathname}`;
	return null;
}

console.log(`Try visiting the server via http://localhost:${server.port}`);
