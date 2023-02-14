export default function Battle() {
  // spells
  //   const attackspells = ['crucio', 'expelliamus'];
  const heal = ['heal'];
  let randomSpell = '';

  const Attack = function Attack() {
    const randomSpellPicker = Math.floor(Math.random() * 2);

    switch (randomSpellPicker) {
      case 0:
        randomSpell = 'crucio';
        console.log(randomSpell);
        break;
      case 1:
        randomSpell = 'expelliamus';
        console.log(randomSpell);
        break;
      default:
        break;
    }
  };

  return (
    <p>
      {/* spell outcome/who attacked who etc */}
      {'Player1'} attacked the {'CPU'} for {'health.currentPlayer'} damage with
      the {randomSpell}!"
    </p>
  );
}
