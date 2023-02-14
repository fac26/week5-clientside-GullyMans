import { useState } from 'react';
import './App.css';
import Characters from './characters';
import Battle from './battleoutcome';
import { Attack } from './battleoutcome';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Fight!</h1>
      </header>
      <section id="playerInstructions">
        <h3>Fight your opponent using spells!</h3>
      </section>
      <Characters />
      <Battle
      // currentPlayer={players[currentPlayerIndex]}
      //handleBattleOutcome={handleBattleOutcome}
      />
      <button onChange={Attack}>Attack</button>
      <button>Heal</button>
    </div>
  );
}

export default App;
