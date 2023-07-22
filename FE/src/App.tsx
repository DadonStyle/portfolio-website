import S from './styled';
// import useAnimatedCursor from './hooks/useAnimatedCursor';
import Background from './components/Background/Background';
import FirstPage from './modules/FirstPage/FirstPage';
import Projects from './modules/Projects/Projects';
import Experties from './modules/Experties/Experties';
import ContactMe from './modules/ContactMe/ContactMe';
import useMousePosition from './hooks/useMousePosition';

const App = () => {
  const cursor = useMousePosition();
  return (
    <>
      <S.MainContainer>
        {cursor}
        <Background />
        <S.Header>
          <div>Logo</div>
          <div>menu</div>
        </S.Header>
        <S.Section>
          <FirstPage />
        </S.Section>
        <S.Section>
          <Projects />
        </S.Section>
        <S.Section>
          <Experties />
        </S.Section>
        <S.Section>
          <ContactMe />
        </S.Section>
        <S.Footer>Footer</S.Footer>
      </S.MainContainer>
    </>
  );
};

export default App;
