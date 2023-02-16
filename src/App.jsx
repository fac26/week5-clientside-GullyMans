import './App.css';
import Characters from './Characters';
import Battle from './Battle.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const listofspells = ['crucio', 'expelliamus'];
const healmessage = 'heal';
//convert these to variables? and camelcase..

function App() {
  let [randomSpell, setRandomSpell] = useState('');
  const [playerHealth, setPlayerHealth] = useState(100);
  const [cpuHealth, setCpuHealth] = useState(100);
  const [playerImage, setPlayerImage] = useState('bananajoe.webp');
  const [vsimage, setVsimage] = useState('vs.png');
  const [currentPlayer, setCurrentPlayer] = useState('Player1')

  const Attack = () => {
    const randomAttack = listofspells[Math.floor(Math.random() * 2)];
    randomSpell = randomAttack;
    setRandomSpell(randomSpell);
    setPlayerImage('angryjoe.png');
    if (randomSpell === 'crucio') {
      setCpuHealth((previousCpuHealth) => {
        return previousCpuHealth - 10;
      });
    } else {
      setCpuHealth((previousCpuHealth) => {
        return previousCpuHealth - 20;
      });
    }
    
    setTimeout(() => {
      console.log('my turn bish')
      const cpuFuncs = [CpuAttack, CpuHeal];
      const randomCpuFunc = cpuFuncs[Math.floor(Math.random() * 2)];
      randomCpuFunc();
      setCurrentPlayer('VSCode'); 
    }, 5000);
    setCurrentPlayer('Player1');
  };

  const Heal = () => {
    randomSpell = healmessage;
    setRandomSpell(randomSpell);
    setPlayerImage('bananajoe.webp');
    setPlayerHealth((previousPlayerHealth) => {
      return previousPlayerHealth + 10;
    });
    //setCurrentPlayer('VSCode');
    setTimeout(() => {
      const cpuFuncs = [CpuAttack, CpuHeal];
      const randomCpuFunc = cpuFuncs[Math.floor(Math.random() * 2)];
      randomCpuFunc();
      setCurrentPlayer('VSCode')
    }, 5000);
    setCurrentPlayer('Player1')
  };

  const CpuAttack = () => {
    setVsimage('vscodeattack.png')
    const randomAttack = listofspells[Math.floor(Math.random() * 2)];
    randomSpell = randomAttack;
    setRandomSpell(randomSpell);

    if (randomSpell === 'crucio') {
      console.log('Im in the cpu attack function');
      setPlayerHealth((previousPlayerHealth) => {
        return previousPlayerHealth - 10;
      });
    } else {
      setPlayerHealth((previousPlayerHealth) => {
        return previousPlayerHealth - 20;
      });
    }
  };

  

  const CpuHeal = () => {
    setVsimage('vs.png');
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
      <Characters playerHealth={playerHealth} cpuHealth={cpuHealth} playerImage={playerImage} vsimage={vsimage} />
      <Battle randomSpell={randomSpell} Attack={Attack} currentPlayer={currentPlayer}/>
      <button onClick={Attack}>Attack</button>
      <button onClick={Heal}>Heal</button>
      <br />
      <Link to="/">HOME</Link>
    </div>
  );
}
export default App;

//only components are capitalised, but functions inside the components dont have to be capitalised