#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct main0_in
{
    float2 vTex [[user(locn0)]];
    float4 vColor [[user(locn1)]];
};

struct main0_out
{
    float4 FragColor [[color(0)]];
};

fragment main0_out main0(main0_in in [[stage_in]], texture2d<float> uTex [[texture(0)]], sampler uTexSmplr [[sampler(0)]])
{
    main0_out out = {};
    out.FragColor = in.vColor * uTex.sample(uTexSmplr, in.vTex.xy);
    return out;
}

