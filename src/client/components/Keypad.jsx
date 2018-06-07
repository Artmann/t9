import React, { Component } from 'react';

import { connect } from 'react-redux'
import { addInput, nextSuggestion } from '../actions'
import KeypadButton from './KeypadButton.jsx';

class Keypad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch } = this.props;

    const handleClick = (i) =>  {
      dispatch(addInput(i));
    };

    const buttons = [
      { key: '1', text: '' },
      { key: '2', text: 'abc', handler: handleClick },
      { key: '3', text: 'def', handler: handleClick },
      { key: '4', text: 'ghi', handler: handleClick },
      { key: '5', text: 'jkl', handler: handleClick },
      { key: '6', text: 'mno', handler: handleClick },
      { key: '7', text: 'pqrs', handler: handleClick },
      { key: '8', text: 'tuv', handler: handleClick },
      { key: '9', text: 'wxyz', handler: handleClick },
      { key: '*', text: 'Next', handler: () => dispatch(nextSuggestion()) },
      { key: '0', text: '', handler: () => {} },
      { key: '#', text: '', handler: () => {} },
    ];

    return <div className="w-48 flex flex-wrap">
      {
        buttons.map(button =>
          <KeypadButton
            key={button.key}
            input={button.key}
            text={button.text}
            onClick={ button.handler } />
        )
      }
    </div>;
  }
}

export default connect()(Keypad);