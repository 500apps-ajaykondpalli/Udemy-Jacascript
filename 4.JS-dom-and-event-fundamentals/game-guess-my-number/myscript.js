/*
console.log(document.querySelector(".message").textContent); 
//document.querySelector(".message") selects the query and.textContent selects the content in the query.
// '.' dot is used for classes, # is used for id

document.querySelector(".message").textContent = "correct answer!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23; // .textContent and .value is different. IN a empty input we use .value to manipulate.
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//math.random giver number from 0 to 1.if we multiply by 20 and add 1 we get number from 1-20. Math.trunc removes all the decimal points and gives abs number
let chances = 20;
let highscore=0;

const displayMessage=function(message){
  document.querySelector(".message").textContent =message;
}


// .addEventListener takes input of the event , on what it should listen is "click" and after "click" what it should do is the next argument(here it is a function to display)
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // when there is no input

  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Answer!")
    //when player wins

  } else if (guess == secretNumber) {
    // document.querySelector(".message").textContent = "Correct Answer";
    displayMessage("Correct Answer!")
    
    document.querySelector("body").style.backgroundColor="green";
    document.querySelector(".number").textContent = secretNumber;

    if(chances>highscore){
      highscore=chances;
      document.querySelector(".highscore").textContent=highscore;
    }

    //when guess is greater than secret number

  } else if (guess!=secretNumber ) {
    if (chances>0){
      document.querySelector(".message").textContent = guess>secretNumber?"too high":"too low!";
      chances--; // reducing our chances
      document.querySelector(".chances").textContent = chances; // displaying our reduced chances
    }
    
  }

  //   else if (guess > secretNumber) {
  //   if(chances>0){
  //     document.querySelector(".message").textContent = "too high!";
  //     chances--; // reducing our chances
  //     document.querySelector(".chances").textContent = chances; // displaying our reduced chances
  //   }
  //   else{
  //     document.querySelector(".message").textContent = "you lost the game";
  //     document.querySelector(".chances").textContent = 0;
  //   }
    
  //   //when guess is less than secret number

  // } else if (guess < secretNumber) {
  //   if(chances>0){
  //     document.querySelector(".message").textContent = "too low!";
  //     chances--; // reducing our chances
  //     document.querySelector(".chances").textContent = chances; // displaying our reduced chances
  //   }
  //   else{
  //     document.querySelector(".message").textContent = "you lost the game";
  //     document.querySelector(".chances").textContent = 0;
  //   }
  // }
}); 

document.querySelector(".again").addEventListener("click",function(){
  score=20;
  secretNumber=Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent="Start guessing..."
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor="black"
  document.querySelector(".chances").textContent = 0;
  
})