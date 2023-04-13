const cards=require("./cards")
const Deck = require('./deck');
class Game{
    constructor(players){
        this.players=players;
        this.currentPlayerIndex=0;
        this.deck=new Deck(cards);
    }
    getcard(){
        const random=this.deck.getRandomCards()
        return random;
    }
}

const mygame=new Game()
console.log(mygame.getcard())