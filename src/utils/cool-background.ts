import * as THREE from "three";

export default function (container: Element, image: string) {
  const scene = new THREE.Scene();
  const loader = new THREE.TextureLoader();
  const camera = new THREE.PerspectiveCamera(70, getCameraAspect(), 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });

  handleSetRendererSize(renderer);
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", handleResize.bind(null, camera, renderer));

  const texture = loader.load(image);
  texture.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.PlaneGeometry(16, 8, 15, 9);
  const material = new THREE.MeshBasicMaterial({ map: texture });

  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  camera.position.z = 5;

  const count = geometry.attributes.position.count;
  const clock = new THREE.Clock();

  calculateWaveEffects(geometry, count);

  animate({ scene, camera, renderer, count, geometry, clock });
}

function animate(opts: {
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.Renderer;
  geometry: THREE.PlaneGeometry;
  clock: THREE.Clock;
  count: number;
}) {
  const time = opts.clock.getElapsedTime();
  animateWaveEffect(opts.geometry, time, opts.count);
  requestAnimationFrame(animate.bind(null, opts));
  opts.renderer.render(opts.scene, opts.camera);
}

const MAX_FRAME = 30;
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
  const frame = Math.round(time * 8) % MAX_FRAME;
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

function getCameraAspect() {
  return window.innerWidth / window.innerHeight;
}

function handleSetRendererSize(renderer: THREE.Renderer) {
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function handleResize(
  camera: THREE.PerspectiveCamera,
  renderer: THREE.Renderer,
) {
  camera.aspect = getCameraAspect();
  camera.updateProjectionMatrix();
  handleSetRendererSize(renderer);
}
