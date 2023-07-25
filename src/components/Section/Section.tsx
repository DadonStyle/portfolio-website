import { ReactElement, cloneElement, useRef, useEffect } from 'react';
import S from './styled';
import useObserver from '../../hooks/useObserver';

type TProps = {
  children: ReactElement;
  scrollIndex: number | undefined;
  scrollId: number;
  setScrollIndex: (item: undefined) => void;
};

const Section = (props: TProps) => {
  const myRef = useRef<HTMLElement>(null);
  const isVisible = useObserver(myRef);

  useEffect(() => {
    if (props.scrollIndex === props.scrollId) {
      myRef.current?.scrollIntoView();
      props.setScrollIndex(undefined);
    }
  }, [props.scrollIndex]);

  const newChild = cloneElement(props.children, { isVisible }); // pass props to dynamic children

  return (
    <S.Section isVisible={isVisible} ref={myRef}>
      {newChild}
    </S.Section>
  );
};

export default Section;
