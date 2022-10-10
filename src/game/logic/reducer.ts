import { Reducer } from 'react';
import { createLetterMap } from '../../lib/utils';
import { MAX_ATTEMPTS } from './constants';
import { Action, GridLines, State } from './types';

export const getInitialState = (wordOfTheDay: string): State => {
  const defaultWord = '.';
  const defaultValidation = 'x'.repeat(wordOfTheDay.length);

  return {
    wordOfTheDay,
    currentAttemptNumber: 0,
    grid: Array.from({ length: MAX_ATTEMPTS }, (_, i) => (i === 0 ? wordOfTheDay[0] : defaultWord)) as GridLines,
    validation: Array.from(
      { length: MAX_ATTEMPTS },
      (_) => defaultValidation,
    ) as GridLines,
    win: false,
  };
};

const canAddLetterTo = (word: string, maxLength: number): boolean => word.length < maxLength

const addLetterTo = (word: string, letter: string, maxLength: number): string => word.concat(letter)

const removeLetterFrom = (word: string, maxLength: number): string => word.slice(0, -1)

const canRemoveLetterFrom = (word: string): boolean => word.length > 1;

const validateWord = (word: string, wordOfTheDay: string): string => {
  const letters = word.split('');
  const validations = Array.from({ length: wordOfTheDay.length }, (_) => 'x');
  const mapOfTheDay = createLetterMap(wordOfTheDay);

  const validateLetters = (
    criterion: (letter: string, letterToCompare: string) => boolean,
    char: string,
  ) => {
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      if (criterion(letter, wordOfTheDay[i])) {
        const occurrences = mapOfTheDay.get(letter);
        if (!occurrences) continue; // unlikely
        validations[i] = char;
        if (occurrences == 1) {
          mapOfTheDay.delete(letter);
        } else mapOfTheDay.set(letter, occurrences - 1);
      }
    }
  };

  // correct letters in the correct place
  validateLetters((letter, letterToCompare) => letter === letterToCompare, 'o');

  // correct letters in the incorrect place
  validateLetters((letter) => wordOfTheDay.includes(letter), '-');
  console.log('val', validations);
  return validations.join('');
};

export const reducer: Reducer<State, Action> = (state, action) => {
  const {
    grid, currentAttemptNumber, wordOfTheDay, validation,
  } = state;
  const currentAttempt = grid[currentAttemptNumber];

  const newGrid: GridLines = [...grid];

  switch (action.type) {
    case 'append':
      if (!canAddLetterTo(currentAttempt, wordOfTheDay.length)) return state;
      newGrid[currentAttemptNumber] = addLetterTo(
        currentAttempt,
        action.payload,
        wordOfTheDay.length,
      );
      return {
        ...state,
        grid: newGrid,
        validationError: undefined,
      };
    case 'remove':
      if (!canRemoveLetterFrom(currentAttempt)) return state;
      newGrid[currentAttemptNumber] = removeLetterFrom(
        currentAttempt,
        wordOfTheDay.length,
      );
      return {
        ...state,
        grid: newGrid,
        validationError: undefined,
      };
    case 'validate':
      if (canAddLetterTo(currentAttempt, wordOfTheDay.length)) {
        return {
          ...state,
          validationError: 'too_small',
        };
      }
      const newValidation: GridLines = [...validation];
      const validatedWord = validateWord(currentAttempt, wordOfTheDay);
      console.log('validatedWord', validatedWord);
      newValidation[currentAttemptNumber] = validatedWord;

      if (currentAttemptNumber < MAX_ATTEMPTS) {
        newGrid[currentAttemptNumber + 1] = wordOfTheDay[0];
      }

      return {
        ...state,
        currentAttemptNumber: Math.min(currentAttemptNumber + 1, MAX_ATTEMPTS),
        grid: newGrid,
        validation: newValidation,
        validationError: undefined,
        win: validatedWord === 'o'.repeat(wordOfTheDay.length),
      };
    case 'eraseError':
      return {
        ...state,
        validationError: undefined,
      };
    case 'reset':
      return getInitialState(wordOfTheDay);
    default:
      return state;
  }
};
