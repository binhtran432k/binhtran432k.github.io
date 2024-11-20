#define M_PI 3.14

precision lowp float;

attribute vec2 a_position;
attribute vec2 a_texCoord;

uniform vec2 u_resolution;
uniform vec2 u_delta;

varying vec2 v_texCoord;

vec2 deformateCurve(vec2 position, vec2 uv, vec2 delta) {
  position.x += sin(uv.y * M_PI) * delta.x;
  position.y += sin(uv.x * M_PI) * delta.y;
  return position;
}

vec2 pixelToVec(vec2 val) {
  return (2.*val/u_resolution-1.)*vec2(1,-1);
}

void main() {
  vec2 position = deformateCurve(a_position, a_texCoord*u_resolution, u_delta);

  v_texCoord = a_texCoord + u_delta/u_resolution*2.;
  gl_Position = vec4(pixelToVec(position), 0, 1);
}
