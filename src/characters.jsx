import { useState, useEffect } from 'react';
// import './App.css';
//import Battle from './battleoutcome';

export default function Characters({ playerHealth, cpuHealth }) {
  return (
    <section id="characters">
      <div id="p1flex">
        <img  src="/bananajoe.webp" id="P1"/>
        <p>{playerHealth}</p>
      </div>
      <div id="cpuflex">
        <div id="P2">{/* CPU fight display */}</div>
        <p>{cpuHealth}</p>
      </div>
    </section>
  );
}
