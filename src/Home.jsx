import { Link } from 'react-router-dom';

function Home({ setName }) {
  function getName(e) {
    setName(e.target.value);
  }
  return (
    <div className="home-container">
      <h1>🍌Fruit Fight Nightmare!🍌</h1>
      <h2>
        The world has gone mad. You are a banana. You are Banana Joe and as a
        banana it's hard to cast spells, cos you're bendy and stuff but you must
        try sweet banana. You must try because you need to build an app to
        enable people to get milk and eggs delivered to their door but VSCode
        keeps throwing errors. DESTROY VSCODE! 🤯 You may press ATTACK to crush
        VSCode with a random spell and HEAL to lick your banana wounds. Good
        luck fruity. The world is watching. 👀
      </h2>
      <Link to="/game">PLAY</Link>
    </div>
  );
}
export default Home;
