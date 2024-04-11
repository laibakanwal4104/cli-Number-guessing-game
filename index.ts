#! /usr/bin/env node 
import inquirer from "inquirer";

console.log("\n\twellcome to Codewithlaiba - CLi Number Guessing GAme\n ");

const randomNumber = Math.floor(Math.random()* 5 + 1);

const answer = await inquirer.prompt([{
    name: "userGuessNumber",
    type: "number",
    message: "Enter your guess number(Number limit from 1 to 5):",

},
]);
if ( answer.userGuessNumber === randomNumber){
console.log ("conragulation!you guess a corect number.");
}
else {
    console.log("sorry, you guess a wrong number");
}

