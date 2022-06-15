import { Reducer, useReducer } from 'react';
import { MAX_ATTEMPTS } from './constants';
import { reducer } from './reducer';
import { Action, GridLines, State } from './types';

export const getInitialState = (wordOfTheDay: string): State => {
  const defaultWord = '.'.repeat(wordOfTheDay.length);
  const defaultValidation = 'x'.repeat(wordOfTheDay.length);

  return {
    wordOfTheDay,
    currentAttemptNumber: 0,
    grid: Array.from({ length: MAX_ATTEMPTS }, (_, i) => (i === 0 ? wordOfTheDay[0].padEnd(wordOfTheDay.length, '.') : defaultWord)) as GridLines,
    validation: Array.from(
      { length: MAX_ATTEMPTS },
      (_) => defaultValidation,
    ) as GridLines,
    win: false,
  };
};

export const useGameLogic = (wordOfTheDay: string) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    getInitialState(wordOfTheDay),
  );

  const appendLetter = (key: string) => {
    dispatch({ type: 'append', payload: key });
  };

  const removeLetter = () => {
    dispatch({ type: 'remove' });
  };

  const validate = () => {
    dispatch({ type: 'validate' });
  };

  const hideError = () => {
    dispatch({ type: 'eraseError' });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return {
    state, appendLetter, removeLetter, validate, hideError, reset,
  };
};
