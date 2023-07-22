import S from './styled';
import { svgs, randomId } from './helper';
import FloatComponent from './FloatComponent';

const Background = () => {
  return (
    <>
      <S.BackgroundImg />
      <S.FloatContainer>
        {[...Array(56).keys()].map((item) => (
          <FloatComponent
            key={Math.random()}
            svg={svgs[item] ? svgs[item] : svgs[randomId(svgs?.length)]}
          />
        ))}
      </S.FloatContainer>
    </>
  );
};

export default Background;
