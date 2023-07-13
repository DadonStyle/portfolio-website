import styled, { keyframes, css } from 'styled-components';

interface IAnimationWrapper {
  floatAnimation: any;
}

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
    top: 10%;
    transform: rotate(0); 
    right: 10%;
  }
  50% {
    top: -110%;
    transform: rotate(60deg); 
    right: 70%
  }
  100% {
    top: 10%;
    right: 30%;
    transform: rotate(90deg); 
  }
`;

const float3 = keyframes`
  0% {
    top: -5%;
    transform: rotate(0); 
    right: 10%;
  }
  50% {
    top: 30%;
    transform: rotate(60deg); 
    right: 40%
  }
  100% {
    top: -10%;
    right: 20%;
    transform: rotate(90deg); 
  }
`;

const float4 = keyframes`
  0% {
    top: -5%;
    transform: rotate(0); 
    right: 10%;
  }
  50% {
    top: 30%;
    transform: rotate(60deg); 
    right: 40%
  }
  100% {
    top: -10%;
    right: 20%;
    transform: rotate(90deg); 
  }
`;

const float5 = keyframes`
  0% {
    top: -5%;
    transform: rotate(0); 
    right: 10%;
  }
  50% {
    top: 30%;
    transform: rotate(60deg); 
    right: 40%
  }
  100% {
    top: -10%;
    right: 20%;
    transform: rotate(90deg); 
  }
`;

const float6 = keyframes`
  0% {
    top: -5%;
    transform: rotate(0); 
    right: 10%;
  }
  50% {
    top: 30%;
    transform: rotate(60deg); 
    right: 40%
  }
  100% {
    top: -10%;
    right: 20%;
    transform: rotate(90deg); 
  }
`;

const float7 = keyframes`
  0% {
    top: -5%;
    transform: rotate(0); 
    right: 10%;
  }
  50% {
    top: 30%;
    transform: rotate(60deg); 
    right: 40%
  }
  100% {
    top: -10%;
    right: 20%;
    transform: rotate(90deg); 
  }
`;

const float8 = keyframes`
  0% {
    top: -5%;
    transform: rotate(0); 
    right: 10%;
  }
  50% {
    top: 30%;
    transform: rotate(60deg); 
    right: 40%
  }
  100% {
    top: -10%;
    right: 20%;
    transform: rotate(90deg); 
  }
`;

const FloatContainer = styled.div`
  svg {
    position: absolute;
    min-height: 40px;
    min-width: 60px;
    z-index: -3;
    filter: 60px;
    overflow: hidden;
  }
`;

const AnimationWrapper = styled.svg<IAnimationWrapper>`
  animation: ${({ floatAnimation }) => floatAnimation} 25s ease-in-out infinite;
`;

const S = {
  FloatContainer,
  AnimationWrapper,
};

export default S;
