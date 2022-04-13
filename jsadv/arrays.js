let persons=[
	{id: 1,name: "Bart",age: 12},
	{id: 2,name: "Lisa",age: 10},
	{id: 3,name: "Marge",age: 35},
	{id: 4,name: "Homer",age: 37},
];

// TODO: 

// 1) Use the sort() function to sort both test arrays below.
//    Print out the results - what do you observe?
let numbers = [1, 2, 3, 4, 10, 11, 22, 23, 30, 40];
let strings = ["foolish", "bart", "abc", "hello"];
strings.sort();
console.log(strings);
numbers.sort();
console.log(numbers);
numbers.sort((a,b) => b-a);
console.log(numbers);
strings.sort((a,b) => a.length-b.length);
console.log(strings);


// 2) How would you sort the numbers array in ascending order?
//    How about descending order?
//    Order persons, according to age, or name...
persons.sort((a,b) => a.age-b.age);
console.log(persons);


/* DEMO: Arrow functions */

// 3) The following is a perfectly valid array. What do you think its length is?
//    What does it contain at index 1? Guess and then try!
let arr = [8,2,3,];	
console.log("Length",arr.length);
// 4) What happens if you try to add something to a negative index in an array?
//    Test this using the strings array (from TODO 1) and then loop through it using a 
//    regular for-loop. Does the result differ if you use a for...in loop instead?
//    Why/why not? What does this tell you?
arr[3]=82;
arr[-1]=-100;
arr["-2"]=-200;
arr["joku"]=-300;
arr.muu=-400;
console.log("Uusi length",arr.length);
arr.sort((a,b) => a-b);
console.log(arr);
for(let i in arr){
    console.log(i, arr[i]);
}


// 5) Below is an example of using an array object as a so called associative array
//    (holds key-value pairs). This is actually bad practice in JavaScript, can you
//    figure out why? Try checking the length of the array, anything odd there?
//    What would be the alternative for creating associative arrays?
//let map = [];
let map={};
//map["name"] = "bart";
//map["age"] = 10;
map["123123-123E"]={name:'bart',age:12};
map["123213-2343"]={name:'lisa',age:11};

console.log(map["123213-2343"]);

// 6) The array below is a sparse array (has indeces without any values). Notice that
//    some indeces contain undefined as a value. Write a for loop that prints out
//    the values 1, "foo", undefined, 8 and 7 in the array, but skips all non-existent 
//    values in between.
let arr2 = [1, , "foo", undefined, 8, , , ,7];
for(let i in arr2){
    console.log(i,arr2[i]);
}
console.log(typeof(arr2[1]),typeof(arr2[3]))

//    Array prototype provides nice functions for 
//    handling arrays: forEach(), map(), filter(), every(), some(), reduce(),
//    reduceRight(), indexOf() and lastIndexOf().
//   
//    Use arrow-functions in the implementations
//
// 7) How would you display all items in strings-array in uppercase?
strings.forEach(s => console.log(s.toUpperCase()));
// 8) How would you create a new string array from existing one containing 
//    all the items in uppercase	
let STRINGS=strings.map(s => s.toUpperCase());
console.log(STRINGS);

// 9) How would you calculate the sum of the items in numbers-array
let summa=numbers.reduce((a,b) => a+b);
console.log("summa",summa);
// 10) How would you test if the string array contains string "hello"
//     Also find an item from the persons-array having the name "Homer"
console.log("Onko hello 1",strings.includes("hello"),strings.includes("XXXX"));
console.log("Onko hello 2",strings.indexOf("hello"),strings.indexOf("XXXX"));

console.log("Onko homer 1",persons.findIndex(p => p.name=='Homer'),persons.findIndex(p => p.name=="xxxx"));
console.log("Onko homer 2",persons.find(p => p.name=='Homer'),persons.find(p => p.name=="xxxx"));
console.log("Onko homer 3",persons.some(p => p.name=='Homer'),persons.some(p => p.name=="xxxx"));

// 11) Kaikki aikuiset
console.log("Aikuiset",persons.filter(p => p.age>18));