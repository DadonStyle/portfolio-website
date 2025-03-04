import { useEffect } from "react";

const useInitializeConsole = () => {
  useEffect(() => {
    console.log(
      "%c,-.___,-.\r \n\\_/_ _\\_/\r\n  )O_O(\r\n { (_) }\r\n  `-^-'",
      "color:brown; font-size: x-large;"
    );
    console.log("%c Hey, Meet my dog Juno", "color:brown; font-size: medium;");
    console.log(
      "%c Have you tried dragging the tetris pieces ?",
      "color:green; font-size: medium;"
    );
    console.log(
      "%c github: https://github.com/DadonStyle/portfolio-website/tree/master",
      "color:brown; font-size: medium;"
    );
  }, []);
};

export default useInitializeConsole;
