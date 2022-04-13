/*
This file and es6module.js demonstrates some of the features of ES6.

Your task is to create a new gulp-tast to gulpfile.js that compiles this into "es6.bundle.js" and can be run through node:
> node es5.bundle.js

You can start by making a copy of jsx-task and then modifying the copy slightly.
*/

import {PI,test,arrayMatch,objectMatch} from './es6module';

console.log("Some ES6 features",PI);

// Working with function parameters
test();
test(1,2,3,4);

// Array spread
let ar=[5,6,7,8,9];
test(...ar);

// Array match
let [a,b]=ar;
console.log(a,b);
arrayMatch(ar);

// New features for object literals
let prop="z",q=12;
let obj={x:10,y:17,[prop]:9,q};
obj["q"]=4;
console.log(obj);

// Object match
let {x}=obj;
console.log(x);
objectMatch(obj);

let s=`Many
lines
and a variable ${obj.y}`;
console.log("String interpolation",s);
