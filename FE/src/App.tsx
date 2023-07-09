import Glitch from './components/glitch/Glitch';
import Details from './components/details/Details';
import S from './styled';
import NavBar from './components/navBar/NavBar';

const App = () => {
  return (
    <S.MainContainer>
      <S.ScrollBg />
      <S.Header>
        <div>Logo</div>
        <NavBar links="string" />
        <div>menu</div>
      </S.Header>
      <S.Section>
        <S.SectionHeaderWrapper>
          <S.GlitchWrapper>
            {'Hey, I am Noam'.split(' ').map((item) => (
              <Glitch active={false} hover={true} text={item} />
            ))}
          </S.GlitchWrapper>
          <S.GlitchWrapper>
            {'Frontend Developer'.split(' ').map((item) => (
              <Glitch active={false} hover={true} text={item} />
            ))}
          </S.GlitchWrapper>
        </S.SectionHeaderWrapper>
        <S.SectionBody>SOME TEXT LAUREM</S.SectionBody>
      </S.Section>
      <S.Section>
        <S.SectionHeaderWrapper>
          <Glitch active={false} hover={true} text={'Hey, I am Noam'} />
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
