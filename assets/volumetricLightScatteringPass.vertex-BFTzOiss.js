import{S as e}from"./shaderStore-D7CeNWBX.js";import{b as r,a as n,c as d,d as o}from"./bakedVertexAnimation-DTrmtl_b.js";import{m as s,a as c,b as f,c as l}from"./morphTargetsVertex-C1NpfV-O.js";import{i as m}from"./instancesDeclaration-DdUPuan2.js";import{i as u}from"./instancesVertex-BSh2M2pP.js";const t="volumetricLightScatteringPassVertexShader",a=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform mat4 viewProjection;uniform vec2 depthValues;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#if (defined(ALPHATEST) || defined(NEED_UV)) && defined(UV1)
vec2 uvUpdated=uv;
#endif
#if (defined(ALPHATEST) || defined(NEED_UV)) && defined(UV2)
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
gl_Position=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
}
`;e.ShadersStore[t]||(e.ShadersStore[t]=a);const V=[r,n,s,c,m,f,l,u,d,o];for(const i of V)e.IncludesShadersStore[i.name]||(e.IncludesShadersStore[i.name]=i.shader);const T={name:t,shader:a};export{T as volumetricLightScatteringPassVertexShader};
