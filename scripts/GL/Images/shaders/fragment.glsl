varying vec2 vUv;
varying float vParallax;

uniform sampler2D uTexture;
uniform float uStrength;
uniform float uTime;
uniform float uVisible;
uniform float uScale;

vec4 tex(in vec2 st) {
   return texture2D(uTexture, st);
}

void main() {

   vec2 uv = vUv;

   uv.y += vParallax;

   if(uv.y > 1.) {
      discard;
   }

   if(uv.y < 0.) {
      discard;
   }

   vec2 newUv = uv;

   newUv += (sin(newUv.y * 10. + (uTime / 5.)) / 500.) * (uStrength * 0.30);
   newUv += (sin(newUv.x * 10. + (uTime / 15.)) / 500.) * (uStrength * 0.30);

   vec2 p = (newUv - vec2(0.5, 0.5)) * (1.0 - uScale) + vec2(0.5, 0.5);

   vec4 img = tex(p);

   vec4 finalTexture = img;

   gl_FragColor = finalTexture * uVisible;
}
