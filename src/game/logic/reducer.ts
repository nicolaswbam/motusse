import { Reducer, useReducer } from "react";
import { Tuple } from "../../types";

const MAX_ATTEMPTS = 6;
type GridLines = Tuple<string, typeof MAX_ATTEMPTS>;

interface State {
  wordOfTheDay: string;
  currentAttemptNumber: number;
  grid: GridLines;
  validation: GridLines;
  validationError?: string;
}

interface AppendLetterAction {
  type: "append";
  payload: string;
}

interface RemoveLetterAction {
  type: "remove";
}

interface ValidateWordAction {
  type: "validate";
}

type Action = AppendLetterAction | RemoveLetterAction | ValidateWordAction;

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

const reducer: Reducer<State, Action> = (state, action) => {
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

const getInitialState = (wordOfTheDay: string): State => {
  const defaultWord = ".".repeat(wordOfTheDay.length);
  const defaultValidation = "x".repeat(wordOfTheDay.length);

  return {
    wordOfTheDay,
    currentAttemptNumber: 0,
    grid: Array.from({ length: MAX_ATTEMPTS }, (_, i) =>
      i === 0 ? wordOfTheDay[0].padEnd(wordOfTheDay.length, ".") : defaultWord
    ) as GridLines,
    validation: Array.from(
      { length: MAX_ATTEMPTS },
      (_) => defaultValidation
    ) as GridLines,
  };
};

export const useGameLogic = (wordOfTheDay: string) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    getInitialState(wordOfTheDay)
  );

  const appendLetter = (key: string) => {
    dispatch({ type: "append", payload: key });
  };

  const removeLetter = () => {
    dispatch({ type: "remove" });
  };

  return { state, appendLetter, removeLetter };
};
