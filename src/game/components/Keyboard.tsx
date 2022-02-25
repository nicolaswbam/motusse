import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text } from "../../theme/components";

const KEY_HEIGHT = 55;

const lines = [
  ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
  ["enter", "w", "x", "c", "v", "b", "n", "del"],
];

const getKeyWidthFactor = (key: string): number => {
  switch (key) {
    case "enter":
      return 2;
    case "del":
      return 2;
    default:
      return 1;
  }
};

export const Keyboard = () => {
  return (
    <SafeAreaView edges={["bottom"]}>
      <Box padding="s">
        {lines.map((line) => (
          <Box flexDirection="row" key={line.join("")}>
            {line.map((key) => (
              <Box
                key={key}
                width={`${getKeyWidthFactor(key) * 10}%`}
                height={KEY_HEIGHT}
                padding="xs"
              >
                <Box
                  borderRadius={4}
                  backgroundColor="background.keys"
                  flex={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text textTransform="uppercase" fontFamily="Mytupi">
                    {key}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </SafeAreaView>
  );
};
