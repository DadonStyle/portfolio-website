import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  0% {
    scale: 1;
  }
  50% {
    scale: 2.2;
  }
  100% {
    scale: 2
  }
`;

const jump = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(15px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 100px;
  bottom: 3%;
  left: 3%;
  z-index: 9999;
  gap: 2rem;
`;

interface ILink {
  animationDelay: number;
}

const Link = styled.a<ILink>`
  svg {
    animation: ${jump} 2s ease;
    animation-delay: ${({ animationDelay }) => animationDelay}s;
    width: 32px;
    height: 32px;
    z-index: 9999;
    cursor: none;
    :hover {
      scale: 2;
      transition: all 0.4s ease-in-out;
      cursor: none;
    }
    :active {
      animation: ${scale} 0.4s ease;
    }
  }
`;

const S = {
  Footer,
  Link,
};

export default S;
