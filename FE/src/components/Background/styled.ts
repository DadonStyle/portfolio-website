import styled, { keyframes } from 'styled-components';

interface IAnimationWrapper {
  floatAnimation: any;
}

const FloatContainer = styled.div`
  svg {
    position: absolute;
    max-height: 60px;
    max-width: 60px;
    z-index: -3;
    filter: 60px;
    overflow: visible;
  }
`;

const Grain = keyframes`
  0%,
  100% {
    transform: translate(0);
  }

  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, 5%);
  }
  30% {
    transform: translate(7%, -25%);
  }
  40% {
    transform: translate(-5%, 25%);
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(15%);
  }
  70% {
    transform: translateY(15%);
  }
  80% {
    transform: translate(3%, 35%);
  }
  90% {
    transform: translate(-10%, 10%);
  }
`;

const BackgroundImg = styled.div`
  opacity: 0.4;
  background-image: url(https://res.cloudinary.com/dgkl4mfhe/image/upload/v1689171910/noise_jmcjp6.png);
  background-size: 200px;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -10;
  &:after {
    animation: ${Grain} 10s steps(20) infinite;
    background-image: url(https://res.cloudinary.com/dgkl4mfhe/image/upload/v1689171910/noise_jmcjp6.png);
    content: '';
    z-index: -10;
    height: 300%;
    width: 300%;
    position: fixed;
    left: -50%;
    top: -110%;
    opacity: 0.3;
  }
`;

const AnimationWrapper = styled.svg<IAnimationWrapper>`
  animation: ${({ floatAnimation }) => floatAnimation}
    ${10 + Math.floor(Math.random() * 100) + 's'} ease-in-out infinite;
`;

const S = {
  FloatContainer,
  AnimationWrapper,
  BackgroundImg,
};

export default S;
