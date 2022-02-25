import React, { useState } from "react";
import { Box } from "../theme/components";
import { Tuple } from "../types";
import { WordLine } from "./components/WordLine";

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
          <WordLine word={word} key={`attempt_${attemptNumber}`} />
        ))}
      </Box>
    </Box>
  );
};
