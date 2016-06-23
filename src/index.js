import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = "AIzaSyBq4PPm9bjwN203ZZcEE7CqseK8PuRad6U";

const hostNode = document.querySelector('.container');
// Create a new component
// This should produce some HTML

const App = () => {
  return <div>Hi!</div>;
}


// Take this component's generated HTML
// Place the HTML on the page (DOM)
ReactDOM.render(<App />, hostNode);