import S from './styled';
import Glitch from '../../components/Glitch/Glitch';
import JumpingContainer from '../../components/JumpingLettersText/JumpingContainer';

const FirstPage = () => (
  <S.Wrapper>
    <S.GlitchWrapper>
      {'Hey, I am Noam'.split(' ').map((item) => (
        <Glitch key={Math.random()} active={false} hover={true} text={item} />
      ))}
    </S.GlitchWrapper>
    <S.GlitchWrapper>
      {'Frontend Developer'.split(' ').map((item) => (
        <Glitch key={Math.random()} active={false} hover={true} text={item} />
      ))}
    </S.GlitchWrapper>
    <JumpingContainer />
  </S.Wrapper>
);
export default FirstPage;
