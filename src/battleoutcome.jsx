import { useState } from 'react';

export default function Battle({ randomSpellPicker, healMessage }) {
  // spells

  // Damage
  let attackDamage = '';
  let battleOutput = '';

  if (randomSpellPicker === 'crucio') {
    attackDamage = 10;
    battleOutput = 'Defending player has been hit by the crucio spell with a damage of ';
  } else if (randomSpellPicker === 'expelliamus') {
    attackDamage = 20;
    battleOutput =
      'Defending player has been hit by the expelliamus spell with a damage of ';
  } else {
    attackDamage = '';
    battleOutput = healMessage || '';
  }

  // Battle outcome
//set healspell in the array of spells
  return (
    <p className="battleOutput">
      {battleOutput}
      {attackDamage}
    </p>
  );
}
