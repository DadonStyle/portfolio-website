import S from './styled';
import JumpingLettersText from '../../components/JumpingLettersText/JumpingLettersText';

const JumpingContainer = () => (
  <S.ParagraphContainer>
    <p>
      <JumpingLettersText text='Since a very young age, I loved computers, ' />
      <JumpingLettersText text='spending hours exploring and understanding how the components interact with each other. ' />
      <JumpingLettersText text='I loved buying new parts and building the computer myself, ' />
      <JumpingLettersText text='and I optimized every little thing I could in the system ' />
      <JumpingLettersText text='to gain that little edge over other players. ' />
    </p>
    <p>
      <JumpingLettersText text='In 2020, I decided to try my hand at learning C++ and tumbled ' />
      <JumpingLettersText text='headfirst into the rabbit hole of coding and web development. ' />
      <JumpingLettersText text='I learned for seven months in a full-stack course, which covered Java, JavaScript, and TypeScript, ' />
      <JumpingLettersText text='which was just the tip of the iceberg. ' />
    </p>
    <p>
      <JumpingLettersText text='Fast-forward to today, ' />
      <JumpingLettersText text="I've developed, maintained, and scaled web-based SaaS applications in ReactJS and TypeScript " />
      <JumpingLettersText text='for a web3 company from the first month onward. ' />
      <JumpingLettersText text='I worked in a team, agile environment, and learned a lot. ' />
      <JumpingLettersText text='My professional dream is to lead projects.' />
    </p>
    <p>
      <JumpingLettersText text="When I'm not at the computer, " />
      <JumpingLettersText text="I'm usually recharging my social battery, playing ping-pong, " />
      <JumpingLettersText text='gaming, or spending time with my loved ones. ' />
    </p>
  </S.ParagraphContainer>
);

export default JumpingContainer;
