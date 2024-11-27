export function trimProtocol(link: string): string {
	return link.replace(/^(tel:|mailto:|https?:\/\/(www\.)?)/, "");
}
