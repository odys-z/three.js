export default /* glsl */`
xColor = pc_FragColor;
xEnvSpecular = vec4(0.);
xBokehDepth = bokehDepth( bokehNear, bokehFar );
`;
