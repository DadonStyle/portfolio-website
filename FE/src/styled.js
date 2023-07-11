import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  overflow: hidden;
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

const SectionHeaderWrapper = styled.div`
  animation: ${Sweep} 1.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
`;

const GlitchWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const raise = keyframes`
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

const FloatContainer = styled.div`
  svg {
    position: absolute;
    min-height: 40px;
    min-width: 60px;
    z-index: -999;
    animation: ${raise} 10.2s ease-in-out infinite;
    filter: 60px;
    overflow: hidden;
  }
`;

const S = {
  MainContainer,
  Header,
  Footer,
  Section,
  SectionHeaderWrapper,
  SectionBody,
  GlitchWrapper,
  FloatContainer,
};
export default S;
