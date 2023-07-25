import S from './styled';
import Glitch from '../../components/Glitch/Glitch';

type TProps = {
  isVisible?: boolean;
};

const FirstPage = (props: TProps) => (
  <S.Wrapper isVisible={props.isVisible!}>
    <S.GlitchWrapper isGap={true}>
      {'Hey, I am Noam'.split(' ').map((item) => (
        <Glitch
          key={Math.random()}
          text={item}
          isRandomFont={true}
          isRandomRotateZ={true}
          isNoam={item === 'Noam'}
        />
      ))}
    </S.GlitchWrapper>
    <S.GlitchWrapper>
      {'Frontend Developer'.split(' ').map((item) => (
        <Glitch
          key={Math.random()}
          text={item}
          isRandomFont={true}
          isRandomRotateZ={true}
        />
      ))}
    </S.GlitchWrapper>
    <br />
    <br />
    <br />
    <br />
    <br />
    <S.TextWrapper>And welcome to my:</S.TextWrapper>
    <S.GlitchWrapper isGap={true}>
      {'Interactive Website'.split(' ').map((item) => (
        <Glitch
          key={Math.random()}
          text={item}
          isRandomFont={false}
          isRandomRotateZ={true}
          isNoam={item === 'Noam'}
        />
      ))}
    </S.GlitchWrapper>
  </S.Wrapper>
);
export default FirstPage;
