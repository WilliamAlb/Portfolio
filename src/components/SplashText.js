import { config, useSpring } from "@react-spring/three";
import { Html } from "@react-three/drei";
import { animated } from "@react-spring/web";
import { useThree } from "@react-three/fiber";

export default function SplashText() {
  const aspectRatio = useThree(state=>state.viewport.aspect);
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
    <Html position={[aspectRatio, 1.5, 0]}>
      <animated.h2 style={fadeIn}>Hi</animated.h2>
      <animated.h2 style={fadeInSecond}>I'm William</animated.h2>
      <br/>
      <animated.h3 style={fadeInThird}>Here's my stack</animated.h3>
    </Html>
  );
}
