import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import KeypadButton from './KeypadButton';

describe('KeypadButton', () => {
  it('calls handler on click', () => {
    let called = false;
    let handler = () => {
      called = true;
    };

    const component = renderer.create(
      <KeypadButton input={2} onClick={handler} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onClick();

    expect(called).toBeTruthy();
  });

  it('renders text', () => {
    const button = shallow(<KeypadButton text={'foo'} />);

    expect(button.text()).toEqual('foo');
  });
})