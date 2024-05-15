#!/usr/bin/env node
import inquirer from "inquirer";
// interactive BMI calculator;
// user input weight
const weight = await inquirer.prompt([
    {
        name: "weightInKGs",
        type: "number",
        message: "Enter your weight in KGs",
    }
]);
// user input height.
const Height = await inquirer.prompt([
    {
        name: "HeightInMeters",
        type: "number",
        message: "Enter your height in Meters.",
    }
]);
// bmi formula for result.
let BMIResult = weight.weightInKGs / (Height.HeightInMeters * Height.HeightInMeters);
if (BMIResult <= 18) {
    console.log("You're underweight.");
}
else if (BMIResult > 18 && BMIResult <= 25) {
    console.log("You're healthy.");
}
else if (BMIResult > 25 && BMIResult <= 30) {
    console.log("You're overweight.");
}
else if (BMIResult >= 30) {
    console.log("You're obese.");
}
else {
    console.log("Enter correct values.");
}
