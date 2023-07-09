import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const ScrollBg = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -100;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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
`;

const GlitchWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const S = {
  MainContainer,
  ScrollBg,
  Header,
  Footer,
  Section,
  SectionHeaderWrapper,
  SectionBody,
  GlitchWrapper,
};
export default S;
