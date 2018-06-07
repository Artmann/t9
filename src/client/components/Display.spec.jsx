import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('Display', () => {
  it('it displays input and suggestion', () => {
    const suggestions = {
      suggestions: ['a', 'b', 'c'],
      suggestionIndex: 1
    };
    const input = [2];

    const display = shallow(<Display suggestions={suggestions} input={input} />);

    expect(display.text()).toEqual('2b');
  });
})