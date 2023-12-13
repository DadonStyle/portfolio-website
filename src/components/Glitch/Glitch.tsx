import { PropsWithChildren } from 'react';
import S from './styled';
import { isMobile } from '../../App';

export interface IGlitchProps {
  text: string;
  isRandomFont?: boolean;
  isRandomRotateZ?: boolean;
  isNoam?: boolean;
  isHey?: boolean;
}

// gettign a number between
const getRandomDeg = (): number => {
  const deg: number = Math.floor(Math.random() * 12 - 6);
  if (deg > 3 || deg < -3) {
    return deg;
  }
  return getRandomDeg();
};

const Glitch = (props: PropsWithChildren<IGlitchProps>) => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const randomFont = (() => Math.floor(Math.random() * 4 + 4))();
  const randomDeg = getRandomDeg();

  return (
    <S.GlitchContainer draggable='false'>
      <S.StyledGlitch
        text={props.text}
        randomColor={randomColor}
        fontSize={props.isRandomFont && !isMobile ? `${randomFont}rem` : '3rem'}
        rotateZ={props.isRandomRotateZ ? `${randomDeg}deg` : '0deg'}
        isNoam={props.isNoam ?? false}
        isHey={props.isHey ?? false}
      >
        {props.text}
      </S.StyledGlitch>
    </S.GlitchContainer>
  );
};

export default Glitch;
