import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: ${({ theme }) => (theme.isMobile ? "relative" : "fixed")};
  top: ${({ theme }) => (theme.isMobile ? "0" : "40%")};
  right: ${({ theme }) => (theme.isMobile ? "0" : "0")};
  height: fit-content;
  width: fit-content;
  z-index: 999;
  cursor: ${({ theme }) => `${theme.cursor}`};
  background: ${({ theme }) =>
    theme.isMobile ? "transparent" : "rgba(255, 255, 255, 0.1)"};
  backdrop-filter: ${({ theme }) =>
    theme.isMobile ? "none" : "blur(2.5px)"};
  border-top-left-radius: ${({ theme }) =>
    theme.isMobile ? "0" : "20px"};
  border-bottom-left-radius: ${({ theme }) =>
    theme.isMobile ? "0" : "20px"};
`;

interface INavBtn {
  selected: number | undefined;
  scrollId: number | undefined;
}

const NavBtn = styled.div<INavBtn>`
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
  rotate: 45deg;
  border: 1px solid black;
  box-shadow: 0px 0px 20px 1px black;
  margin: 1rem;
  /* background-color: ${(props) =>
    props.selected === props.scrollId ? 'aqua' : 'white'}; */
  cursor: ${({ theme }) => `${theme.cursor}`};
  :hover {
    box-shadow: 0px 0px 2px 4px rgba(255, 29, 88, 0.8);
    background-color: rgba(255, 29, 88, 0.2);
    transition: 0.3s all ease-out;
  }
`;

const MovingCurrentPage = styled.div`
  position: fixed;
  width: 25px;
  height: 25px;
  rotate: 45deg;
  background-color: rgba(255, 29, 88, 1);
  margin-top: 1rem;
  top: 0;
`;

const S = {
  NavWrapper,
  NavBtn,
  MovingCurrentPage,
};

export default S;
