import { useEffect, useState } from 'react';

interface IMousePos {
  x: number;
  y: number;
}

const useMousePosition = () => {
  const [mousePos, setMousePos] = useState<IMousePos>({ x: 0, y: 0 });

  const handleMoveMouse = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMoveMouse);
    return () => window.removeEventListener('mousemove', handleMoveMouse);
  }, []);

  return mousePos;
};

export default useMousePosition;
