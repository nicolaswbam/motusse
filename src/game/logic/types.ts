import { Tuple } from "../../types";
import { MAX_ATTEMPTS } from "./constants";

export type GridLines = Tuple<string, typeof MAX_ATTEMPTS>;

export interface State {
  wordOfTheDay: string;
  currentAttemptNumber: number;
  grid: GridLines;
  validation: GridLines;
  validationError?: string;
  win: boolean;
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

interface EraseErrorAction {
  type: "eraseError";
}

interface ResetAction {
  type: "reset";
}

export type Action =
  | AppendLetterAction
  | RemoveLetterAction
  | ValidateWordAction
  | EraseErrorAction
  | ResetAction;
