import { registerEnv } from "mini-van-plate/shared";

export async function registerMiniVan() {
	const van = await import("mini-van-plate/van-plate");
	registerEnv({ van: van.default });
}
