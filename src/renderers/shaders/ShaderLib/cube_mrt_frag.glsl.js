export default /* glsl */`
#include <envmap_common_pars_fragment>
uniform float opacity;

in vec3 vwDir;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vwDir;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

	#include <_mrt_end>
}
`;
