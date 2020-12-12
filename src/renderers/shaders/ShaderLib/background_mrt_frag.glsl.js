export default /* glsl */`
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535

uniform float opacity;
uniform sampler2D envMap;

in vec3 vwDir;

vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}

void main() {

	vec3 wdir = normalize( vwDir );
	vec2 sampleUV = equirectUv( wdir );
	pc_FragColor = texture( envMap, sampleUV );

	pc_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

	#include <_mrt_end>
	xBokehDepth = vec4(sampleUV.x, sampleUV.y, 1., 0.);
}
`;
