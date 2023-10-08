// src/App.js
import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>My 3-Page Website</h1> */}
      </header>
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;

