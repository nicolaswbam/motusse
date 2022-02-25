import React from "react";
import { TouchableOpacity } from "react-native";
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

interface Props {
  onKeyPress: (key: string) => void;
  onEnterPress: () => void;
  onDelPress: () => void;
}

export const Keyboard = ({ onKeyPress, onEnterPress, onDelPress }: Props) => {
  const pressKey = (key: string) => {
    switch (key) {
      case "enter":
        onEnterPress();
        return;
      case "del":
        onDelPress();
        return;
      default:
        onKeyPress(key);
        return;
    }
  };

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
                <TouchableOpacity
                  onPress={() => pressKey(key)}
                  activeOpacity={0.7}
                >
                  <Box
                    borderRadius={4}
                    backgroundColor="background.keys"
                    height="100%"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text textTransform="uppercase" fontFamily="Mytupi">
                      {key}
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </SafeAreaView>
  );
};
