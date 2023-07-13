import AnimatedCursor from 'react-animated-cursor';

const useAnimatedCursor = () => (
  <AnimatedCursor
    innerSize={15}
    outerSize={15}
    color="255,255,225"
    outerAlpha={0.2}
    innerScale={0}
    outerScale={5}
    clickables={['span']}
  />
);

export default useAnimatedCursor;
