import React, { Component } from 'react';

import { connect } from 'react-redux'
import { addInput } from '../actions'
import KeypadButton from './KeypadButton.jsx';

class Keypad extends Component {
  constructor(props) {
    super(props);
  }
  
  handleClick(i) {
    const { dispatch, input } = this.props;
    
    dispatch(addInput(i));
  } 

  render() {
    const buttons = [
      { key: '1', text: '' },
      { key: '2', text: 'abc' },
      { key: '3', text: 'def' },
      { key: '4', text: 'ghi' },
      { key: '5', text: 'jkl' },
      { key: '6', text: 'mno' },
      { key: '7', text: 'pqrs' },
      { key: '8', text: 'tuv' },
      { key: '9', text: 'wxyz' },
      { key: '*', text: '' },
      { key: '0', text: '_' },
      { key: '#', text: '' },
    ];

    return <div className="w-48 flex flex-wrap">
      {
        buttons.map(button => 
          <KeypadButton 
            key={button.key}
            input={button.key}
            text={button.text}
            onClick={ this.handleClick.bind(this) } />
        )
      }
    </div>;
  }
}

export default connect()(Keypad);