import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const GlitchWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const S = {
  Wrapper,
  GlitchWrapper,
};

export default S;
