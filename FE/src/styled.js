import React from 'react';
import styled, { css, keyframes } from 'styled-components';

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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  z-index: -5;
  background-image: url(https://res.cloudinary.com/dgkl4mfhe/image/upload/v1689171910/noise_jmcjp6.png);
  background-size: 200px;
  &:after {
    animation: ${Grain} 8s steps(10) infinite; // https://itssharl.ee/fr https://css-tricks.com/snippets/css/animated-grainy-texture/
    background-image: url(https://res.cloudinary.com/dgkl4mfhe/image/upload/v1689171910/noise_jmcjp6.png);
    content: '';
    z-index: -4;
    height: 300%;
    width: 300%;
    position: fixed;
    left: -50%;
    top: -110%;
    opacity: 0.3;
  }
`;

const Header = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  background: transparent;
  padding: 3em 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  position: fixed;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Sweep = keyframes`
  0%    { opacity: 0; transform: translateX(-8px) }
  100%  { opacity: 1; transform: translateX(0) }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
`;

const GlitchWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const S = {
  MainContainer,
  Header,
  Footer,
  Section,
  SectionBody,
  GlitchWrapper,
};
export default S;
