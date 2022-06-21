import React from 'react';
import './App.css';
import { Router } from './router/Router';

export const App = () => {
  return (
    <div className="App">
      <h1>お天気アプリ</h1>
      <Router />
    </div>
  );
}
