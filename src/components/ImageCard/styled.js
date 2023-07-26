import styled, { keyframes } from 'styled-components';

const jumpingRight = keyframes`
  0% {transform: translateX(0); left: 0}
  50% {transform: translateX(-10px); left: 0}
  100% {transform: translateX(0); left: 0}
`;

const ImageCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const ImgContainer = styled.div`
  display: ${({ theme }) => (theme.isMobile ? 'none' : '')};
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
  padding: ${({ theme }) => (theme.isMobile ? '0 1rem' : '')};
  position: relative;
  overflow: hidden;
  :first-child {
    border-top: 2px solid silver;
  }
  svg {
    rotate: 180deg;

    position: absolute;
    width: 20px;
    height: 20px;
    top: 45%;
    left: -100%;
    stroke: white;
  }
  :hover {
    svg {
      animation: ${jumpingRight} 0.7s ease-in-out infinite;
      animation-delay: 0.2s;
    }
  }
`;

const TextInsideWrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  color: white;
  cursor: ${({ theme }) => `${theme.cursor}`};
  :hover {
    text-decoration: underline;
    padding-left: 2rem;
    margin-right: -2rem; // when transition triggered it adds padding and remove margin. (text stays in place)
    transition: 0.3s ease-in-out;
    color: white;
    opacity: 0.6;
    cursor: ${({ theme }) => `${theme.cursor}`};
  }
`;

const TextName = styled.div`
  font-weight: bold;
  font-size: 32px;
  display: flex;
`;

const TextDesc = styled.div`
  display: flex;
`;

const TextTech = styled.div`
  display: flex;
  color: aqua;
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
