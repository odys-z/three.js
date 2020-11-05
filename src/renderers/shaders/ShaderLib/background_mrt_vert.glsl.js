export default /* glsl */`
#include <common>

out vec3 vNormal;
out vec3 vwDir;

void main() {
	vNormal = normal;
	vwDir = transformDirection( position, modelMatrix );

	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	gl_Position.z = gl_Position.w;
}
`;
