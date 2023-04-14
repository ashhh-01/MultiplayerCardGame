const players = [
{name:"A"},
{name:"B"},
{name:"C"},
{name:"D"}];
const Game=require("./helpers/game")
var readline = require('readline-sync');

const game=new Game(players);
let winner;
let result;
 while(!winner&&result!==null){
    const currentPlayer=game.getCurrentPlayer();
    console.log(`Current Player: ${currentPlayer.name}` )
    console.log(`Cards: [${currentPlayer.hand}]`)
    console.log(`Stack: ${game.stackpile}`)
    let cardNumber = readline.question("The number of the card you want to play?: ");
    if (cardNumber.toLowerCase() === "quit") {
        console.log("Ending game...");
        break; // exit the loop
      }
    result=game.playCard(parseInt(cardNumber));
    if(result==true){
        console.log("true")
    }else if(result==false){
        console.log("false")
    }
    else{
        winner=result
        console.log("yes")
    }
    
}

