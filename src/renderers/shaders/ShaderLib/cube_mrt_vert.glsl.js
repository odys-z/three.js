export default /* glsl */`
out vec3 vwDir;

#include <common>

void main() {

	vwDir = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`;
