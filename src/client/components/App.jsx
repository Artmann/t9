import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addInput, fetchSuggestions } from '../actions'
import Keypad from './Keypad.jsx';
import Display from './Display.jsx';
import arrayEqual from '../utils/ArrayEqual';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    const { dispatch, input } = this.props;

    if (!arrayEqual(prevProps.input, input) && input.length > 0) {
      dispatch(fetchSuggestions(input));
    }
  }

  render() {
    const { input } = this.props;
    
    return <div className="container mx-auto py-8 flex flex-col items-center">
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