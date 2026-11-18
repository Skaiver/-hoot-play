import{S as e}from"./shaderStore-D7CeNWBX.js";import{b as o,a as t,c as a,d as c}from"./bakedVertexAnimation-DBCB-nAc.js";import{c as d,a as s}from"./clipPlaneVertex-DCxCKE5T.js";import{f}from"./fogVertexDeclaration-DgPgR27w.js";import{i as l}from"./instancesDeclaration-BulZKtBf.js";import{i as S}from"./instancesVertex-Cx5OQ1jA.js";import{f as m}from"./fogVertex-1KFM6tqE.js";import{v as x}from"./vertexColorMixing-Zz8RMzzE.js";const r="colorVertexShader",n=`attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform view: mat4x4f;
#endif
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=n);const u=[o,t,d,f,l,S,a,c,s,m,x];for(const i of u)e.IncludesShadersStoreWGSL[i.name]||(e.IncludesShadersStoreWGSL[i.name]=i.shader);const O={name:r,shader:n};export{O as colorVertexShaderWGSL};
