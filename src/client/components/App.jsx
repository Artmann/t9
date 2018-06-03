import React, { Component } from 'react';
import { connect } from 'react-redux'

import Keypad from './Keypad.jsx';
import Display from './Display.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { input } = this.props;
    
    return <div>
      <Display />
      <Keypad input={input} />
    </div>;
  }
}

const mapStateToProps = state => {
  const  { input, suggestions } = state;

  return { input, suggestions };
};

export default connect(mapStateToProps)(App);