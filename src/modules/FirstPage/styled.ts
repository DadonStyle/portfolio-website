import styled, { keyframes } from 'styled-components';

export const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%); opacity: 0;
  }
  100% {
    transform: translateX(0); opacity: 1;
  }
`;
interface IWrapper {
  isVisible: boolean;
}

const Wrapper = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  z-index: 4;
  animation: ${(props) => (props.isVisible ? slideInFromLeft : '')} 3s ease;
`;

interface IGlitchWrapper {
  isGap?: Boolean;
}

const GlitchWrapper = styled.div<IGlitchWrapper>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ isGap }) => (isGap ? '2rem' : '')};
`;

const TextWrapper = styled.div`
  font-size: ${({ theme }) => (theme.isMobile ? '1.5rem' : '2rem')};
  :hover {
    text-decoration: lavenderblush wavy underline;
    scale: 1.05;
    transition: all 0.5s ease-in-out;
  }
`;

const S = {
  Wrapper,
  GlitchWrapper,
  TextWrapper,
};

export default S;
