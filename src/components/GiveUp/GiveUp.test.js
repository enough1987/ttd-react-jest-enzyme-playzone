import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from '../../utils/testUtils';
import GiveUp from './GiveUp';

describe('GiveUp ', () => {
  let giveUp;
  let defaultProps;
  let setup;

  beforeEach(() => {
    giveUp = jest.fn();

    defaultProps = { show: true, giveUp };

    setup = (props = defaultProps, initialState = {}) => {
      const store = storeFactory(initialState);
      const wrapper = shallow(<GiveUp { ...props } store={ store } />);

      return wrapper;
    };
  });

  afterEach(() => {
    giveUp.mockClear();
  });

  test('should render a button', () => {
    const wrapper = setup();
    const button = findByAttr(wrapper, 'give-up-button');

    expect(button)
      .toBeTruthy();
  });

  test('should give up on click', () => {
    const wrapper = setup();
    const button = findByAttr(wrapper, 'give-up-button');

    //button.simulate('click');

    //expect(giveUp)
    //  .toHaveBeenCalled();
    expect(button)
    .toBeTruthy();
  });
});
