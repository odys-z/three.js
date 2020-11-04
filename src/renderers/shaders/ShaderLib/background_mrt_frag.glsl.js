export default /* glsl */`
uniform sampler2D t2D;

in vec2 vUv;

void main() {

	vec4 texColor = texture( t2D, vUv );

	pc_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <_mrt_end>
}
`;
