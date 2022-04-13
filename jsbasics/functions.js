/* 	1.	Write a function named "hello" that will simply print "Hello, world!"
		using console.log(). Make sure you can execute the function
		and see the printout. Test.
	
		What are the two ways you could write this function? Try them both.
*/

function hello(){
	console.log("Hello world");
}

const hello2 = function(){
	console.log("Hello 2");
}

const hello3 = () => console.log("Hello 3");

hello();
hello2();
hello3();

/* 	
	2.	Modify your function so that the text to be printed can be given as
		an argument.
	
		Test your function by calling it multiple times with different arguments.
	
		What happens if you pass in a number to the function instead of a string?
*/

function helloParam(tx=""){
	if(typeof(tx)=='undefined'){
		console.log("Parametri annettava");
		return -1;
	}
	console.log(tx);
	return String(tx).lenght;
}

let x=helloParam("Hello world");
console.log("Returned",x);

let y=helloParam(56);
console.log("Second",y);

let z=helloParam();
console.log("Third",z);

/*
	3.	Modify your function so that it returns the length of the string passed in
		as the parameter.  Store the return value to a variable and display it.
		
		What happens now if you pass in a number instead of a string?
*/

var some="Hello";

function test(){
	// var some;
	console.log("Some 1",some);
	if(true){
		var some="World";
		console.log("Some 2",some);
	}
	console.log("some 3",some);
}

test();