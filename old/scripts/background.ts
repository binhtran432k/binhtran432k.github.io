import { registerMiniVan } from "~/utils/van";

async function main() {
	await generateBackground();
}

export async function generateBackground() {
	await registerMiniVan();
	const { Background } = await import("~/components/background.js");
	await Bun.write("src/generated/background.svg", Background().render());
}

if (import.meta.main) {
	main();
}
