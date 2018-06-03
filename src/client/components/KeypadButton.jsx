import React, { Component } from 'react';

class KeypadButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { input, text, onClick } = this.props;
    
    return <div onClick={ () => onClick(input) }>
      <p>{input}</p>
      <p>{text}</p>
    </div>;
  }
}

export default KeypadButton;