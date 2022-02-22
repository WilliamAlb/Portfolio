import { config, useSpring } from "@react-spring/three";
import { Html } from "@react-three/drei";
import { animated } from "@react-spring/web";

export default function SplashText() {
  const fadeIn = useSpring({
    to: async (next) => {
      await next({ opacity: 1, top: 0 });
    },
    from: {
      opacity: 0,
      top: -50,
    },
    delay: 3000,
    config: config.slow,
  });
  const fadeInSecond = useSpring({
    to: async (next) => {
      await next({ opacity: 1, top: 0 });
    },

    from: {
      opacity: 0,
      top: -100,
    },
    delay: 4000,
    config: config.slow,
  });
  const fadeInThird = useSpring({
    to: async (next) => {
      await next({ opacity: 1, top: 0 });
    },

    from: {
      opacity: 0,
      top: -100,
    },
    delay: 5500,
    config: config.slow,
  });
  return (
    <Html position={[2, 1.5, 0]}>
      <animated.h2 style={fadeIn}>Hi</animated.h2>
      <animated.h2 style={fadeInSecond}>I'm William</animated.h2>
      <animated.h2 style={fadeInThird}>Here's my stack</animated.h2>
    </Html>
  );
}
