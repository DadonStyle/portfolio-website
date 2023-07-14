import S from './styled';
import { svgs, generateFloat } from './helper';

const randomId = (max: number) => Math.floor(Math.random() * max);

const Background = () => (
  <>
    <S.BackgroundImg />
    <S.FloatContainer>
      {[...Array(14).keys()].map((item) => (
        <S.AnimationWrapper
          key={Math.random()}
          floatAnimation={generateFloat()}
        >
          {svgs[item] ? svgs[item] : svgs[randomId(svgs?.length)]}
        </S.AnimationWrapper>
      ))}
    </S.FloatContainer>
  </>
);

export default Background;
