import { useState } from 'react';
// import './App.css';
//import Battle from './battleoutcome';

export default function Characters({ playerHealth, cpuHealth, playerImage }) {
  //const [image, setImage] = useState('/bananajoe.webp');
  return (
    <section id="characters">
      <div id="p1flex">
        <img  src={playerImage} id="P1"/>
        <p>{playerHealth}</p>
      </div>
      <div id="cpuflex">
        <div id="P2">{/* CPU fight display */}</div>
        <p>{cpuHealth}</p>
      </div>
    </section>
  );
}
