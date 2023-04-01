import { useState, useEffect } from 'react';

export const breakpoints = {
  mobile: 320,
  tablet: 600,
  desktopS: 900,
  desktop: 1200,
};

export const throttle = (func, ms) => {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper(...rest) {
    if (isThrottled) {
      savedArgs = rest;
      savedThis = this;
      return;
    }

    func.apply(this, rest);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
};

const DELAY = 50;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < breakpoints.tablet,
  );

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsMobile(window.innerWidth < breakpoints.tablet);
    }, DELAY);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > breakpoints.desktop,
  );

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsDesktop(window.innerWidth > breakpoints.desktop);
    }, DELAY);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
};

export const useIsDesctopS = () => {
  const [isDesktopS, setIsDesktopS] = useState(
    window.innerWidth < breakpoints.desktopS,
  );

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsDesktopS(window.innerWidth < breakpoints.desktopS);
    }, DELAY);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktopS;
};
