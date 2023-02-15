import { useState } from 'react';

export default function Battle({ randomSpell, healMessage }) {
  // Damage
  let attackDamage = '';
  let battleOutput = '';
  let healOutput = '';
  if (randomSpell === 'crucio') {
    attackDamage = 10;
    battleOutput =
      'Defending player has been hit by the crucio spell with a damage of ';
    healOutput = '';
  } else if (randomSpell === 'expelliamus') {
    attackDamage = 20;
    battleOutput =
      'Defending player has been hit by the expelliamus spell with a damage of ';
    healOutput = '';
  } else if (healMessage === 'Attacking player healed themself') {
    attackDamage = '';
    battleOutput = '';
    healOutput = 'Attacking player healed themself';
  } else {
    attackDamage = '';
    battleOutput = '';
  }

  // Battle outcome

  return (
    <p className="battleOutput">
      {battleOutput}
      {attackDamage}
      {healOutput}
    </p>
  );
}
