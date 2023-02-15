import './App.css';
import Characters from './characters';
import Battle from './battleoutcome.jsx';
import { useState } from 'react';
//import { Attack, Heal } from './battleoutcome'

function App() {
  let [randomSpell, setRandomSpell] = useState('');

  const listofspells = ['crucio', 'expelliamus'];
  const healmessage = 'heal';

  const Attack = () => {
    const randomAttack= listofspells[Math.floor(Math.random() * 2)];
    randomSpell = randomAttack;
    setRandomSpell(randomSpell);
    console.log(randomSpell)
  }

  const Heal = () => {
    //setHealMessage('Attacking player healed themself');
    //console.log(healMessage);
    randomSpell = healmessage;
    setRandomSpell(randomSpell)
    console.log('heal activated');
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
      <Battle randomSpell={randomSpell} />
      <button onClick={Attack}>Attack</button>
      <button onClick={Heal}>Heal</button>
    </div>
  );
  }
export default App;
