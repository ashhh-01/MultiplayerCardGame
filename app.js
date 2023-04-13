const Players = [
{name:"A"},
{name:"B"},
{name:"C"},
{name:"D"}];
const Game=require("./helpers/game")

  function assignCardsToPlayers(numPlayers, numCardsPerPlayer) {
    const players = [];
    
    // create an array of empty arrays to hold each player's cards
    for (let i = 0; i < numPlayers; i++) {
      players.push([]);
    }
    
    // assign random cards to each player
    for (let i = 0; i < numCardsPerPlayer; i++) {
      for (let j = 0; j < numPlayers; j++) {
        const card = deck.shift(); // remove the top card from the deck
        players[j].push(card); // add the card to the current player's hand
      }
    }
    
    return players;
  }

  console.log(see)
  
  const players = assignCardsToPlayers(numPlayers, numCardsPerPlayer);
  console.log(players);