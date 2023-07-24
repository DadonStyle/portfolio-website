import { useState, ReactElement } from 'react';
import S from './styled';
import Section from '../../components/Section/Section';
import { componentsArr } from './helper';

const MainContainer = () => {
  const [scrollIndex, setScrollIndex] = useState<number | undefined>(undefined);

  return (
    <S.MainContainer>
      <S.Header>
        <div>Logo</div>
      </S.Header>
      {componentsArr.map((item: ReactElement, index) => {
        console.log(item.props.displayName); // in here ill save the index for the scroll component
        // need to find out how to get the name (or have any other id for the scroll component to know what index is releated to what component)
        // another idea, why does the name matter ? it should be fine by order alone, 0 is the first element
        return (
          <Section scrollIndex={scrollIndex} scrollId={index}>
            {item}
          </Section>
        );
      })}

      <S.Footer>Footer</S.Footer>
    </S.MainContainer>
  );
};

export default MainContainer;
