import React, { useState } from "react";
import { Box, Text } from "../theme/components";
import { Tuple } from "../types";

const MAX_ATTEMPTS = 6;

export const Game = () => {
  const wordOfTheDay = "motusse";
  const wordLength = wordOfTheDay.length;

  const defaultWord = ".".repeat(wordLength);

  const [attempts] = useState<Tuple<string, typeof MAX_ATTEMPTS>>([
    defaultWord,
    defaultWord,
    defaultWord,
    defaultWord,
    defaultWord,
    defaultWord,
  ]);

  return (
    <Box
      flex={1}
      backgroundColor="background.default"
      justifyContent="center"
      alignItems="center"
    >
      <Box borderColor="border" borderWidth={2}>
        {attempts.map((word, attemptNumber) => (
          <Box key={`attempt_${attemptNumber}`} flexDirection="row">
            {word.split("").map((letter, index) => (
              <Box
                key={`attempt_${attemptNumber}_letter_${index}`}
                width={40}
                height={40}
                backgroundColor="background.unused"
                alignItems="center"
                justifyContent="center"
                borderTopWidth={attemptNumber === 0 ? 0 : 1}
                borderBottomWidth={
                  attemptNumber === attempts.length - 1 ? 0 : 1
                }
                borderLeftWidth={index === 0 ? 0 : 1}
                borderRightWidth={index === word.length - 1 ? 0 : 1}
                borderColor="border"
              >
                <Text color="letter" fontFamily="Mytupi">
                  {letter}
                </Text>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
