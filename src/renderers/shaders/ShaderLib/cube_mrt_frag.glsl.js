export default /* glsl */`
// #version 300 es - should handled automatically
// #define gl_FragColor xFragColor

precision highp float;
precision highp int;

layout(location = 0) out vec4 gl_FragColor;
layout(location = 1) out vec4 xColor;

#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

	xColor.rgba = gl_FragColor.bgra;1
}
`;
