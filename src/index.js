import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBq4PPm9bjwN203ZZcEE7CqseK8PuRad6U";
const hostNode = document.querySelector('.container');


const App = () => {
  return ( 
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, hostNode);