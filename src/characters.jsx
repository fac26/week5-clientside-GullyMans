import { useState, useEffect } from 'react';
import './App.css';
import Battle from './battleoutcome';

export default function Characters() {
  // const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  // const CurrentPlayer = [Player1, 'CPU'];
  // const handleBattleOutcome = (outcome) => {
  //   //handle outcome of the battle here
  // };

  // useEffect(() => {
  //   if (currentPlayerIndex === 1) {
  //     //simulate the CPU's move here
  //     //update currentPlayerIndex once the CPU has made its move
  //     setCurrentPlayerIndex(0);
  //   }
  // }, [currentPlayerIndex]);

  return (
    <section id="characters">
      <div id="p1flex">
        <div id="P1">{/* player one fight display */}</div>
        <p>{/* their health  {health.Player1}{' '} */}</p>
      </div>
      <div id="cpuflex">
        <div id="P2">{/* CPU fight display */}</div>
        <p>{/* their health  {health.Player2} */}</p>
      </div>
    </section>
  );
}
