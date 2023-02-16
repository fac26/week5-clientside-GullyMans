export default function Battle({ randomSpell, currentPlayer }) {
  // Battle outcome
  const hasGameStarted = randomSpell;
  if (!hasGameStarted) return null; // <p>awaiting players..<p>
  return (
    <p className="battleOutput">
      {randomSpell === 'heal' ? `${currentPlayer} healed themself` : `${currentPlayer} attacks with ${randomSpell} with a damage of ${randomSpell === 'crucio' ? 10 : 20} ` } 
    </p>
  );
}
