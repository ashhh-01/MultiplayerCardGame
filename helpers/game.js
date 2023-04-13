const cards=require("./cards")
const Deck = require('./deck');
const players = [{name:"A"},
{name:"B"},
{name:"C"},
{name:"D"}];

class Game{
    constructor(players){
        this.players=players;
        this.currentPlayerIndex=0;
        this.deck=new Deck(cards);
        this.stackpile=[this.deck.draw()]
        for(let i=0;i<this.players.length;i++){
            this.players[i].hand=[];
            this.players[i].hand.push(this.deck.getRandomCards());
        }
    }
    showcard(){
        for(let i=0;i<this.players.length;++i){
            console.log(`${this.players[i].name}: ${this.players[i].hand}`)
        }
    }
    drawcard(){
        const currentcard=this.deck.draw()
        return currentcard;
    }
}

const mygame=new Game(players)
// const gameData=mygame.showcard()
// gameData.forEach((player) => {
//     console.log(`Player ${player.name} has the following cards:`);
//     player.hand.forEach((card) => {
//       console.log(`${card[0]}${card[1]}${card[2]}${card[3]}${card[4]}`);
//     });
//   });
console.log(mygame.drawcard())