import { isMobile } from './../../App';
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
  position: ${({ theme }) => (theme.isMobile ? '' : 'fixed')};
  width: 100%;
  max-width: ${({ theme }) => (theme.isMobile ? '' : '100px')};
  margin-top: ${({ theme }) => (theme.isMobile ? '-4rem' : '')};
  margin-bottom: ${({ theme }) => (theme.isMobile ? '1rem' : '')};
  bottom: 3%;
  left: ${({ theme }) => (theme.isMobile ? '' : '3%')};
  z-index: 9999;
  gap: 2rem;
  cursor: ${({ theme }) => `${theme.cursor}`};
`;

interface ILink {
  animationDelay: number;
}

const Link = styled.a<ILink>`
  cursor: ${({ theme }) => `${theme.cursor}`};
  svg {
    animation: ${({ theme }) => (theme.isMobile ? '' : jump)} 2s ease;
    animation-delay: ${({ animationDelay }) => animationDelay}s;
    width: 32px;
    height: 32px;
    z-index: 9999;
    cursor: ${({ theme }) => `${theme.cursor}`};
    :hover {
      scale: 2;
      transition: all 0.4s ease-in-out;
      cursor: ${({ theme }) => `${theme.cursor}`};
    }
    :active {
      cursor: ${({ theme }) => `${theme.cursor}`};
      animation: ${scale} 0.4s ease;
    }
  }
  :last-of-type {
    scale: 1.1;
  }
`;

const S = {
  Footer,
  Link,
};

export default S;
