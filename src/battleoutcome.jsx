import { useState } from 'react';

export default function Battle({ randomSpell, healMessage }) {
  // spells

  // Damage
  let attackDamage = '';
  let battleOutput = '';
  if (randomSpell === 'crucio') {
    attackDamage = 10;
    battleOutput =
      'Defending player has been hit by the crucio spell with a damage of ';
  } else if (randomSpell === 'expelliamus') {
    attackDamage = 20;
    battleOutput =
      'Defending player has been hit by the expelliamus spell with a damage of ';
  } else {
    attackDamage = '';
    battleOutput = healMessage;
  }

  // Battle outcome

  return (
    <p className="battleOutput">
      {battleOutput}
      {attackDamage}
    </p>
  );
}
