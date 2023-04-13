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
    getCurrentPlayer(){
        return this.players[this.currentPlayerIndex]
    }
    getNextPlayer(){
    if(this.currentPlayerIndex!=this.players.length){
        return this.players[this.currentPlayerIndex+1]
    }
    else{
        return this.players[0]
    }
    }
    getPrevPlayer(){
        if(this.currentPlayerIndex!=0){
        return this.players[this.currentPlayerIndex-1]
    }else{
        return this.players[players.length-1]
    }
    }
    playCard(cardNumber=0){
        const player=this.getCurrentPlayer();
        const card=player.hand[0][cardNumber];
        if(cards.indexOf(card)!==-1){
            player.hand[0].splice(cardNumber,1);
            this.stackpile.unshift(card)
            if(card=="Ace of Spades"){
                this.getNextPlayer()
            }
            else if(card==="King of Clubs"||card=="King of Diamonds"||card=="King of Spades"||card=="King of Hearts") {
                this.players.reverse();
                this.currentPlayerIndex=(this.players.length-1)-this.currentPlayerIndex;
              }
              else if(card==="Queen of Clubs"||card=="Queen of Diamonds"||card=="Queen of Spades"||card=="Queen of Hearts") {
                this.getNextPlayer().hand[0].push(this.deck.draw(),this.deck.draw())
            }
            
        }
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
console.log(mygame.playCard())
