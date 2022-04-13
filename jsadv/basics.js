
// Study Number, String and Date prototypes at mdn

// 1) How would you display the localalized number 2323423.34

// 2) How would you create an array from string "1,5,3,5,3,2"

// 3) How would you display the time portion of a Date object

let myObj = {
	foo: "bar"
};

let mo2=myObj;
mo2.foo="Tervehdys";

// 4) Study what the valueOf() and toString() methods of Object.
//    Implement valueOf and toString for myObj. Find out when the functions are called.
console.log("MyObj",myObj);
console.log("valueOf",myObj.valueOf());
console.log("toString",myObj.toString());
console.log("string+MyObj","Hello "+myObj);

myObj.valueOf=function(){
    return 7;
}

myObj.toString=function(){
    return "world";
}

console.log("MyObj",myObj);
console.log("valueOf",myObj.valueOf());
console.log("toString",myObj.toString());
console.log("string+MyObj","Hello "+myObj);



// 5) Find out what JSON.stringify() and toJSON() do:
//
//	  Try stringifying myObj and observe the result. Then add a toJSON() function to 
//    myObj and try again.
let s=JSON.stringify(myObj);
console.log("JSON",s);
myObj.toJSON=function(){
    return {nimi:this.foo};
}
console.log("JSON2",JSON.stringify(myObj));


// 6) Use the Number(), String() and Boolean() functions in JavaScript to perform 
//    various kinds of type conversions.

// 7) What is the purpose of the global isFinite() function?
//    When does it return true and when false?
//	  How does it differ from isNaN?
let a=5/0;
console.log(a==NaN,a,NaN,isNaN(a),isFinite(a));
a=Number("Hello");
console.log(a==NaN,a,NaN,NaN==NaN,isNaN(a),isFinite(a));

