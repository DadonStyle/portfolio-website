import { useState, PropsWithChildren } from 'react';
import { ReactComponent as RightArrow } from '../../assets/svg/right-arrow.svg';
import { ReactComponent as Github } from '../../assets/svg/github-mark.svg';
import S from './styled';

interface ITextObject {
  img: string;
  name: string;
  desc: string;
  link: string;
  tech: string;
}

interface IImageCard {
  textsImgsArr: Array<ITextObject>;
}

const ImageCard = (props: PropsWithChildren<IImageCard>) => {
  const [currImg, setCurrImg] = useState(0);

  const handleOnMouseOver = (index: number) => () => setCurrImg(index);

  return (
    <>
      <S.ImageCardContainer>
        <S.ImgContainer>
          <img src={props.textsImgsArr[currImg].img} alt="" />
        </S.ImgContainer>
        <S.DetailsContainer>
          {props.textsImgsArr.map((item: ITextObject, index: number) => (
            <S.TextWrapper
              key={item.link}
              onMouseOver={handleOnMouseOver(index)}
            >
              <RightArrow />
              <S.TextInsideWrapper href={item.link} target="_blank">
                <S.TextName>{item.name}</S.TextName>
                <S.TextDesc>{item.desc}.</S.TextDesc>
                <S.TextTech>{item.tech}</S.TextTech>
              </S.TextInsideWrapper>
            </S.TextWrapper>
          ))}
        </S.DetailsContainer>
      </S.ImageCardContainer>
    </>
  );
};

export default ImageCard;
