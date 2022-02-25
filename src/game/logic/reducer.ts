import { Reducer } from "react";
import { Action, GridLines, State } from "./types";

const canAddLetterTo = (word: string, maxLength: number): boolean =>
  word.split("").filter((char) => char != ".").length < maxLength;

const addLetterTo = (word: string, letter: string, maxLength: number): string =>
  word
    .split("")
    .filter((char) => char != ".")
    .concat(letter)
    .join("")
    .padEnd(maxLength, ".");

const removeLetterFrom = (word: string, maxLength: number): string =>
  word
    .split("")
    .filter((char) => char != ".")
    .slice(0, -1)
    .join("")
    .padEnd(maxLength, ".");

const canRemoveLetterFrom = (word: string): boolean =>
  word.split("").filter((char) => char != ".").length > 1;

export const reducer: Reducer<State, Action> = (state, action) => {
  const { grid, currentAttemptNumber, wordOfTheDay } = state;
  const currentAttempt = grid[currentAttemptNumber];

  const newGrid: GridLines = [...grid];

  switch (action.type) {
    case "append":
      if (!canAddLetterTo(currentAttempt, wordOfTheDay.length)) return state;
      newGrid[currentAttemptNumber] = addLetterTo(
        currentAttempt,
        action.payload,
        wordOfTheDay.length
      );
      return {
        ...state,
        grid: newGrid,
        validationError: undefined,
      };
    case "remove":
      if (!canRemoveLetterFrom(currentAttempt)) return state;
      newGrid[currentAttemptNumber] = removeLetterFrom(
        currentAttempt,
        wordOfTheDay.length
      );
      return {
        ...state,
        grid: newGrid,
        validationError: undefined,
      };
    case "validate":
      if (canAddLetterTo(currentAttempt, wordOfTheDay.length))
        return {
          ...state,
          error: "too_small",
        };
      return state;
    default:
      return state;
  }
};
