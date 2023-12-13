import { textsImgsArr } from './helper';
import Glitch from '../../components/Glitch/Glitch';
import ImageCard from '../../components/ImageCard/ImageCard';
import S from './styled';

const Projects = () => (
  <>
    <S.HeaderWrapper>
      <Glitch text={'Projects Highlights'} />
    </S.HeaderWrapper>
    <div>
      <h3>
        These are my personal projects. For work-related projects, please take a
        look at my CV. (bottom left)
      </h3>
    </div>
    <S.BodyWrapper>
      <ImageCard textsImgsArr={textsImgsArr} />
    </S.BodyWrapper>
  </>
);
export default Projects;
