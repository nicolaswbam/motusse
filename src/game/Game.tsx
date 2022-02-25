import React, { useReducer, useState } from "react";
import { Box } from "../theme/components";
import { Keyboard } from "./components/Keyboard";
import { WordLine } from "./components/WordLine";
import { useGameLogic } from "./logic/useGameLogic";

const MAX_ATTEMPTS = 6;

export const Game = () => {
  const wordOfTheDay = "motusse";

  const {
    state: gameState,
    appendLetter,
    removeLetter,
  } = useGameLogic(wordOfTheDay);

  const { grid, validation } = gameState;

  return (
    <Box flex={1} backgroundColor="background.default">
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box borderColor="border" borderWidth={1}>
          {grid.map((word, attemptNumber) => (
            <WordLine
              word={word}
              key={`attempt_${attemptNumber}`}
              validation={validation[attemptNumber]}
            />
          ))}
        </Box>
      </Box>
      <Keyboard
        onKeyPress={appendLetter}
        onEnterPress={() => {}}
        onDelPress={removeLetter}
      />
    </Box>
  );
};
