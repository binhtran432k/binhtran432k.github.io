import * as THREE from "three";
import type { ThreeState } from "./three-util";

export namespace BackgroundEffect {
  export function setup(bgTexture: THREE.Texture, state: ThreeState) {
    const geometry = new THREE.PlaneGeometry(12, 6, 10, 6);
    const material = new THREE.MeshBasicMaterial({ map: bgTexture });

    const mesh = new THREE.Mesh(geometry, material);

    state.scene.add(mesh);

    state.camera.position.z = 5;

    const count = geometry.attributes.position.count;

    calculateWaveEffects(geometry, count);
    animate({ count, geometry, state });
  }
}

function animate(opts: {
  state: ThreeState;
  geometry: THREE.PlaneGeometry;
  count: number;
}) {
  const time = opts.state.clock.getElapsedTime();
  animateWaveEffect(opts.geometry, time, opts.count);
  requestAnimationFrame(animate.bind(null, opts));
  opts.state.renderer.render(opts.state.scene, opts.state.camera);
}

const MAX_FRAME = 60;
const TIME_FACTOR = MAX_FRAME / 4;
const waveEffects: number[][] = [];
function calculateWaveEffects(geometry: THREE.PlaneGeometry, count: number) {
  for (let frame = 0; frame < MAX_FRAME; frame++) {
    waveEffects[frame] = [];
    const time = (2 * Math.PI * frame) / MAX_FRAME;
    for (let i = 0; i < count; i++) {
      const x = geometry.attributes.position.getX(i);
      const y = geometry.attributes.position.getY(i);

      const anim1 = 0.75 * Math.sin(x * 2 + time);
      const anim2 = 0.25 * Math.sin(x + time);
      const anim3 = 0.1 * Math.sin(y * 15 + time);
      waveEffects[frame][i] = anim1 + anim2 + anim3;
    }
  }
}
let oldFrame = -1;
function animateWaveEffect(
  geometry: THREE.PlaneGeometry,
  time: number,
  count: number,
) {
  const frame = Math.round(time * TIME_FACTOR) % MAX_FRAME;
  if (oldFrame === frame) {
    return;
  }
  for (let i = 0; i < count; i++) {
    geometry.attributes.position.setZ(i, waveEffects[frame][i]);
    geometry.computeVertexNormals();
    geometry.attributes.position.needsUpdate = true;
  }
  oldFrame = frame;
}
