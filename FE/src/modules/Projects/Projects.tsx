import { textsImgsArr } from './helper';
import Glitch from '../../components/Glitch/Glitch';
import ImageCard from '../../components/ImageCard/ImageCard';
import S from './styled';

const Projects = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Glitch active={false} hover={true} text={'Projects'} />
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <ImageCard textsImgsArr={textsImgsArr} />
      </S.BodyWrapper>
    </>
  );
};

export default Projects;
