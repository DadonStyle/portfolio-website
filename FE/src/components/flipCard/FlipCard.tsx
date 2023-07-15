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
          <S.FlipCardFront>{props.frontImg}</S.FlipCardFront>
          <S.FlipCardBack>{props.backImg}</S.FlipCardBack>
        </S.FlipCardInner>
      </S.FlipCardContainer>
    </S.FlipCardWrapper>
  );
};

export default FlipCard;
