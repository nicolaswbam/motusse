import React, { useReducer, useState } from "react";
import { Popup } from "./components/Popup";
import { Box } from "../theme/components";
import { Keyboard } from "./components/Keyboard";
import { WordLine } from "./components/WordLine";
import { useGameLogic } from "./logic/useGameLogic";

export const Game = () => {
  const wordOfTheDay = "motusse";

  const {
    state: gameState,
    appendLetter,
    removeLetter,
    validate,
    hideError,
  } = useGameLogic(wordOfTheDay);

  const { grid, validation, validationError } = gameState;

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
        onEnterPress={() => {
          if (!validationError) validate();
        }}
        onDelPress={removeLetter}
      />
      {validationError && (
        <Popup
          text={"Le mot proposé\nest trop petit"}
          timeout={2000}
          onClose={hideError}
        />
      )}
    </Box>
  );
};
