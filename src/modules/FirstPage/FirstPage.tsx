import S from './styled';
import Glitch from '../../components/Glitch/Glitch';

type TProps = {
  isVisible?: boolean;
};

const FirstPage = (props: TProps) => (
  <S.Wrapper isVisible={props.isVisible!}>
    <div>
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
    </div>

    <S.TextWrapper>Welcome to my Website!</S.TextWrapper>
  </S.Wrapper>
);
export default FirstPage;
