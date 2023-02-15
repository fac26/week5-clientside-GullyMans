import './App.css';
import Characters from './characters';
import Battle from './battleoutcome.jsx';
import { useState } from 'react';

function App() {
  let [randomSpell, setRandomSpell] = useState('');
  let [healMessage, setHealMessage] = useState('');

  const listofspells = ['crucio', 'expelliamus', 'heal'];

  const Attack = () => {
    randomSpellPicker = listofspells[Math.floor(Math.random() * 2)];
    console.log(randomSpellPicker)
    setRandomSpell(randomSpell);//displays nothing
  }
  
  // const Heal = () => {
  //   // //setHealMessage('Attacking player healed themself');
  //   // console.log('heal activated');
  //   // return (
  //   // <p className="battleOutput">
  //   //   hello
  //   // </p>)

  // };

  return (
    <div className="App">
      <header>
        <h1>Fight!</h1>
      </header>
      <section id="playerInstructions">
        <h3>Fight your opponent using spells!</h3>
      </section>
      <Characters />
      <Battle randomSpellPicker={randomSpellPicker} healMessage={healMessage}/>
      <button onClick={Attack}>Attack</button>
      <button>Heal</button>
    </div>
  );
  }
export default App;
