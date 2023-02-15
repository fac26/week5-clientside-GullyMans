import './App.css';
import Characters from './characters';
import Battle from './battleoutcome.jsx';
import { useState } from 'react';

function App() {
  let [randomSpell, setRandomSpell] = useState('');
  const [playerHealth, setPlayerHealth] = useState(100);
  const [cpuHealth, setCpuHealth] = useState(100);
  const listofspells = ['crucio', 'expelliamus'];
  const healmessage = 'heal';

  const Attack = () => {
    const randomAttack = listofspells[Math.floor(Math.random() * 2)];
    randomSpell = randomAttack;
    setRandomSpell(randomSpell);

    if (randomSpell === 'crucio') {
      // attackDamage = 10;
      setCpuHealth((previousCpuHealth) => {
        return previousCpuHealth - 10;
      });
    } else {
      // attackDamage = 20;
      setCpuHealth((previousCpuHealth) => {
        return previousCpuHealth - 20;
      });
    }
    setTimeout(() => {
      const cpuFuncs = [CpuAttack(), CpuHeal()];
      const randomCpuFunc = cpuFuncs[Math.floor(Math.random() * 2)];
      randomCpuFunc;
    }, 5000);
  };

  const CpuAttack = () => {
    const randomAttack = listofspells[Math.floor(Math.random() * 2)];
    randomSpell = randomAttack;
    setRandomSpell(randomSpell);

    if (randomSpell === 'crucio') {
      // attackDamage = 10;
      setPlayerHealth((previousPlayerHealth) => {
        return previousPlayerHealth - 10;
      });
    } else {
      // attackDamage = 20;
      setPlayerHealth((previousPlayerHealth) => {
        return previousPlayerHealth - 20;
      });
    }
  };

  const Heal = () => {
    randomSpell = healmessage;
    setRandomSpell(randomSpell);
    setPlayerHealth((previousPlayerHealth) => {
      return previousPlayerHealth + 10;
    });
    setTimeout(() => {
      const cpuFuncs = [CpuAttack(), CpuHeal()];
      const randomCpuFunc = cpuFuncs[Math.floor(Math.random() * 2)];
      randomCpuFunc;
    }, 5000);
  };

  const CpuHeal = () => {
    randomSpell = healmessage;
    setRandomSpell(randomSpell);
    setCpuHealth((previousCpuHealth) => {
      return previousCpuHealth + 10;
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Fight!</h1>
      </header>
      <section id="playerInstructions">
        <h3>Fight your opponent using spells!</h3>
      </section>
      <Characters playerHealth={playerHealth} cpuHealth={cpuHealth} />
      <Battle randomSpell={randomSpell} Attack={Attack} />
      <button onClick={Attack}>Attack</button>
      <button onClick={Heal}>Heal</button>
    </div>
  );
}
export default App;
