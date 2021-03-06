import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from '../../utils/testUtils';
import { GuessWord } from './GuessWord';

describe('GuessWord ', () => {
  let defaultProps;
  let setup;

  beforeEach(() => {
    defaultProps = {
      isCorrectGuess: false,
      correctGuess: 'truly',
      guesses: [],
      giveUp: false
    };

    setup = (props = defaultProps, initialState = {}) => {
      const store = storeFactory(initialState);
      const wrapper = shallow(<GuessWord { ...props } store={ store } />);

      return wrapper;
    };
  });

  afterEach(() => {
  });

  test('should render guess-word component', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'guess-word');
    expect(component)
      .toBeTruthy();
  });
});
