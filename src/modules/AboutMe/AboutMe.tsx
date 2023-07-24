import S from './styled';
import Glitch from '../../components/Glitch/Glitch';
import JumpingContainer from './JumpingContainer';

const AboutMe = () => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Glitch text={'About Me'} />
      </S.HeaderWrapper>
      <S.JumpingWrapper>
        <JumpingContainer />
      </S.JumpingWrapper>
    </S.Wrapper>
  );
};

export default AboutMe;
