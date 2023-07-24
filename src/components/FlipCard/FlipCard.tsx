import { PropsWithChildren } from 'react';
import S from './styled';

interface IFlipCard {
  frontImg: string;
  backImg: string;
}

const FlipCard = (props: PropsWithChildren<IFlipCard>) => {
  return (
    <S.FlipCardWrapper>
      <S.FlipCardContainer>
        <S.FlipCardInner>
          <S.FlipCardFront>
            <img width="100%" height="100%" src={props.frontImg} alt="" />
          </S.FlipCardFront>
          <S.FlipCardBack>
            <img width="100%" height="100%" src={props.backImg} alt="" />
          </S.FlipCardBack>
        </S.FlipCardInner>
      </S.FlipCardContainer>
    </S.FlipCardWrapper>
  );
};

export default FlipCard;
