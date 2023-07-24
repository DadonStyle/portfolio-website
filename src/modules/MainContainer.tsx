import S from './styled';
import FirstPage from './FirstPage/FirstPage';
import Projects from './Projects/Projects';
import Expertises from './Expertises/Expertises';
import ContactMe from './ContactMe/ContactMe';
import Section from '../components/Section/Section';
import AboutMe from './AboutMe/AboutMe';
// import useObserver from '../hooks/useObserver';

const MainContainer = () => {
  return (
    <S.MainContainer>
      <S.Header>
        <div>Logo</div>
        <div>menu</div>
      </S.Header>
      <Section>
        <FirstPage />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Expertises />
      </Section>
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <ContactMe />
      </Section>
      <S.Footer>Footer</S.Footer>
    </S.MainContainer>
  );
};

export default MainContainer;
