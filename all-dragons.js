// Your code here
const FriendlyDragon = require('./classes/friendly-dragon')
const EvilDragon = require('./classes/evil-dragon')
const Dragon = require('./classes/dragon')

let lifeGoalsOne = ["save Atreyu from the swamp", "save Atreyu from the Nothing",
 "scare the local bullies into a dumpster"]

let falkor = new FriendlyDragon('Falkor', 'white', lifeGoalsOne, "Bastian")

let evilDoingsOne = [ "take over your mountain kingdom", "steal all your dwarven gold",
"burn down your floating village"]

let smaug = new EvilDragon("Smaug", "black", evilDoingsOne, "Dwarf King")

let allDragons = Dragon.getDragons(falkor, smaug)

// console.log(falkor);
// falkor.hasLifeGoals();
// console.log(falkor.breathesFire());
// console.log(falkor.helpsPeople());

// console.log(smaug);
// smaug.dontInviteThemOverForDinner();
// console.log(smaug.breathesFire());
// console.log(smaug.burnsNemesis());

console.log(allDragons)

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons
} catch {
  module.exports = null;
}
