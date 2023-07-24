import { PropsWithChildren } from 'react';
import FlipCard from './FlipCard';
import S from './styled';

interface IObjectImg {
  frontImg: string;
  backImg: string;
}

interface IFLipCardContainer {
  imgArr: Array<IObjectImg>;
}

const FLipCardContainer = (props: PropsWithChildren<IFLipCardContainer>) => {
  return (
    <S.FlipCardBigContainer>
      {props.imgArr?.map((item) => (
        <FlipCard
          key={Math.random()}
          frontImg={item.frontImg}
          backImg={item.backImg}
        />
      ))}
    </S.FlipCardBigContainer>
  );
};

export default FLipCardContainer;
