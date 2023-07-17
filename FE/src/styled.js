import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: -9;
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
  cursor: none;
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
