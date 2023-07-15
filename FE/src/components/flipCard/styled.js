import styled from 'styled-components';

const FlipCardBigContainer = styled.div`
  display: flex;
`;

const FlipCardWrapper = styled.div`
  background-color: transparent;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  perspective: 1000px;
  display: flex;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const FlipCardContainer = styled.div`
  width: 100%;
  height: 100%;
  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #bbb;
  border-radius: 50%;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 50%;
`;

const S = {
  FlipCardBigContainer,
  FlipCardWrapper,
  FlipCardInner,
  FlipCardContainer,
  FlipCardFront,
  FlipCardBack,
};

export default S;
