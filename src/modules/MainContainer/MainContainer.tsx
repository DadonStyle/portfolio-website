import { useState } from 'react';
import S from './styled';
import Section from '../../components/Section/Section';
import { componentsArr, IComponentsObj } from './helper';
import NavMenu from '../../components/NavMenu/NavMenu';
import { IBackground } from '../../App';

const MainContainer = ({ backgroundRef }: IBackground) => {
  const [scrollIndex, setScrollIndex] = useState<number | undefined>(undefined);

  return (
    <S.MainContainer>
      <NavMenu
        backgroundRef={backgroundRef}
        setScrollIndex={setScrollIndex}
        scrollIndex={scrollIndex}
      />

      <S.Header>
        <div>Logo</div>
      </S.Header>

      {componentsArr.map((item: IComponentsObj, index) => (
        <Section
          setScrollIndex={setScrollIndex}
          scrollIndex={scrollIndex}
          key={item.name}
          scrollId={index}
        >
          {item.comp}
        </Section>
      ))}

      <S.Footer>Footer</S.Footer>
    </S.MainContainer>
  );
};

export default MainContainer;
