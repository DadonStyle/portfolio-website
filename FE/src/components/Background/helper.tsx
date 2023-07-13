import { ReactComponent as Float1 } from '../../assets/float2.svg';
import { ReactComponent as Float2 } from '../../assets/float2.svg';
import { ReactComponent as Float3 } from '../../assets/float3.svg';
import { ReactComponent as Float4 } from '../../assets/float2.svg';
import { ReactComponent as Float5 } from '../../assets/float2.svg';
import { ReactComponent as Float6 } from '../../assets/float2.svg';
import { ReactComponent as Float7 } from '../../assets/float2.svg';
import { ReactComponent as Float8 } from '../../assets/float2.svg';
import { keyframes } from 'styled-components';

const float1 = keyframes`
  0% {
    top: -10%;
    transform: rotate(0); 
    right: 10%;
  }
  50% {
    top: 110%;
    transform: rotate(60deg); 
    right: 70%
  }
  100% {
    top: -10%;
    right: 30%;
    transform: rotate(90deg); 
  }
`;

const float2 = keyframes`
  0% {
    top: -10%;
    transform: rotate(0); 
    right: 20%;
  }
  50% {
    top: 110%;
    transform: rotate(60deg); 
    right: 70%
  }
  100% {
    top: -10%;
    right: 30%;
    transform: rotate(90deg); 
  }
`;

const float3 = keyframes`
  0% {
    top: -10%;
    transform: rotate(0); 
    right: 30%;
  }
  50% {
    top: 110%;
    transform: rotate(60deg); 
    right: 70%
  }
  100% {
    top: -10%;
    right: 30%;
    transform: rotate(90deg); 
  }
`;

const float4 = keyframes`
  0% {
    top: -10%;
    transform: rotate(0); 
    right: 40%;
  }
  50% {
    top: 110%;
    transform: rotate(60deg); 
    right: 70%
  }
  100% {
    top: -10%;
    right: 30%;
    transform: rotate(90deg); 
  }
`;

const float5 = keyframes`
  0% {
    top: -10%;
    transform: rotate(0); 
    right: 50%;
  }
  50% {
    top: 110%;
    transform: rotate(60deg); 
    right: 70%
  }
  100% {
    top: -10%;
    right: 30%;
    transform: rotate(90deg); 
  }
`;

const float6 = keyframes`
  0% {
    top: -10%;
    transform: rotate(0); 
    right: 60%;
  }
  50% {
    top: 110%;
    transform: rotate(60deg); 
    right: 70%
  }
  100% {
    top: -10%;
    right: 30%;
    transform: rotate(90deg); 
  }
`;

const float7 = keyframes`
  0% {
    top: -10%;
    transform: rotate(0); 
    right: 70%;
  }
  50% {
    top: 110%;
    transform: rotate(60deg); 
    right: 70%
  }
  100% {
    top: -10%;
    right: 30%;
    transform: rotate(90deg); 
  }
`;

const float8 = keyframes`
  0% {
    top: -10%;
    transform: rotate(0); 
    right: 80%;
  }
  50% {
    top: 110%;
    transform: rotate(60deg); 
    right: 80%
  }
  100% {
    top: -10%;
    right: 30%;
    transform: rotate(90deg); 
  }
`;

export const svgs = [
  <Float1 />,
  <Float2 />,
  <Float3 />,
  <Float4 />,
  <Float5 />,
  <Float6 />,
  <Float7 />,
  <Float8 />,
];

export const keyFrames = [
  float1,
  float2,
  float3,
  float4,
  float5,
  float6,
  float7,
  float8,
];
