import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Box, Text } from '../../theme/components';

const ANIM_DURATION = 200;

const animateTo = (
  node: Animated.Value,
  toValue: number,
  onEnd?: () => void,
) => {
  Animated.timing(node, {
    useNativeDriver: true,
    toValue,
    duration: ANIM_DURATION,
  }).start(onEnd);
};

interface Props {
  text: string;
  onClose: () => void;
  timeout?: number;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

export function Popup({ text, timeout, onClose }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateTo(opacity, 1);
    const timeId = setTimeout(() => {
      animateTo(opacity, 0, onClose);
    }, timeout);
    return () => clearTimeout(timeId);
  }, []);

  return (
    <AnimatedBox
      position="absolute"
      top={0}
      right={0}
      bottom={0}
      left={0}
      justifyContent="center"
      alignItems="center"
      pointerEvents="none"
      opacity={opacity}
    >
      <Box
        backgroundColor="background.overlay"
        padding="xxxl"
        borderRadius={16}
      >
        <Text color="letter" fontWeight="700" textAlign="center" fontSize={20}>
          {text}
        </Text>
      </Box>
    </AnimatedBox>
  );
}
