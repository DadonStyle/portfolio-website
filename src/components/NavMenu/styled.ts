import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 40%;
  right: 0;
  height: fit-content;
  width: fit-content;
  z-index: 999;
  cursor: none;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2.5px);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
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
  cursor: none;
  :hover {
    box-shadow: 0px 0px 2px 4px rgba(255, 29, 88, 1);
    transition: 0.8s all ease-out;
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
