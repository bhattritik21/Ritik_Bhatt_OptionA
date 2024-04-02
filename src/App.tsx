import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/optionA/Main';
import Side from './components/optionA/Side';
import Icons from './components/optionA/Icons';

function App() {
  return (
    <div className="App flex">
      <Main/>
      <Icons/>
      <Side/>
    </div>
  );
}

export default App;
