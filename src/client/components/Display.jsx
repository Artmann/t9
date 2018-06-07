import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { input, suggestions } = this.props;
    const suggestion = suggestions.suggestions[suggestions.suggestionIndex];
    const displayInput = input.join('');

    return <div className="w-48 flex justify-between text-center text-sm mb-8">
      <div className="flex-1">{displayInput}</div>
      <div><i class="fas fa-arrow-circle-right"></i></div>
      <div className="flex-1">{suggestion}</div>
    </div>;
  }
}

export default Display;