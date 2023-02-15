export default function Characters({ playerHealth, cpuHealth, playerImage }) {
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
      {/* <p>It is {currentPlayer}</p> */}
    </section>
  );
}
