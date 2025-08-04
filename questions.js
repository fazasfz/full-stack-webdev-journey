// This file contains all the questions of javascript in the module
//Question 1
 /* BMI Calculator Advanced (IF/ELSE)
Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

Write a function that outputs (returns) a different message depending on the BMI.
 */
function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.round(bmi);

    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Your BMI is " + bmi + ", so you are overweight.";
    } else if (bmi >= 30 && bmi <= 34.9) {
        return "Your BMI is " + bmi + ", so you are obese.";
    } else {
        return "Your BMI is " + bmi + ", so you are extremely obese.";
    }
}
//Question 2
/* Leap Year
Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February 
his is how to work out whether if a particular year is a leap year:

A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400.

Write a function that takes a year as an input and outputs whether it is a leap year or not.
*/
function isLeap(year) {

/**************Don't change the code above****************/

    if (year % 400 === 0) {
        console.log("Leap year.");
    } else if (year % 100 === 0) {
        console.log("Not leap year.");
    } else if (year % 4 === 0) {
        console.log("Leap year.");
    } else {
        console.log("Not leap year.");
    }

/**************Don't change the code below****************/

}
//Question 3
/*
Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.*/
function whosPaying(names) {

/******Don't change the code above*******/

    var randomPerson = Math.floor(Math.random() * names.length);
    var randomName = names[randomPerson];
    return randomName + " is going to buy lunch today!";

/******Don't change the code below*******/

}

// Question 4
/*
Fibonacci Generator
The Fibonacci sequence is a series of numbers where the next number is found by adding up the two numbers before it. The sequence starts with 0 and 1.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, ...
Create a function where you can call it by writing the code: fibonacciGenerator (n) Where n is the number of items in the sequence. So I should be able to call: fibonacciGenerator(3) and get [0,1,1] as the output.
*/
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
          let output = [];
        if (n === 1){
             output = [0];
        } else if (n===2){
             output = [0,1];
        } else { 
            output = [0,1];
          for (let i = 2; i < n; i++) {  
        output.push( output[i-1] + output[i-2]);
          }
    }
    return output;
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

