// function that returns the product of three given numbers

let x=3, y=5, z=12;

let multiply=(x*y*z);

console.log (multiply)

// Write a function to check whether a given number is positive or negative

const number = 89;	

if (number > 0) {
let result='is positive';
console.log(number + result)
}

else if (number == 0) {
  let result='is zero number';
console.log(number + result)
}

else {
	let result='is negative';
    console.log(number + result)
 
}

// Write a function to check whether two given numbers are equal or not

const number1= 567;
const number2= 57;

if (number1 == number2) {
	console.log("The given two numbers are equal");
}

else {
     console.log("The given two numbers are not equal");
}

// Write a function that returns the greatest among the given three numbers

const num1= 567;
const num2= 57;
const num3= 1028;
let greatest;

if(num1 >= num2 && num1 >= num3) {
    greatest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    greatest = num2;
}
else {
    greatest = num3;
}

console.log("The greatest number is " + greatest);

// Write a function that greets a person by his/her name

let greetings= 'Hi', name='Nurbanu';
let greetingsaperson= (greetings+','+ name+'!')
console.log(greetingsaperson)
 


