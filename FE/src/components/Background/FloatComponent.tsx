import { useState, PropsWithChildren, ReactNode } from 'react';
import S from './styled';
import { generateFloat } from './helper';

interface IFloatComponent {
  svg: ReactNode;
}

const FloatComponent = (props: PropsWithChildren<IFloatComponent>) => {
  const [xPosition, setXposition] = useState<number>(
    Math.floor(Math.random() * 100)
  );
  const [yPosition, setYposition] = useState<number>(
    Math.floor(Math.random() * 100)
  );

  // window.addEventListener('mousemove', (event) => {
  //   mousePos = { x: event.clientX, y: event.clientY };
  // });

  // put the correct event here !
  const handleOnDrag = (e: any) => {
    e.preventDefault();
    setXposition(e.clientX);
    setYposition(e.clientY);
  }; // not working atm need fix!

  return (
    <S.AnimationWrapper
      key={Math.random()}
      floatAnimation={generateFloat(yPosition, xPosition)}
      onDragOver={handleOnDrag}
    >
      {props.svg}
    </S.AnimationWrapper>
  );
};

export default FloatComponent;
