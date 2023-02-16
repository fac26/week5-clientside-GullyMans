export default function Characters({ playerHealth, cpuHealth, playerImage, vsimage }) {
  return (
    <section id="characters">
      <div id="p1flex">
        <img  src={playerImage} id="P1"/>
        <p>{playerHealth}</p>
      </div>
      <div id="cpuflex">
      <img  src={vsimage} id="P2"/>
        <p>{cpuHealth}</p>
      </div>
      {/* <p>It is {currentPlayer}</p> */}
    </section>
  );
}
