import styled, { keyframes } from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 2%;
  left: 0;
  position: fixed;
`;

const LogoWrapper = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 100%;
  padding: 1rem;
  margin-left: 1rem;
  letter-spacing: 4px;
  font-family: cursive;
  user-select: none;
  :hover {
    background-color: white;
    color: black;
    transition: all 0.2s ease;
    box-shadow: 0px 0px 2px 5px black;
  }
  :active {
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0s ease-in-out;
  }
`;

const S = {
  Header,
  LogoWrapper,
};

export default S;
