import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 2%;
  left: 0;
  position: fixed;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1.5rem;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 2%;
`;

const S = {
  MainContainer,
  Header,
  Section,
  Footer,
};
export default S;
