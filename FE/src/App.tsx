import Glitch from './components/glitch/Glitch';
import Details from './components/details/Details';
import S from './styled';
import NavBar from './components/navBar/NavBar';
import { ReactComponent as Float2 } from './assets/float2.svg';
import { ReactComponent as Float3 } from './assets/float8.svg';

import AnimatedCursor from 'react-animated-cursor';
import JumpingContainer from './components/jumpingLettersText/JumpingContainer';

const App = () => {
  // https://codepen.io/RSH87/pen/gMdJKQ source for background
  return (
    <S.MainContainer>
      <S.FloatContainer>
        <Float2 />
      </S.FloatContainer>
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="255,255,225"
        outerAlpha={0.2}
        innerScale={0}
        outerScale={5}
        clickables={['span']}
      />
      <S.Header>
        <div>Logo</div>
        <NavBar links="string" />
        <div>menu</div>
      </S.Header>

      <S.Section>
        <S.SectionHeaderWrapper>
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
        </S.SectionHeaderWrapper>
        <S.SectionBody>
          <JumpingContainer />
        </S.SectionBody>
      </S.Section>
      <S.Section>
        <S.SectionHeaderWrapper>
          <Glitch active={false} hover={true} text={'Experties'} />
        </S.SectionHeaderWrapper>
        <S.SectionBody>
          <Details />
        </S.SectionBody>
      </S.Section>
      <S.Section>
        <S.SectionHeaderWrapper>
          <Glitch active={false} hover={true} text={'Hey, I am Noam'} />
        </S.SectionHeaderWrapper>
        <S.SectionBody>
          <Details />
        </S.SectionBody>
      </S.Section>
      <S.Footer>Footer</S.Footer>
    </S.MainContainer>
  );
};

export default App;
