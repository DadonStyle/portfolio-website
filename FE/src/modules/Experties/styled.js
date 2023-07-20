import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const S = {
  HeaderWrapper,
  BodyWrapper,
};

export default S;
