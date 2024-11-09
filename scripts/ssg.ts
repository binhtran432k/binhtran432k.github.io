import { fetchSite } from "../src/index.js";
import { minifyCss } from "../src/utils/css.js";

// Init dist folder
await Bun.$`rm -rf dist`;
await Bun.$`mkdir dist`;
await Bun.$`mkdir dist/styles`;

await Promise.all([
	// Copy public
	Bun.$`cp -r public/* dist`,
	// Write Styles
	writeStyle("landing.css"),
	// Write Sites
	writeSite("/"),
	Bun.write("dist/404.html", fetchSite(null).content),
]);

async function writeStyle(filename: string): Promise<number> {
	return await Bun.file(`src/styles/${filename}`)
		.text()
		.then((val) =>
			Bun.write(`dist/styles/${filename}`, minifyCss(val), {
				createPath: true,
			}),
		);
}

async function writeSite(pathname: string): Promise<number> {
	return await Bun.write(
		`dist${pathname}index.html`,
		fetchSite(pathname).content,
	);
}
