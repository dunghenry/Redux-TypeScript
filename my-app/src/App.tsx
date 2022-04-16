import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todos from './features/todos/Todos';

function App() {
  return (
    <div className="App">
      <Todos/>
    </div>
  );
}

export default App;
