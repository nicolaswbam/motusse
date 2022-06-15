import React, { useReducer, useState } from 'react';
import { Text } from 'react-native';
import { Popup } from './components/Popup';
import { Box } from '../theme/components';
import { Keyboard } from './components/Keyboard';
import { WordLine } from './components/WordLine';
import { useGameLogic } from './logic/useGameLogic';
import { WinModal } from './components/WinModal';
import { LoseScreen } from './components/LoseScreen';

export function Game() {
  const wordOfTheDay = 'bonjour';

  const {
    state: gameState,
    appendLetter,
    removeLetter,
    validate,
    hideError,
    reset,
  } = useGameLogic(wordOfTheDay);

  const { grid, validation, validationError } = gameState;

  if (gameState.currentAttemptNumber > 5) return <LoseScreen answer={wordOfTheDay} onClose={reset} />;

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
      <Text>{JSON.stringify(gameState)}</Text>
      <Keyboard
        onKeyPress={appendLetter}
        onEnterPress={() => {
          if (!validationError) validate();
        }}
        onDelPress={removeLetter}
      />
      {gameState.win && <WinModal onClose={reset} />}
      {validationError && (
        <Popup
          text={'Le mot proposé\nest trop petit'}
          timeout={2000}
          onClose={hideError}
        />
      )}
    </Box>
  );
}
