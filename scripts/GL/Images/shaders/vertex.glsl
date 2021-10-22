@import ./parallax;

varying vec2 vUv;
varying vec2 vDUv;
varying float vParallax;

uniform float uStrength;
uniform float uClicked;
uniform float uViewportY;
uniform float uScrollHeight;
uniform float uOffsetY;
uniform float uParallax;



void main() {
  vec3 pos = position;
  vUv = bgCover(size, resolution, uv);
  vDUv = uv;

  vParallax = parallax(uOffsetY, uScrollHeight, uParallax);

  vec4 newPosition = modelViewMatrix * vec4(pos, 1.0);

  float scrollValue = -uStrength;

  newPosition.z += sin(newPosition.y / uViewportY * 2. * PI) * scrollValue;

  gl_Position = projectionMatrix * newPosition;
}


