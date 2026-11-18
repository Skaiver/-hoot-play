# Local Draco decoder

Runtime files copied from the installed Three.js 0.186.0 `examples/jsm/libs/draco/gltf` distribution. The loader uses this local directory with two workers; no remote decoder/CDN is needed. Draco license and Three.js license are included. Geometry uses Draco compression level 6 with position quantization 16, normals 12 and texture coordinates 14. The scene exporter tests decoded gameplay alignment separately from geometry; collision JSON is not quantized.

If upgrading Three/Draco, replace all three runtime files as a compatible set and rerun Skyfall load, visual, lifecycle and gameplay tests. Keep decoder licensing with the files. Blender's exporter encoder and the JavaScript/WASM decoder are separate components; successful encoding alone is not runtime verification.
