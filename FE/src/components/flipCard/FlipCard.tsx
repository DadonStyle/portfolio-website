import styled from 'styled-components';

const FlipCardWrapper = styled.div`
  background-color: transparent;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
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
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: red;
  color: blue;
  transform: rotateY(180deg);
`;

// Usage
function FlipCard() {
  return (
    <FlipCardWrapper>
      <FlipCardContainer>
        <FlipCardInner>
          <FlipCardFront>Front Side</FlipCardFront>
          <FlipCardBack>Back Side</FlipCardBack>
        </FlipCardInner>
      </FlipCardContainer>
    </FlipCardWrapper>
  );
}

export default FlipCard;