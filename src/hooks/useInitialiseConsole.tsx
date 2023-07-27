import { useEffect } from 'react';

const useInitialiseConsole = () => {
  useEffect(() => {
    console.log(
      "%c,-.___,-.\r \n\\_/_ _\\_/\r\n  )O_O(\r\n { (_) }\r\n  `-^-'",
      'color:brown; font-size: x-large;'
    );
    console.log('%c Hey!, Meet my dog Juno', 'color:brown; font-size: medium;');
    console.log(
      '%c Welcome and thank you for exploring my portfolio!',
      'color:brown; font-size: medium;'
    );
    console.log(
      '%c Note: This website uses 0 dependencies (not including core), not releated on any extra lib',
      'color:green; font-size: medium;'
    );
    console.log(
      "%c If you are curious, here's the github link: https://github.com/DadonStyle/portfolio-website/tree/master",
      'color:brown; font-size: medium;'
    );
    console.log(
      '%c Mobile design view, dont forget to refresh :)',
      'color:green; font-size: medium;'
    );
  }, []);
};

export default useInitialiseConsole;
