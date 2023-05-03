// Importing necessary components and hooks
import './App.css';
import Characters from './Characters';
import Battle from './Battle.jsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// List of available spells
const listofspells = ['crucio', 'expelliamus'];

// The message to display when a character is healed
const healmessage = 'heal';

// List of available characters
const characters = [
  { name: 'Mario', imgSrc: 'mario.png' },
  { name: 'Luigi', imgSrc: 'luigi.png' },
  { name: 'Peach', imgSrc: 'peach.png' },
  { name: 'Yoshi', imgSrc: 'yoshi.png' },
];

function App() {
  // useState hook to keep track of the randomly generated spell
  let [randomSpell, setRandomSpell] = useState('');
  // useState hook to keep track of player health
  const [playerHealth, setPlayerHealth] = useState(100);
  // useState hook to keep track of CPU health
  const [cpuHealth, setCpuHealth] = useState(100);
  // useState hook to keep track of the player's image
  const [playerImage, setPlayerImage] = useState('bananajoe.webp');
  // useState hook to keep track of vs image
  const [vsimage, setVsimage] = useState('vs.png');
  // useState hook to keep track of the current player's name
  const [currentPlayer, setCurrentPlayer] = useState('Banana Joe')
  // useState hook to keep track of the selected character
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
 
// handleCharacterChange function to handle dropdown change
const handleCharacterChange = (event) => {
  // get selected character name from event.target.value
  const selectedName = event.target.value;
  // find the selected character object from characters array
  const selected = characters.find((char) => char.name === selectedName);
  // update the state with selected character object
  setSelectedCharacter(selected);
};

// Define a component called Attack
const Attack = () => {
  // Generate a random attack from the list of spells
  const randomAttack = listofspells[Math.floor(Math.random() * 2)];
  // Set the random spell to be the generated attack
  randomSpell = randomAttack;
  // Update the state variable randomSpell
  setRandomSpell(randomSpell);
  // Set the player's image to 'angryjoe.png'
  setPlayerImage('angryjoe.png');
  // If the random spell is 'crucio', reduce the CPU's health by 10
  // Otherwise, reduce the CPU's health by 20
  if (randomSpell === 'crucio') {
    setCpuHealth((previousCpuHealth) => {
      return previousCpuHealth - 10;
    });
  } else {
    setCpuHealth((previousCpuHealth) => {
      return previousCpuHealth - 20;
    });
  }
}

// This code sets a timeout function to execute after 5 seconds.
setTimeout(() => {
  // This logs a message to the console.
  console.log('my turn bish')
  // This creates an array of CPU functions.
  const cpuFuncs = [CpuAttack, CpuHeal];
  // This randomly selects a CPU function from the array.
  const randomCpuFunc = cpuFuncs[Math.floor(Math.random() * 2)];
  // This calls the randomly selected CPU function.
  randomCpuFunc();
  // This sets the current player to 'VSCode'.
  setCurrentPlayer('VSCode'); 
}, 5000);
// This sets the current player to 'Banana Joe'.
setCurrentPlayer('Banana Joe');

const Heal = () => {
  // set spell to heal message and update state
  randomSpell = healmessage;
  setRandomSpell(randomSpell);
  // set player image to Banana Joe and update player health
  setPlayerImage('bananajoe.webp');
  setPlayerHealth((previousPlayerHealth) => {
    return previousPlayerHealth + 10;
  });
  // wait 5 seconds and call a random CPU function
  setTimeout(() => {
    // array of CPU functions
    const cpuFuncs = [CpuAttack, CpuHeal];
    // select a random CPU function from the array and call it
    const randomCpuFunc = cpuFuncs[Math.floor(Math.random() * 2)];
    randomCpuFunc();
    // set current player to VSCode
    setCurrentPlayer('VSCode')
  }, 5000);
  // set current player to Banana Joe outside of the timeout function
  setCurrentPlayer('Banana Joe')
};

const CpuAttack = () => {
  // set VS image to attack image
  setVsimage('vscodeattack.png')
  // select a random attack spell and update state
  const randomAttack = listofspells[Math.floor(Math.random() * 2)];
  randomSpell = randomAttack;
  setRandomSpell(randomSpell);

  if (randomSpell === 'crucio') {
    // reduce player health by 10 if the attack spell is crucio
    console.log('Im in the cpu attack function');
    setPlayerHealth((previousPlayerHealth) => {
      return previousPlayerHealth - 10;
    });
  } else {
    // reduce player health by 20 for all other attack spells
    setPlayerHealth((previousPlayerHealth) => {
      return previousPlayerHealth - 20;
    });
  }
};

// This function is called when the CPU uses a healing spell
const CpuHeal = () => {
  // Set the VS image to the default 'vs.png' image
  setVsimage('vs.png');

  // Set the random spell to the heal message
  randomSpell = healmessage;
  setRandomSpell(randomSpell);

  // Increase the CPU's health by 10
  setCpuHealth((previousCpuHealth) => {
    return previousCpuHealth + 10;
  });
};

// This useEffect hook checks the health of both players after each render
useEffect(() => {
  // If the player's health is less than or equal to 0, VSCode wins
  if (playerHealth <= 0) {
    alert("VSCode Wins!");
  } 
  // If the CPU's health is less than or equal to 0, Banana Joe wins
  else if (cpuHealth <= 0) {
    alert("Banana Joe Wins!");
  }
}, []); // The empty array as the second argument ensures that the effect runs only once, after the initial render.

// This code returns the main component of the game, which includes character images,
// attack and heal buttons, and a link back to the home page.

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
    // This component displays the character images and health bars.
    <Characters playerHealth={playerHealth} cpuHealth={cpuHealth} playerImage={playerImage} vsimage={vsimage} />
    // This component displays the current spell and which player is currently active.
    <Battle randomSpell={randomSpell} Attack={Attack} currentPlayer={currentPlayer}/>
    // These buttons call the Attack and Heal functions when clicked.
    <button onClick={Attack}>Attack</button>
    <button onClick={Heal}>Heal</button>
    <br />
    // This link takes the user back to the home page.
    <Link to="/">HOME</Link>
  </div>
);

// This code returns the character selection page.

return (
  <div>
    <h1>Select your character:</h1>
    <select value={selectedCharacter.name} onChange={handleCharacterChange}>
      // This code maps through the characters array to display each character as an option in the dropdown.
      {characters.map((char) => (
        <option key={char.name} value={char.name}>
          {char.name}
        </option>
      ))}
    </select>
    // This code displays the selected character's image.
    <img src={selectedCharacter.imgSrc} alt={selectedCharacter.name} />
  </div>
);

export default App;