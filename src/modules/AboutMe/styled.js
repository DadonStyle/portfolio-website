import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  z-index: 4;
  gap: 2rem;
`;

const JumpingWrapper = styled.div`
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.05);
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const ParagraphContainer = styled.div`
  width: 100%;
`;

const S = {
  Wrapper,
  JumpingWrapper,
  HeaderWrapper,
  ParagraphContainer,
};

export default S;
