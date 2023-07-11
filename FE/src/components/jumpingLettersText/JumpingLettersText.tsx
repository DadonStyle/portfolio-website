import { PropsWithChildren } from 'react';
import S from './styled';

export interface IJumpingLettersTextProps {
  text: string;
}

const JumpingLettersText = (
  props: PropsWithChildren<IJumpingLettersTextProps>
) => {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <S.JumpContainer>
      {props.text
        .split('')
        .map((item) =>
          item === ' ' ? (
            <S.Space key={Math.random()} />
          ) : (
            <S.JumpLetter key={Math.random()}>{item}</S.JumpLetter>
          )
        )}
    </S.JumpContainer>
  );
};

export default JumpingLettersText;
