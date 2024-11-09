const QUOTE_REGEX = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g;

/**
 * Minimal CSS Minifier
 */
export function minifyCss(raw: string): string {
	const oneLineNoCommentRaw = raw.replace(
		/\/\*(?:[^*]|\*[^/])*\*+\/|\s*\n\s*/g,
		"",
	);
	return zip2(
		oneLineNoCommentRaw
			.split(QUOTE_REGEX)
			.map((x) => x?.replace(/\s*([{}:;,>])\s*/g, "$1")),
		oneLineNoCommentRaw.match(QUOTE_REGEX) ?? [],
	).join("");
}

function zip2(a: unknown[], b: unknown[]): unknown[] {
	return Array.from({ length: Math.max(a.length, b.length) }, (_, i) =>
		[a[i], b[i]].filter((x) => x !== undefined),
	).flat();
}
