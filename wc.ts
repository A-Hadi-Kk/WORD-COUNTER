#! /usr/bin/env node
import inquirer from "inquirer";

const yourSentence = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter your sentence: "
})

const words = yourSentence.sentence.trim().split( " ");
console.log(words)
console.log(`The words in your sentence are: ${words.length}`);