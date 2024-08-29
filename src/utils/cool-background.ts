import * as THREE from "three";
import { ThreeUtil } from "./three-util";
import { HoverEffect } from "./hover-effect";
import { BackgroundEffect } from "./background-effect";

export function coolBackground(
  container: HTMLDivElement,
  background: Element,
  bgSrc: string,
  hoverSrc: string,
) {
  const state = ThreeUtil.createState(background);
  const texture = state.loader.load(bgSrc);
  texture.colorSpace = THREE.SRGBColorSpace;
  BackgroundEffect.setup(texture, state);
  HoverEffect.setup(state, container, hoverSrc);
}
