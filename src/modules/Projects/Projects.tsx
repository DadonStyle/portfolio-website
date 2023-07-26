import { textsImgsArr } from './helper';
import Glitch from '../../components/Glitch/Glitch';
import ImageCard from '../../components/ImageCard/ImageCard';
import S from './styled';

const Projects = () => (
  <>
    <S.HeaderWrapper>
      <Glitch text={'Projects Highlights'} />
    </S.HeaderWrapper>
    <S.BodyWrapper>
      <ImageCard textsImgsArr={textsImgsArr} />
    </S.BodyWrapper>
  </>
);
export default Projects;
