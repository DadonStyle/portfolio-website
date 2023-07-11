import { PropsWithChildren } from 'react';
import S from './styled';

export interface IGlitchProps {
  active: boolean;
  hover: boolean;
  text: string;
}

const Glitch = (props: PropsWithChildren<IGlitchProps>) => {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <S.GlitchContainer>
      <S.StyledGlitch
        active={props.active}
        hover={props.hover}
        text={props.text}
        randomColor={randomColor}
      >
        {props.text}
      </S.StyledGlitch>
    </S.GlitchContainer>
  );
};

export default Glitch;
