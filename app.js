const deck = [
    "Ace of Spades",
    "2 of Spades",
    "3 of Spades",
    "4 of Spades",
    "5 of Spades",
    "6 of Spades",
    "7 of Spades",
    "8 of Spades",
    "9 of Spades",
    "10 of Spades",
    "Jack of Spades",
    "Queen of Spades",
    "King of Spades",
    "Ace of Hearts",
    "2 of Hearts",
    "3 of Hearts",
    "4 of Hearts",
    "5 of Hearts",
    "6 of Hearts",
    "7 of Hearts",
    "8 of Hearts",
    "9 of Hearts",
    "10 of Hearts",
    "Jack of Hearts",
    "Queen of Hearts",
    "King of Hearts",
    "Ace of Diamonds",
    "2 of Diamonds",
    "3 of Diamonds",
    "4 of Diamonds",
    "5 of Diamonds",
    "6 of Diamonds",
    "7 of Diamonds",
    "8 of Diamonds",
    "9 of Diamonds",
    "10 of Diamonds",
    "Jack of Diamonds",
    "Queen of Diamonds",
    "King of Diamonds",
    "Ace of Clubs",
    "2 of Clubs",
    "3 of Clubs",
    "4 of Clubs",
    "5 of Clubs",
    "6 of Clubs",
    "7 of Clubs",
    "8 of Clubs",
    "9 of Clubs",
    "10 of Clubs",
    "Jack of Clubs",
    "Queen of Clubs",
    "King of Clubs"
  ];
  
  function getRandomCards(deck, numCards) {
    const shuffledDeck = shuffle(deck);
    const cards = shuffledDeck.slice(0, numCards);
    return cards;
  }
  
  function shuffle(deck) {
    let currentIndex = deck.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }
    
    return deck;
  }
  
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
  
  const numPlayers = 3;
  const numCardsPerPlayer = 5;
  
  const players = assignCardsToPlayers(numPlayers, numCardsPerPlayer);
  console.log(players);