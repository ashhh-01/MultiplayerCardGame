const Game = require("./helpers/game");
const Deck = require("./helpers/deck");
const card = require("./helpers/cards");
let readline = require("readline-sync");

const players = [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }];

const game = new Game(players);
const deck = new Deck(card);
let winner;
let result;

while (!winner && result !== null) {
  const currentPlayer = game.getCurrentPlayer();
  console.log(`Current Player: ${currentPlayer.name}`);
  console.log(`Cards: [${currentPlayer.hand}]`);
  console.log(`Stack: ${game.stackpile}`);
  let cardNumber = readline.question(
    "The number of the card you want to play? or 'draw' to take a card or 'quit': "
  ); //Take User input
  if (cardNumber.toLowerCase() === "quit") {
    //Quit the game
    console.log("Ending game...");
    break; // exit the loop
  }
  if (cardNumber.toLowerCase() === "draw") {
    //Take an extra card
    currentPlayer.hand[0].push(deck.getRandomCards(1)[0]);
    // console.log(currentPlayer.hand)
    game.getNextPlayer();
  } else {
    result = game.playCard(parseInt(cardNumber)); //Play a card
    if (result) {
      winner = result;
      console.log(`${currentPlayer.name} is the winner`);
    } else if (result === "draw") {
      console.log("Draw");
      break;
    }
  }
}
