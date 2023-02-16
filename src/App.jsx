import './App.css';
import Characters from './Characters';
import Battle from './Battle.jsx';
import { useState } from 'react';

const listofspells = ['crucio', 'expelliamus'];
const healmessage = 'heal';
//convert these to variables? and camelcase..

function App() {
  let [randomSpell, setRandomSpell] = useState('');
  const [playerHealth, setPlayerHealth] = useState(100);
  const [cpuHealth, setCpuHealth] = useState(100);
  const [playerImage, setPlayerImage] = useState('bananajoe.webp');
  //const Players = ['Player1', 'VSCode']

  const [currentPlayer, setCurrentPlayer] = useState('Player1')

  

  const Attack = () => {
    const randomAttack = listofspells[Math.floor(Math.random() * 2)];
    randomSpell = randomAttack;
    setRandomSpell(randomSpell);
    setPlayerImage('angryjoe.png');
    setCurrentPlayer('VSCode');
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
      setCurrentPlayer('VSCode');
      //it's cpu's turn here!
      // setTimeout(() => {
      //   const element = <p>VSCode is thinking...</p>
      // }, 2000);
      console.log('my turn bish')
      const cpuFuncs = [CpuAttack, CpuHeal];
      const randomCpuFunc = cpuFuncs[Math.floor(Math.random() * 2)];
      randomCpuFunc();
      setCurrentPlayer('Player1'); //might move on line 46
    }, 5000);
    
  };

  const Heal = () => {
    randomSpell = healmessage;
    setRandomSpell(randomSpell);
    setPlayerImage('bananajoe.webp');
    setCurrentPlayer('VSCode');
    setPlayerHealth((previousPlayerHealth) => {
      return previousPlayerHealth + 10;
    });
    //setCurrentPlayer('VSCode');
    setTimeout(() => {
      const cpuFuncs = [CpuAttack, CpuHeal];
      const randomCpuFunc = cpuFuncs[Math.floor(Math.random() * 2)];
      randomCpuFunc();
    setCurrentPlayer('Player1'); 
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
      <Battle randomSpell={randomSpell} Attack={Attack} currentPlayer={'Player1'}/>
      <button onClick={Attack}>Attack</button>
      <button onClick={Heal}>Heal</button>
    </div>
  );
}
export default App;

//only components are capitalised, but functions inside the components dont have to be capitalised