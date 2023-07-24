import { ReactElement, ReactNode, cloneElement, useRef } from 'react';
import S from './styled';
import useObserver from '../../hooks/useObserver';

type TProps = {
  children: ReactElement;
};

const Section = (props: TProps) => {
  const myRef = useRef<HTMLElement>(null);
  const isVisible = useObserver(myRef);

  const newChild = cloneElement(props.children, { isVisible }); // pass props to dynamic children

  return (
    <S.Section isVisible={isVisible} ref={myRef}>
      {newChild}
    </S.Section>
  );
};

export default Section;
