precision lowp float;

uniform sampler2D u_image;
uniform float u_alpha;

uniform vec2 u_resolution;

varying vec2 v_delta;
varying vec2 v_texCoord;

vec2 scaleUV(vec2 uv, float scale) {
  float center = 0.5;
  return ((uv - center) * scale) + center;
}

vec3 rgbShift(sampler2D txe, vec2 uv, vec2 delta) {
  float r = texture2D(txe, scaleUV(uv, .8) + 3.*delta).r;
  vec2 gb = texture2D(txe, scaleUV(uv, .8)).gb;
  return vec3(r, gb);
}

void main() {
   gl_FragColor = vec4(rgbShift(u_image, v_texCoord, v_delta), u_alpha);
}
