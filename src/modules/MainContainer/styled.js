import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 0;
  gap: ${({ theme }) => (theme.isMobile ? '6rem' : '1rem')};
  cursor: ${({ theme }) => `${theme.cursor}`};
  padding-top: ${({ theme }) => (theme.isMobile ? '2rem' : '')};
`;

const S = {
  MainContainer,
};

export default S;
