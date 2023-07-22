import S from './styled';
import { svgs, randomId } from './helper';
import FloatComponent from './FloatComponent';
import { useRef } from 'react';

const Background = () => {
  const backgroundRef = useRef<any>(); // for the total width & total height of the page

  return (
    <>
      <S.BackgroundImg id="backIMG" ref={backgroundRef} />
      <S.FloatContainer>
        {[...Array(56).keys()].map((item) => (
          <FloatComponent
            key={Math.random()}
            backgroundRef={backgroundRef}
            svg={svgs[item] ? svgs[item] : svgs[randomId(svgs?.length)]}
          />
        ))}
      </S.FloatContainer>
    </>
  );
};

export default Background;
