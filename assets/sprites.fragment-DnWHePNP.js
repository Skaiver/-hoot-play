import{S as e}from"./shaderStore-D7CeNWBX.js";import{objectIdFunctionsWGSL as a}from"./objectIdFunctions-Dy2n4OlJ.js";import{p as n,m as s}from"./meshBlendTagFragmentOutput-CAlQR2X5.js";import{f as m,a as d}from"./fogFragment-DDxSKpeP.js";import{l as S}from"./logDepthDeclaration-C6aCvWlP.js";import{helperFunctionsWGSL as c}from"./helperFunctions-DdMzpYci.js";import{l}from"./logDepthFragment-QMWCU8_3.js";import{g as v}from"./geometryRenderingFragment-5ykdSteB.js";const i="imageProcessingCompatibility",f=`#ifdef IMAGEPROCESSINGPOSTPROCESS
fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);
#endif
`;e.IncludesShadersStoreWGSL[i]||(e.IncludesShadersStoreWGSL[i]=f);const u={name:i,shader:f},o="spritesPixelShader",t=`uniform alphaTest: i32;
#include<prePassDeclaration>[SCENE_MRT_COUNT]
varying vColor: vec4f;
#ifdef PREPASS
uniform geometryZeroAlphaDiscard: f32;
#ifdef PREPASS_POSITION
varying vPositionW: vec3f;
#endif
#ifdef PREPASS_NORMAL
varying vNormalV: vec3f;
#endif
#ifdef PREPASS_WORLD_NORMAL
varying vNormalW: vec3f;
#endif
#endif
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#include<fogFragmentDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
#ifdef PIXEL_PERFECT
fn uvPixelPerfect(uv: vec2f)->vec2f {var res: vec2f= vec2f(textureDimensions(diffuseSampler,0));var uvTemp=uv*res;var seam: vec2f=floor(uvTemp+0.5);uvTemp=seam+clamp((uvTemp-seam)/fwidth(uvTemp),vec2f(-0.5),vec2f(0.5));return uvTemp/res;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#ifdef PIXEL_PERFECT
var uv: vec2f=uvPixelPerfect(input.vUV);
#else
var uv: vec2f=input.vUV;
#endif
var color: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,uv);var fAlphaTest: f32= f32(uniforms.alphaTest);if (fAlphaTest != 0.)
{if (color.a<0.95) {discard;}}
color*=input.vColor;
#ifdef PREPASS
#if defined(PREPASS_ALBEDO) || defined(PREPASS_ALBEDO_SQRT)
var geometryAlbedo: vec3f=toLinearSpaceVec3(color.rgb);
#endif
if (fAlphaTest==0.0 && color.a==0.0 && uniforms.geometryZeroAlphaDiscard>0.0) {discard;}
#endif
#include<logDepthFragment>
#include<fogFragment>
#ifdef PREPASS
#include<imageProcessingCompatibility>(fragmentOutputs.color,color)
var geometryColor: vec4f=color;
#ifdef PREPASS_POSITION
var geometryPositionW: vec3f=input.vPositionW;
#endif
#ifdef PREPASS_LOCAL_POSITION
var geometryPositionL: vec3f=input.vPosition;
#endif
#ifdef PREPASS_DEPTH
var geometryViewDepth: f32=input.vViewPos.z;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
var geometryNormalizedViewDepth: f32=input.vNormViewDepth;
#endif
#ifdef PREPASS_NORMAL
var geometryNormalV: vec3f=input.vNormalV;
#endif
#ifdef PREPASS_WORLD_NORMAL
var geometryNormalW: vec3f=input.vNormalW;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
var geometryCurrentPosition: vec4f=input.vCurrentPosition;var geometryPreviousPosition: vec4f=input.vPreviousPosition;
#endif
#include<geometryRenderingFragment>
#else
fragmentOutputs.color=color;
#include<imageProcessingCompatibility>
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStoreWGSL[o]||(e.ShadersStoreWGSL[o]=t);const p=[a,n,m,S,c,l,d,u,s,v];for(const r of p)e.IncludesShadersStoreWGSL[r.name]||(e.IncludesShadersStoreWGSL[r.name]=r.shader);const T={name:o,shader:t};export{T as spritesPixelShaderWGSL};
