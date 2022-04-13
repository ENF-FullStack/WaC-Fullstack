let myObj = {
	name: "Jack"
};

function myFunc(a, b) {
	// If bound correctly, this should point to myObj
	// all the time
	console.log(this.name + " says: " + a + ", " + b);
}

/*
myFunc.mybind=function(obj){
    return function(...params){
        myFunc.call(obj,...params);
    }
}
*/

/*
Function.prototype.mybind=function(obj,...extra){
    console.log(this);
    let self=this;
    return function(...params){
        //console.log(this);
        return self.apply(obj,extra.concat(params));
    }
}
*/
Function.prototype.mybind=function(obj,...extra){
    return (...params) => this.apply(obj,extra.concat(params));
}

let func = myFunc.mybind(myObj);
func("hello", "world");		// "Jack says: hello, world"
          

// 2) Consider you also have
function nameLength(){
	return this.name.length;
}
//  What is needed for the following to work
var nl=nameLength.mybind(myObj);
console.log("Length",nl());	

// 3) Now for the partial applications part.
//    You should be able to set some of the first parameters also when binding:
//    For example, you should be able to use your mybind() now like this:
let func2 = myFunc.mybind(myObj, "hello");
func2("world");				// "Jack says: hello, world"
func2("how are you?");		// "Jack says: hello, how are you?"
	
