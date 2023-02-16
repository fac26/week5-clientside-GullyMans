import './App.css';
import Characters from './characters';
import Battle from './battleoutcome.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  let [randomSpell, setRandomSpell] = useState('');
  const [playerHealth, setPlayerHealth] = useState(100);
  const [cpuHealth, setCpuHealth] = useState(100);
  const [playerImage, setPlayerImage] = useState('bananajoe.webp');

  const listofspells = ['crucio', 'expelliamus'];
  const healmessage = 'heal';

  const Attack = () => {
    const randomAttack = listofspells[Math.floor(Math.random() * 2)];
    randomSpell = randomAttack;
    setRandomSpell(randomSpell);
    setPlayerImage('angryjoe.png');
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
      //it's cpu's turn here!
      console.log('my turn bish')
      const cpuFuncs = [CpuAttack, CpuHeal];
      const randomCpuFunc = cpuFuncs[Math.floor(Math.random() * 2)];
      randomCpuFunc();
    }, 5000);
  };

  const CpuAttack = () => {
    const randomAttack = listofspells[Math.floor(Math.random() * 2)];
    randomSpell = randomAttack;
    setRandomSpell(randomSpell);

    if (randomSpell === 'crucio') {
      // attackDamage = 10;
      console.log('Im in the cpu attack function');
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
    setPlayerImage('bananajoe.webp');
    setPlayerHealth((previousPlayerHealth) => {
      return previousPlayerHealth + 10;
    });
    setTimeout(() => {
      const cpuFuncs = [CpuAttack, CpuHeal];
      const randomCpuFunc = cpuFuncs[Math.floor(Math.random() * 2)];
      randomCpuFunc();
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
        <h3>
          Use strategy to destroy VsCode and play as everyone's champion, BANANA
          JOE!
        </h3>
      </section>
      <Characters playerHealth={playerHealth} cpuHealth={cpuHealth} playerImage={playerImage} />
      <Battle randomSpell={randomSpell} Attack={Attack} />
      <button onClick={Attack}>Attack</button>
      <button onClick={Heal}>Heal</button>
      <br />
      <Link to="/">HOME</Link>
    </div>
  );
}
export default App;
