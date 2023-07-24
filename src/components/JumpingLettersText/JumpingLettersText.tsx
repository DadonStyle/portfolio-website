import { PropsWithChildren } from 'react';
import S from './styled';

export interface IJumpingLettersTextProps {
  text: string;
}

const JumpingLettersText = (
  props: PropsWithChildren<IJumpingLettersTextProps>
) => {
  return (
    <S.JumpRowContainer>
      {props.text.split(' ').map((item) => (
        <S.JumpWord key={Math.random()}>{item}</S.JumpWord>
      ))}
    </S.JumpRowContainer>
  );
};

export default JumpingLettersText;
