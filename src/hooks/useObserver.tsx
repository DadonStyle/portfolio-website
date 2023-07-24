import { RefObject, useState, useEffect } from 'react';

const useObserver = (props: RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // CHANGE ANY TYPE
    let observer;
    if (!observer && props.current) {
      observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // use isIntersecting and not isVisible because some comps might be hidden
      });
    }
    if (props?.current) {
      observer?.observe(props.current!); // ! tells TS not to worry about null;
    }
  }, []);

  return isVisible;
};

export default useObserver;
