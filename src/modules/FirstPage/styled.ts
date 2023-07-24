import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  z-index: 4;
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
  font-size: 2rem;
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
