import type { BunFile } from "bun";

const server = Bun.serve({
	port: Bun.argv[2] ?? 5000,
	async fetch(req) {
		const url = new URL(req.url);

		const file = await getFile(url.pathname);
		if (file) return new Response(file);

		return new Response(await getFile("/404.html"), { status: 404 });
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
	if (pathname.endsWith("/")) return `dist${pathname}index.html`;
	return `dist${pathname}`;
}

console.log(`Try visiting the server via http://localhost:${server.port}`);
