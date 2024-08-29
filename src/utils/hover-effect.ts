import * as THREE from "three";
import { gsap, Power4 } from "gsap";
import type { ThreeState } from "./three-util";
import hoverVertexShaderRaw from "~/shaders/hover-vertex.shader?raw";
import hoverFragmentShaderRaw from "~/shaders/hover-fragment.shader?raw";

interface HoverState {
  uniforms: {
    uTexture: {
      /** texture data */
      value: THREE.Texture | null;
    };
    uOffset: {
      /** distortion strength */
      value: THREE.Vector2 | THREE.Vector3;
    };
    uAlpha: {
      /** opacity */
      value: number;
    };
  };
  strength: number;
  geometry: THREE.PlaneGeometry;
  material: THREE.ShaderMaterial;
  plane: THREE.Mesh;
}

const HOVER_Z = 2;
const HOVER_ALPHA = 0.8;

export namespace HoverEffect {
  export function setup(
    state: ThreeState,
    container: HTMLDivElement,
    imgSrc: string,
  ) {
    const hoverState = createHoverState(state);
    setImage(state, hoverState, imgSrc);

    container.addEventListener("mouseover", () => {
      setAlpha(hoverState, HOVER_ALPHA);
    });

    container.addEventListener("mouseleave", () => {
      setAlpha(hoverState, 0);
    });

    let timeout = setTimeoutHide(hoverState);
    container.addEventListener("mousemove", (e) => {
      clearTimeout(timeout);
      timeout = setTimeoutHide(hoverState);
      const mouseX = (e.clientX / container.clientWidth) * 2 - 1;
      const mouseY = -(e.clientY / container.clientHeight) * 2 + 1;
      const viewSize = getViewSize(state);
      // project mouse position to world coordinates
      const x = mapNumber(
        mouseX,
        [-1, 1],
        [-viewSize.width / 2, viewSize.width / 2],
      );
      const y = mapNumber(
        mouseY,
        [-1, 1],
        [-viewSize.height / 2, viewSize.height / 2],
      );
      const position = new THREE.Vector3(x, y, HOVER_Z);
      // update plane position
      gsap.to(hoverState.plane.position, {
        x: x,
        y: y,
        duration: 1,
        ease: Power4.easeOut,
        onUpdate() {
          // compute offset
          const offset = hoverState.plane.position
            .clone()
            .sub(position) // velocity
            .multiplyScalar(-hoverState.strength);
          hoverState.uniforms.uOffset.value = offset;
        },
      });
    });
  }
}

function createHoverState(state: ThreeState): HoverState {
  const uniforms: HoverState["uniforms"] = {
    uTexture: { value: null },
    uOffset: { value: new THREE.Vector2(0, 0) },
    uAlpha: { value: 0 },
  };
  const geometry = new THREE.PlaneGeometry(1, 1, 8, 8);
  const material = createShaderMaterial(uniforms);
  const hoverState: HoverState = {
    uniforms: uniforms,
    geometry: geometry,
    material: material,
    plane: new THREE.Mesh(geometry, material),
    strength: 0.25,
  };
  hoverState.plane.position.setZ(HOVER_Z);
  state.scene.add(hoverState.plane);
  return hoverState;
}

function createShaderMaterial(uniforms: HoverState["uniforms"]) {
  return new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: hoverVertexShaderRaw,
    fragmentShader: hoverFragmentShaderRaw,
    transparent: true,
  });
}

function setImage(state: ThreeState, hoverState: HoverState, imgSrc: string) {
  hoverState.uniforms.uTexture.value = state.loader.load(imgSrc, (e) => {
    e.colorSpace = THREE.SRGBColorSpace;
    hoverState.plane.scale.set(e.image.width / e.image.height, 1, 1);
  });
}

function setAlpha(hoverState: HoverState, alpha: number) {
  gsap.to(hoverState.uniforms.uAlpha, {
    duration: 0.5,
    value: alpha,
    ease: Power4.easeOut,
  });
}

function setTimeoutHide(hoverState: HoverState) {
  return setTimeout(() => {
    setAlpha(hoverState, 0);
  }, 3000);
}

function mapNumber(
  value: number,
  [inMin, inMax]: [number, number],
  [outMin, outMax]: [number, number],
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function getViewSize(state: ThreeState) {
  const distance = state.camera.position.z;
  const vFov = (state.camera.fov * Math.PI) / 180;
  const height = 2 * Math.tan(vFov / 2) * distance;
  const width = height * state.aspectRatio;
  return { width, height, vFov };
}
