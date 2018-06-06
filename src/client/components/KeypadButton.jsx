import React, { Component } from 'react';

class KeypadButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { input, text, onClick } = this.props;
    
    return <div onClick={ () => onClick(input) } className="w-16 h-16 shadow flex justify-center items-center cursor-pointer hover:bg-grey-lighter">
      <p className="uppercase tracking-wide cursor-pointer">
        {text}
      </p>
    </div>;
  }
}

export default KeypadButton;