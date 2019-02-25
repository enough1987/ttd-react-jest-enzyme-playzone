import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr } from "./testUtils";
import { App } from './App';

let getGuesses;
let defaultProps;
let setup;

beforeEach(() => {
  getGuesses = jest.fn();
  defaultProps = { getGuesses };

  setup = (props = defaultProps, state = {}) => {
    const wrapper = shallow(<App {...props}/>);
    wrapper.setState(state);
    return wrapper;
  }
});

afterEach(() => {
  getGuesses.mockClear();
});

test('increment counter', () => {
  const wrapper = setup();
  const botton = findByAttr(wrapper, 'btn-increment');
  botton.simulate('click');

  expect( wrapper.state('counter') )
    .toEqual(1);
});

test('decrement counter', () => {
  const wrapper = setup(defaultProps, { counter: 10 });
  const botton = findByAttr(wrapper, 'btn-decrement');
  botton.simulate('click');
  botton.simulate('click');

  expect( wrapper.state('counter') )
    .toEqual(8);
});

test('counter should not be less than zero', () => {
  const wrapper = setup(defaultProps, { counter: 1 });
  //console.log( wrapper.html() );
  const botton = findByAttr(wrapper, 'btn-decrement');
  botton.simulate('click');
  botton.simulate('click');

  expect( wrapper.state('counter') )
    .toEqual(0);
});