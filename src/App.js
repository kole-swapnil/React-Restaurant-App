import React, { Component } from 'react';
import MainComponent from './Components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <MainComponent/>
    </BrowserRouter>
  )
}

export default App;
