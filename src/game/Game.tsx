import React, { useState } from "react";
import { Box } from "../theme/components";
import { Tuple } from "../types";
import { Keyboard } from "./components/Keyboard";
import { WordLine } from "./components/WordLine";

const MAX_ATTEMPTS = 6;

export const Game = () => {
  const wordOfTheDay = "motusse";
  const wordLength = wordOfTheDay.length;

  const defaultWord = ".".repeat(wordLength);

  const attempts: Tuple<string, typeof MAX_ATTEMPTS> = [
    "maltais",
    "motards",
    "motocar",
    "motusse",
    defaultWord,
    defaultWord,
  ];

  const validations: Tuple<string, typeof MAX_ATTEMPTS> = [
    "oxx-xx-",
    "oooxxx-",
    "oooxxxx",
    "ooooooo",
    "xxxxxxx",
    "xxxxxxx",
  ];

  return (
    <Box flex={1} backgroundColor="background.default">
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box borderColor="border" borderWidth={1}>
          {attempts.map((word, attemptNumber) => (
            <WordLine
              word={word}
              key={`attempt_${attemptNumber}`}
              validation={validations[attemptNumber]}
            />
          ))}
        </Box>
      </Box>
      <Keyboard />
    </Box>
  );
};
