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
	const trimedPath = pathname.replace(/^\/|\/$/g, "");
	const file = Bun.file(`dist/${trimedPath}`);
	if (await file.exists()) return file;
	const indexFile = Bun.file(`dist/${trimedPath}/index.html`);
	if (await indexFile.exists()) return indexFile;
	return null;
}

console.log(`Try visiting the server via http://localhost:${server.port}`);
