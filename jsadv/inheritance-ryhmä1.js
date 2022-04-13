let s="Terve maailma";
console.log(s.substr(0,3));
console.log(s.substr(s.length-3));

String.prototype.left=function(n){
    return this.substr(0,n);
}
String.prototype.right=function(n){
    return this.substr(this.length-n);
}

console.log(s.left(3));
console.log(s.right(3));


// TODO:

// 1) Write a constructor for Mammal objects. Later in the exercise, this will be
//    used as prototype for Human and Cat objects (sort of like a base class).


const Mammal=(function(){
    let counter=0;

    function Mammal(name,age){
        counter++;
        this.name=name;
        this.age=age;
        //this.isFurry=true;
        /*
        this.print=function(){
            console.log(this.name,this.age,this.isFurry);
        }
        */
    }
    Mammal.prototype.isFurry=true;
    Mammal.prototype.print=function(){
        console.log(this.name,this.age,this.isFurry);
    
    }
    Object.defineProperty(Mammal,'counter',{
        get(){
            return counter;
        }
    })

    return Mammal;
})();



let m=new Mammal("Tikru",12);
console.log(m.name,m.age);
m.print();

let m2=new Mammal("Ihaa",15);
m2.isFurry=false;
m2.print();
m.print();
console.log("Nisäkkäitä",Mammal.counter);
//	  For exercise's sake, in Mammal, there should be a few properties
//    * Name should be "traditional" property
//    * Provide accessors against age, test that the value is always between 0-100
//    * Each mammmal should also have isFurry-property that defaults to true
//	  * a public method show() which prints all properties with console.log

//	  Which of the properties and methods could be implemented to the prototype and which not? 
//    You should do this if you can to save memory.

// 	  Test your solution by instantiating a couple of Mammal objects (mammal1 and mammal2) 
//    and checking that:
//	  1) The age of each mammal object can be changed individually
//	  2) show() function works correctly for all of them as well

//    How would you implement a mammal counter so that you would be able to:
//    console.log(Mammal.count)
//    Where the counter would be "reasonably well" protected againse accidental
//    changes


function Human(name,age){
    Mammal.call(this,name,age);
    //Mammal(name,age);
    //this.name=name;
    //this.age=age;
}
Human.prototype=new Mammal("Immeinen",0);
Human.prototype.isFurry=false;

let h1=new Human("Tom",15);
h1.print();
//console.log("Globals",name);

console.log("Laskuri",Mammal.counter);

// 2) Write a constructor for Human objects. For now, do not add any constructor
//    arguments and leave the constructor body empty (i.e. the function does not do
//    anything yet).

//    Write the necessary code to make sure that all human objects inherit Mammal.

// 	  Test by instantiating a new human object (human1) and try the following:
//    * What do you get if you check what is the constructor of the human object? Fix if
//      needed.

// 3) Study Object.create. How would you create an object that inherits "stuff"
//    from a human object and adds a property feet with default value of 2

// 4) Implement Cat-class (ES6), try inheriting Cats from mammals
//    What is typeof(Cat) ?

class Cat extends Mammal{
    constructor(name,age){
        super(name,age);
        //this.name=name;
        //this.age=age;
        /*
        this.talk=function(){
            console.log("Meoww");
        }
        */
       /*
       Object.defineProperty(this,'favouriteFood',{
           get(){
               return "lasagne";
           }
       })
       */
    }

    talk(){
        console.log("Meoww");
    }

    get favouriteFood(){
        return "Lasagne";
    }
}

console.log(typeof(Cat));

let g=new Cat("Garfield",16);
g.print();
g.talk();
console.log("Herkku",g.favouriteFood);
console.log("Laskuri",Mammal.counter);


// 5) Implement gender-property for mammals, so that the each specific
//    type can easily declare possible types:
//    male,female for Mammals
//    man,woman,boy,girl for Humans
//    boy, girl for Cats
//    for example mare,stallion,gelding for horses etc
