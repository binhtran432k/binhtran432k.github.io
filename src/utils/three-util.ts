import * as THREE from "three";

export interface ThreeState {
  loader: THREE.TextureLoader;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.Renderer;
  clock: THREE.Clock;
  aspectRatio: number;
}

export namespace ThreeUtil {
  export function createState(background: Element): ThreeState {
    const state = {
      scene: new THREE.Scene(),
      loader: new THREE.TextureLoader(),
      camera: createCamera(),
      renderer: createRenderer(background),
      clock: new THREE.Clock(),
      aspectRatio: getCameraAspect(),
    };
    window.addEventListener("resize", handleResize.bind(null, state));
    return state;
  }
}

function createCamera() {
  return new THREE.PerspectiveCamera(50, getCameraAspect(), 0.1, 1000);
}

function createRenderer(background: Element) {
  const renderer = new THREE.WebGLRenderer({
    antialias: false,
  });
  handleSetRendererSize(renderer);
  background.appendChild(renderer.domElement);
  return renderer;
}

function getCameraAspect() {
  return Math.max(window.innerWidth / window.innerHeight, 1);
}

function handleSetRendererSize(renderer: THREE.Renderer) {
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function handleResize(state: ThreeState) {
  state.aspectRatio = getCameraAspect();
  state.camera.aspect = state.aspectRatio;

  state.camera.updateProjectionMatrix();

  handleSetRendererSize(state.renderer);
}
