class Deck {
    constructor(cards) {
      this.cards = cards;
    }
  
    shuffle() {
      let currentIndex = this.cards.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
      }
      return this.cards;
    }
  
    getRandomCards(numCards=5) { //defaulting it to 5 
      const shuffledDeck = this.shuffle();
      const cards = shuffledDeck.slice(0, numCards);
      return cards;
    }
  }
// const myDeck=new Deck(cards)
// console.log(myDeck.getRandomCards())
module.exports=Deck