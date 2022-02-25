import React, { useState } from "react";
import { Box, Text } from "../theme/components";
import { Tuple } from "../types";
import { LetterBox } from "./components/LetterBox";

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
      <Box borderColor="border" borderWidth={1}>
        {attempts.map((word, attemptNumber) => (
          <Box
            key={`attempt_${attemptNumber}`}
            flexDirection="row"
            borderColor="border"
          >
            {word.split("").map((letter, index) => (
              <LetterBox
                letter={letter}
                key={`attempt_${attemptNumber}_letter_${index}`}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
