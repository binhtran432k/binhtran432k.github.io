uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec2 uOffset;

varying vec2 vUv;

// zoom on texture
vec2 scaleUV(vec2 uv, float scale) {
  float center = 0.5;
  return ((uv - center) * scale) + center;
}

vec3 rgbShift(sampler2D txe, vec2 uv, vec2 offset) {
  float r = texture2D(txe, scaleUV(uv, 0.8) + offset).r;
  vec2 gb = texture2D(txe, scaleUV(uv, 0.8)).gb;
  return vec3(r, gb);
}

void main() {
  vec3 color = rgbShift(uTexture, vUv, uOffset);
  gl_FragColor = vec4(color, uAlpha);
}
