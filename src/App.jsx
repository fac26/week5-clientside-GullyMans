import { useState } from 'react';
//import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
      <h1>Fight!</h1>
      </header>
      <section id="playerInstructions">
        <h3>Fight your opponent using spells!</h3>
      </section>
      <section id="characters">
        <div>
        {/* where you display the characters to fight */}
        </div>
        <p>
        {/* their health  */}
        </p>
        <p>
        {/* spell outcome/who attacked who etc */}
        </p>
        <button>Attack</button>
        <button>Heal</button>
      </section>
      
    </div>
  );
}

export default App;
