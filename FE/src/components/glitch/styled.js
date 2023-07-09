import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const glitch = keyframes`
  0% {
    transform: translate(0)
  }
  20% {
    transform: translate(-2px, 2px)
  }
  40% {
    transform: translate(-2px, -2px)
  }
  60% {
    transform: translate(2px, 2px)
  }
  80% {
    transform: translate(2px, -2px)
  }
  100% {
    transform: translate(0)
  }
`;

const animationHover = css`
  &:after {
    animation: ${glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
      infinite;
  }
`;

const GlitchContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const StyledGlitch = styled.span`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  font-size: 4rem;
  line-height: 1;
  white-space: nowrap;
  &:before,
  &:after {
    display: flex;
    justify-content: center;
    align-items: center;
    content: '${({ text }) => text}';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  &:after {
    z-index: -2;
  }
  &:before {
    z-index: -1;
  }

  ${({ active }) => (active ? animationHover : '')}
  ${({ hover }) =>
    hover &&
    css`
      cursor: pointer;
      :hover {
        ${animationHover}
        color: ${({ randomColor }) => randomColor ?? 'red'}
    `}
`;

const S = {
  GlitchContainer,
  StyledGlitch,
};

export default S;
