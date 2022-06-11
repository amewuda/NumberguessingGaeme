var userName = prompt("What is your name");
alert("You are welcome to the number guessing game, "+ userName);



function guess(min,max){
  var correctNumber = 2;
  var guess = prompt("Guess a number");
  if (Number(guess)===correctNumber){
    alert("Yes, you guessed right");
  alert("You've won an award");
  console.log("MOVE TO STAGE 2")
} else{
  console.log("keep thinking");
}
};
guess(1,2);
guess(1,3);