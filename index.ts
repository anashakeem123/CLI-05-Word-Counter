#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";
import chalkAnimation from "chalk-animation";

console.log(chalk.bgYellow.red.underline.italic(`\n\t\t\t\t\t"Welcome To Word Counter"\n`))

async function welcomeAnimation() {
    const startingAnimation = chalkAnimation.neon(
        boxen(`Word Counter\nProject 06\nBy\nAnas Hakim`, {
            title: "My Project",
            titleAlignment: "center",
            textAlignment: "center",
            borderStyle: "double",
            borderColor: "blue",
            // Set width to 40 characters
            width: 105
        })
    );

    await new Promise((resolve) => setTimeout(resolve, 3000));

    startingAnimation.stop();
}

await welcomeAnimation();


let answer : {
    Sentence : string
} = await inquirer.prompt({
   name: "Sentence",
   type: "input",
   message: (chalk.bgGreen.white.underline.bold("*Enter You Sentence to count the word* : "))

});

let words = answer.Sentence.trim().length
let String = answer.Sentence.split(" ").length
let without_space  = answer.Sentence.replace(/\s+/g, '')
console.log(chalk.bgRed.white.underline.bold(`\n\t*Total Characters Without Space* : ${without_space.length}\n`))
console.log(chalk.bgYellow.white.underline.bold(`\t*Total Characters* : ${words}\n`))
console.log(chalk.bgGreen.yellow.underline.bold(`\t*Total Word* : ${String}\n`))


