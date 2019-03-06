import guesses from './guesses';
import { guessActionTypes } from '../actions/guesses';

describe('guesses ', () => {

  it('guesses return default state if there are no action', () => {
    const result = guesses({ test: 'test' }, { });

    expect(result)
      .toEqual({
        test: 'test'
      });
  });

  it('guesses return state if there are action type mutch', () => {
    const result = guesses({ test: 'test' }, { type: guessActionTypes.GET_CORRECT_GUESS, correctGuess: 'test' });
    expect(result)
      .toEqual({
        test: 'test',
        correctGuess: 'test'
      });
  });

});
