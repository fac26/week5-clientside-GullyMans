import { useState } from 'react';
//import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Fight!</h1>
      </header>
      <section id="playerInstructions">
        <h3>Fight your opponent using spells!</h3>
      </section>
      <section id="characters">
        <div id="p1flex">
          <div id="P1">{/* player one fight display */}</div>
          <p>{/* their health  */} 0</p>
        </div>
        <div id="cpuflex">
          <div id="P2">{/* CPU fight display */}</div>
          <p>{/* their health  */} 0</p>
        </div>
      </section>

      <p>
        {/* spell outcome/who attacked who etc */}
        "You attacked the enemy for 0 damage!"
      </p>
      <button>Attack</button>
      <button>Heal</button>
    </div>
  );
}

export default App;
