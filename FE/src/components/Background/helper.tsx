import { ReactComponent as Float1 } from '../../assets/svg/float1.svg';
import { ReactComponent as Float2 } from '../../assets/svg/float2.svg';
import { ReactComponent as Float3 } from '../../assets/svg/float3.svg';
import { ReactComponent as Float4 } from '../../assets/svg/float4.svg';
import { ReactComponent as Float5 } from '../../assets/svg/float5.svg';
import { ReactComponent as Float6 } from '../../assets/svg/float6.svg';
import { ReactComponent as Float7 } from '../../assets/svg/float7.svg';
import { keyframes } from 'styled-components';

export const generateFloat = () => {
  const float = keyframes`
  0% {
    top: ${Math.floor(Math.random() * 100) + '%'};
    rotate: ${20 + Math.floor(Math.random() * 1000) + 'deg'}; 
    right: ${Math.floor(Math.random() * 100) + '%'};
    opacity: ${0};
    transform: scale(${Math.floor(Math.random() * 3)});
  }
  25% {
    rotate: ${20 + Math.floor(Math.random() * 1000) + 'deg'};
    right: ${Math.floor(Math.random() * 100) + '%'};
    opacity: ${Math.random()};
    transform: scale(${Math.floor(Math.random() * 3)});
  }
  50% {
    top: ${Math.floor(Math.random() * 100) + '%'};
    rotate: ${20 + Math.floor(Math.random() * 1000) + 'deg'}; 
    right: ${Math.floor(Math.random() * 100) + '%'};
    opacity: ${Math.random()};
    transform: scale(${Math.floor(Math.random() * 3)});
  }
  75% {
    top: ${Math.floor(Math.random() * 100) + '%'};
    rotate: ${20 + Math.floor(Math.random() * 1000) + 'deg'};    
    opacity: ${Math.random()};
    transform: scale(${Math.floor(Math.random() * 3)});
  }
  100% {
    top: ${Math.floor(Math.random() * 100) + '%'};
    rotate: ${20 + Math.floor(Math.random() * 1000) + 'deg'}; 
    right: ${10 + Math.floor(Math.random() * 100) + '%'};
    opacity: 0;
    transform: scale(${Math.floor(Math.random() * 3)});
  }
`;
  return float;
};

export const svgs = [
  <Float1 />,
  <Float2 />,
  <Float3 />,
  <Float4 />,
  <Float5 />,
  <Float6 />,
  <Float7 />,
];
