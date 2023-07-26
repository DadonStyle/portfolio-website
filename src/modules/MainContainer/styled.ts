import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 0;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 2%;
  left: 0;
  position: fixed;
`;

const S = {
  MainContainer,
  Header,
};
export default S;
