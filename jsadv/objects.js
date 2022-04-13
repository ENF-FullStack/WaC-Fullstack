"use strict"

let obj = {
	firstName: "Jack",
	lastName: "Russell",
	age: 8
};

// TODO:
// 1) Make sure this script file is run in strict mode. 
//    "use strict" at the beginning of the file
//    You may wish to google what the strict mode does, but
//    to keep explanation short: More strict syntax checking is performed.

// 2) Make obj non-extensible (Object.preventExtensions()) and then try to
//    add a new property: obj.address. What happens?

obj.address="Turmiontie 12";
//Object.preventExtensions(obj);
//Object.seal(obj);
//delete obj.address;
//Object.freeze(obj);
obj.address="Bugikatu 2";
console.log(obj)

// 3) Find out what Object.seal(obj) does. Test!

// 4) Find out what Object.freeze(obj) does. Test!

// 5) Make obj.age non-enumerable (Object.defineProperty()). Use for-in loop
//    to print out the object's properties and refresh to see what happens.

Object.defineProperty(obj,'age',{enumerable:false})
Object.defineProperty(obj,'pi',{value:3.14,enumerable:true,writable:false})
for(let k in obj){
    console.log(k,obj[k]);
}
//obj.pi=9.8

// 6) Add a non-writable property to obj using Object.defineProperty() and try 
//    to change its value.

// 7) Add a new accessor property to obj called "gender" using Object.defineProperty().
//    Also define get() and set() functions for the gender property - both
//    of these should print something to the console when called. Where do you actually
//    store the gender value?
//    Test setting and getting the obj.gender value.


(function(){
    console.log("Suoritetaan");
})();

(function(){
    let gender="male";
    Object.defineProperty(obj,'gender',{
        get(){
            return gender;
        },
        set(g){
            console.log("Asetetaan",g);
            if ((g=='male') || (g=='female')) gender=g;
        }
    });
})();

console.log("Getter",obj.gender);
obj.gender="boy";
//gender='boy';
console.log("Getter",obj.gender);


// 8) How would you make a copy of the object declared at the beginning of the file?
//    Shallow copy, deep copy?
//    For testing add properties 
//      address:{street: "Teststreet 12"} to the obj
//      birtDay: new Date()
//    to the object
obj.address={street: "Teststreet 12",city:"Bugila"} ;
obj.birthday=new Date();
let shallow=Object.assign({},obj);
shallow.address.street="Mönkätie 1";
console.log("shallow",shallow);
console.log("alkup",obj);

let deep=JSON.parse(JSON.stringify(obj));
deep.address.street="Deeproad";
deep.birthday=new Date(deep.birthday);
console.log(obj,shallow,deep);