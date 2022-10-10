import { Reducer, useReducer } from 'react';
import { MAX_ATTEMPTS } from './constants';
import { getInitialState, reducer } from './reducer';
import { Action, GridLines, State } from './types';

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
