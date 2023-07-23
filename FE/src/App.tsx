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
      {console.log(
        "%c,-.___,-.\r \n\\_/_ _\\_/\r\n  )O_O(\r\n { (_) }\r\n  `-^-'",
        'color:brown; font-size: x-large;'
      )}
      {console.log(
        '%c Hey!, Meet my dog Juno',
        'color:brown; font-size: medium;'
      )}
      {console.log(
        '%c Welcome and thank you for looking at my web!',
        'color:brown; font-size: medium;'
      )}

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
