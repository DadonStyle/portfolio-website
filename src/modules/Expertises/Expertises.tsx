import FLipCardContainer from '../../components/FlipCard/FLipCardContainer';
import Glitch from '../../components/Glitch/Glitch';
import { imgArr } from './helper';
import S from './styled';

const Expertises = () => (
  <>
    <S.HeaderWrapper>
      <Glitch text={'Expertises'} />
    </S.HeaderWrapper>
    <S.BodyWrapper>
      <FLipCardContainer imgArr={imgArr} />
    </S.BodyWrapper>
  </>
);

export default Expertises;
