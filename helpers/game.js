const cards=require("./cards")
const Deck = require('./deck');

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
    // showcard(){
    //     for(let i=0;i<this.players.length;++i){
    //         console.log(`${this.players[i].name}: ${this.players[i].hand}`)
    //     }
    // }
    // drawcard(){
    //     const currentcard=this.deck.draw()
    //     return currentcard;
    // }
    getCurrentPlayer(){
        return this.players[this.currentPlayerIndex]
    }
    getNextPlayer() {
        this.currentPlayerIndex++;
        if(this.currentPlayerIndex==this.players.length){
            this.currentPlayerIndex=0
            return this.player[this.currentPlayerIndex];
        }else{
            return this.players[this.currentPlayerIndex]
        }
        // if (this.currentPlayerIndex == this.players.length - 1) {
        //     this.currentPlayerIndex = 0;
        // } else {
        //     this.currentPlayerIndex++;
        // }
        // return this.players[this.currentPlayerIndex];
    }
    getPrevPlayer(){
        if(this.currentPlayerIndex!=0){
        return this.players[this.currentPlayerIndex-1]
    }else{
        return this.players[players.length-1]
    }
    }
    playCard(cardNumber){
        const player=this.getCurrentPlayer();
        const card=player.hand[0][cardNumber];
        if(cards.indexOf(card)!==-1){ //Checking if the card is in the array cards //Validation
            console.log("here")
            player.hand[0].splice(cardNumber,1);//Removes the card from the players hand
            this.stackpile.unshift(card) //Adds the current player card to the stack
            if(card=="Ace of Spades"){// Skip the next player 
                this.getNextPlayer()
            }
            //Reverse the sequence
            else if(card==="King of Clubs"||card=="King of Diamonds"||card=="King of Spades"||card=="King of Hearts") {
                this.players.reverse();
                this.currentPlayerIndex=(this.players.length-1)-this.currentPlayerIndex;
              }
              //Give the next player 2 extra cards
              else if(card==="Queen of Clubs"||card=="Queen of Diamonds"||card=="Queen of Spades"||card=="Queen of Hearts") {
                this.getNextPlayer().hand[0].push(this.deck.draw(),this.deck.draw())
            }
            //Give the next player 4 extra cards
            else if(card==="Jack of Clubs"||card=="Jack of Diamonds"||card=="Jack of Spades"||card=="Jack of Hearts") {
                this.getNextPlayer().hand[0].push(this.deck.draw(),this.deck.draw(),this.deck.draw(),this.deck.draw())
            }
            if(player.hand[0].length==0){
                return player;
            }
            this.currentPlayerIndex=(this.currentPlayerIndex+1)
        }else{
            player.hand.push(this.deck.draw())
            if(this.deck.cards.length==0){
                return null
            }
        }
        console.log(player.hand[0].length)
        return false;
        }
}

module.exports=Game;
// const players = [
//     {name:"A"},
//     {name:"B"},
//     {name:"C"},
//     {name:"D"}];
// const mygame=new Game(players)
// let player=mygame.getCurrentPlayer();

// console.log(player.hand[0])
// console.log(mygame.stackpile.unshift("a","b"))
// console.log(player.hand[0].splice(1,1))
// console.log(player.hand[0])



