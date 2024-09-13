import { useSpring } from '@react-spring/web';

const useSplashAnimation = () => {
  return useSpring({
    opacity: 0,
    from: { opacity: 1 },
    config: { duration: 3000 },
  });
};

export default useSplashAnimation;