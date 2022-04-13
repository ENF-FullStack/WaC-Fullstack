/*
    ALL THE TIME KEEP IN MIND:
    - JavaScript is case sensitive
    - Use camelCasing for the names

	console.log is the "print" command that can be used in testing of the solution.
	It is available in browsers and in node-environment.
	
	Run this script from command prompt with command:
	> node variables.js
*/
console.log("Hello world");  // Print single item
console.log("Hi",5,new Date());  // Print several items

/* 	
	1.	Declare 3 variables, one of each basic type. The variables should contain:
	
		your name 		(a variable containing a string)
		your age 		(a variable containing a number)
		are you happy 	(a variable containing a boolean value (true or false))
	
		Print them out individually using console.log(). Run the file.

        Also print the types of the variables you declared, for example 

        console.log(typeof(name));
*/

let name="VP";
let age=48;
let happy=true;
let some;

console.log("Nimi",name,typeof(name));
console.log("Ikä",age,typeof(age));
console.log("Tyytyväinen",happy,typeof(happy));
console.log("Joku",some,typeof(some));

/*
	2.	Create a new string variable by concatenating your name and age variables 
		in a sentence exactly like this:
	
		"Learning JavaScript is fun", said <your name>, aged <your age>.
	
		Print the sentence with console.log(). Notice that the printed sentence should
		contain the double hyphens ("") shown above and also the line break!
		
		Also console.log the length of the string.

        Do this exercise by string concatenation and also with ES6 template literals.
*/

let s1="\"Learning Javascript is fun\", said "+name+", aged "+age;
let s2='"Learning Javascript is fun", said '+name+", aged "+age;
let s3=`"Learning Javascript is fun", said ${name}, aged ${age}`;

console.log(s1,s1.length);
console.log(s2,s2.length);
console.log(s3,s3.length);

/*
	3.	Try declaring a string that actually contains a number, for example
		a price of the product.
		
        Then declare an other variable that contains the price as number,
		assign the value by converting the string into number with Number-function.
		
		Print the values and types of both variables.
*/

let priceString="123456.346";
let priceNumber=Number(priceString);
console.log(priceString,priceNumber,typeof(priceString),typeof(priceNumber));
console.log("toFixed",priceNumber.toFixed(2));
console.log("toLocalString",priceNumber.toLocaleString());
console.log("Kenkkua?",Number(priceNumber.toFixed(2)).toLocaleString());