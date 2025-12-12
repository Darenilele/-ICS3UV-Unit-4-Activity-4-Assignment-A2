/**
 * @author Daren Ileleji
 * @version 1.0.0
 * @date 2025-12-09
 * @fileoverview This program will ask user which equation to use and help them solve it
 */

// Variables
let operation: string = "";
let number1String: string = "";
let number2String: string = "";
let number1: number = 0;
let number2: number = 0;
let result: number = 0;

// Input
operation = prompt("Welcome to my calculator program. Select an operation (type q to quit). a. add b. subtract c. multiply d. divide e. absolute value f. round g. raise to an exponent h. square root") || "";

// Processing
while (operation !== "q") {
  if (operation === "a" || operation === "b" || operation === "c" || operation === "d" || operation === "g") {
    number1String = prompt("Enter the first number:") || "0";
    number1 = parseFloat(number1String);
    number2String = prompt("Enter the second number:") || "0";
    number2 = parseFloat(number2String);
  } else if (operation === "e" || operation === "f" || operation === "h") {
    number1String = prompt("Enter the number:") || "0";
    number1 = parseFloat(number1String);
  }

  if (operation === "a") {
    result = number1 + number2;
    console.log(number1 + " + " + number2 + " = " + result);
  } else if (operation === "b") {
    result = number1 - number2;
    console.log(number1 + " - " + number2 + " = " + result);
  } else if (operation === "c") {
    result = number1 * number2;
    console.log(number1 + " * " + number2 + " = " + result);
  } else if (operation === "d") {
    result = number1 / number2;
    console.log(number1 + " / " + number2 + " = " + result);
  } else if (operation === "e") {
    if (number1 < 0) {
      result = number1 * -1;
    } else {
      result = number1;
    }
    console.log("The absolute value of " + number1 + " is " + result);
  } else if (operation === "f") {
    if (number1 - Math.floor(number1) >= 0.5) {
      result = Math.floor(number1) + 1;
    } else {
      result = Math.floor(number1);
    }
    console.log("Rounded value of " + number1 + " is " + result);
  } else if (operation === "g") {
    result = 1;
    for (let i = 0; i < number2; i++) {
      result = result * number1;
    }
    console.log(number1 + " raised to the power of " + number2 + " is " + result);
  } else if (operation === "h") {
    result = 0;
    while ((result + 1) * (result + 1) <= number1) {
      result++;
    }
    console.log("The square root of " + number1 + " is " + result);
  } else {
    console.log("Invalid operation selected.");
  }

  operation = prompt("Select another operation (type q to quit). a. add b. subtract c. multiply d. divide e. absolute value f. round g. raise to an exponent h. square root") || "";
}

// Output
console.log("Calculator program ended.");

console.log("\nDone.")
