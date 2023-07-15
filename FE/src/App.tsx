import Glitch from './components/Glitch/Glitch';
import S from './styled';
import NavBar from './components/NavBar/NavBar';
import JumpingContainer from './components/JumpingLettersText/JumpingContainer';
import useAnimatedCursor from './hooks/useAnimatedCursor';
import Background from './components/Background/Background';
import ImageCard from './components/ImageCard/ImageCard';
import { textsImgsArr, imgArr } from './AppHelper';
import FLipCardContainer from './components/FlipCard/FLipCardContainer';

const App = () => {
  const cursor = useAnimatedCursor();
  // https://codepen.io/RSH87/pen/gMdJKQ source for background
  return (
    <>
      <S.MainContainer>
        {cursor}
        <Background />
        <S.Header>
          <div>Logo</div>
          <NavBar links="string" />
          <div>menu</div>
        </S.Header>

        <S.Section>
          <S.SectionBody>
            <S.GlitchWrapper>
              {'Hey, I am Noam'.split(' ').map((item) => (
                <Glitch
                  key={Math.random()}
                  active={false}
                  hover={true}
                  text={item}
                />
              ))}
            </S.GlitchWrapper>
            <S.GlitchWrapper>
              {'Frontend Developer'.split(' ').map((item) => (
                <Glitch
                  key={Math.random()}
                  active={false}
                  hover={true}
                  text={item}
                />
              ))}
            </S.GlitchWrapper>
            <JumpingContainer />
          </S.SectionBody>
        </S.Section>
        <S.Section>
          <Glitch active={false} hover={true} text={'Projects'} />
          <S.SectionBody>
            <ImageCard textsImgsArr={textsImgsArr} />
          </S.SectionBody>
        </S.Section>
        <S.Section>
          <Glitch active={false} hover={true} text={'Experties'} />
          <S.SectionBody>
            <FLipCardContainer imgArr={imgArr} />
          </S.SectionBody>
        </S.Section>
        <S.Footer>Footer</S.Footer>
      </S.MainContainer>
    </>
  );
};

export default App;
