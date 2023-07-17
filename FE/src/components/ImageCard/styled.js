import styled, { keyframes } from 'styled-components';

const right = keyframes`
0% {}
100% {}

`;

const ImageCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const ImgContainer = styled.div`
  img {
    width: 500px;
    height: 500px;
    border-radius: 30px;
    box-shadow: black 0 7px 20px 0;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid silver;
  position: relative;
  overflow: hidden;
  :first-child {
    border-top: 2px solid silver;
  }
  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 45%;
    left: -100%;
    stroke: white;
  }
  :hover {
    svg {
      left: 0;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const TextInsideWrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  color: white;
  cursor: none;
  :hover {
    transform: translateX(2rem);
    transition: 0.3s ease-in-out;
    color: rgba(255, 255, 255, 0.6);
    cursor: none;
  }
`;

const TextName = styled.div`
  font-weight: bold;
  font-size: 22px;
  display: flex;
`;

const TextDesc = styled.div`
  display: flex;
`;

const TextTech = styled.div`
  display: flex;
`;

const S = {
  ImageCardContainer,
  ImgContainer,
  DetailsContainer,
  TextWrapper,
  TextInsideWrapper,
  TextName,
  TextDesc,
  TextTech,
};

export default S;
