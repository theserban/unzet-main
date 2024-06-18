import { useEffect } from 'react';

const useIntersection = (element: React.RefObject<HTMLElement>, callback: () => void, options: IntersectionObserverInit) => {
  useEffect(() => {
    const target = element.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [element, callback, options]);
};

export default useIntersection;
