/*
	1.	Fool around with following piece of code changing variable values (and types). 
        Try finding out when comparing string and number produces logically incorect result.
*/

let a="2",b=2;
console.log("Are they equal 2",a==b);
console.log("Are they equal 3",a===b);

a="";
b=0;

console.log("Are they equal 2",a==b);
console.log("Are they equal 3",a===b);
console.log("Are they equal 3",Number(a)===b);
console.log("Are they equal 3",a==String(b));

if (a) console.log(a,"is true");
else console.log(a,"is false");

/* These all increment b by one */
b=b+1;
b+=1;
b++;
console.log("After increments b=",b);

a="2";  // Each assignment may change the type of the variable
console.log("Types", typeof(a), typeof(b));
console.log("Are they equal 2",a==b);
console.log("Are they equal 3",a===b);

if (a=="Hello") console.log("a is Hello");
else console.log("a is not Hello");

if (a) console.log(a,"is true");  // Anything can be converted into boolean
else console.log(a,"is false");


var tx="Hello world";

/*
	2.	Use for-loop to display each individual character of tx.  You can get one
		character with square-brackets and using zero-based index.  For example
		tx[4] is "o".
		
		Try skipping l-characters with continue.
		
		Try breaking out of the loop when the space is encountered.
*/

for(let i=0;i<tx.length;i++){
	if (tx[i]=="l") continue;
	if (tx[i]==" ") break;
	console.log(tx[i]);
}

/*
	3.	Use while loop to display each individual character of tx but now in 
		reverse order.  
		
		Again try skipping l-characters and breaking out of the loop if space
		is encountered.
*/

let i=tx.lenght;
while(i>0){
	i--;
	if (tx[i]=='l') continue;
	if (tx[i]==' ') break;
	console.log(i,tx[i]);
}

a="";
b=3;
let c=a || "Hello";
console.log(c);
a="jotain";
c=a && a.substring(1);
console.log(c);