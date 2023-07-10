import Glitch from './components/glitch/Glitch';
import Details from './components/details/Details';
import S from './styled';
import NavBar from './components/navBar/NavBar';

const App = () => 
{
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
        <S.SectionBody>
          <p>
          Since a very young age I <strong>loved computers</strong>, <br />
          spent hours in front of the screen, wanted to know how everything works and of course video games, <br />
          loved to buy new parts and build the computer myself, Optimized every little thing I could in the system to get that little edge over other players,
          </p>
          <p>
          In late 2020, I decided to try my hand in learning C++ and tumbled head first into the rabbit hole of coding and web development,
          Learned for 7 month in a full-stack course, Java and Js, which was just the tip of the iceberg.
          Fast-forward to today, and I’ve had the privilege of building and maintaining Web3 web application for a crypto company, work in a team, and learn <strong>A LOT</strong>.
          </p>
          <p>
          My main focus these days is finding a new place to grow with, build awesome products & hopefully leading projects. 
          In my free time, I like to do fun side projects,
          When I’m not at the computer, I’m usually charging up my social battery, playing Ping Pong or spending time with my loved ones.
          </p>

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
