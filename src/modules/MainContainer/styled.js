import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 0;
  gap: ${({ theme }) => (theme.isMobile ? "4rem" : "1rem")};
  cursor: ${({ theme }) => `${theme.cursor}`};
  padding-top: ${({ theme }) => (theme.isMobile ? "2rem" : "")};
  width: 100vw;
  align-items: ${({ theme }) => (theme.isMobile ? "center" : "flex-start")};
`;

const S = {
  MainContainer,
};

export default S;
