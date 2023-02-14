import './App.css';
import Characters from './characters';
import Battle from './battleoutcome.jsx';
import { useState } from 'react';
function App() {
  let [randomSpell, setRandomSpell] = useState('');
  let [healMessage, setHealMessage] = useState('');

  const Attack = () => {
    const randomSpellPicker = Math.floor(Math.random() * 2);

    switch (randomSpellPicker) {
      case 0:
        setRandomSpell('crucio');

        break;
      case 1:
        setRandomSpell('expelliamus');

        break;
      default:
        break;
    }
  };

  const Heal = () => {
    setHealMessage('Attacking player healed themself');
  };

  return (
    <div className="App">
      <header>
        <h1>Fight!</h1>
      </header>
      <section id="playerInstructions">
        <h3>Fight your opponent using spells!</h3>
      </section>
      <Characters />
      <Battle randomSpell={randomSpell} healMessage={Heal} />
      <button onClick={Attack}>Attack</button>
      <button onClick={Heal}>Heal</button>
    </div>
  );
}

export default App;
