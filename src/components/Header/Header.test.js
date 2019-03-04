import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr } from '../../utils/testUtils';
import Header from './Header';

describe('Header ', () => {
  let defaultProps;
  let setup;

  beforeEach(() => {
    defaultProps = { };

    setup = (props = defaultProps) => {
      const wrapper = shallow(<Header { ...props } />);

      return wrapper;
    };
  });

  test('should render header', () => {
    const wrapper = setup();
    const header = findByAttr(wrapper, 'header');
    expect(header)
      .toBeTruthy();
  });

  test('should navigate on click on Link', () => {
    const wrapper = setup();
    const link = findByAttr(wrapper, 'GuessWord');
    link.simulate('click');
    // expect(location.pathname)
    //    .toEqual(GuessWord.path);
  });
});
