import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component
// This should produce some HTML

const App = function() {
  return <div>Hi!</div>;
}

// Take this component's generated HTML
// Place the HTML on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));