let node_assert=require('assert');
// Study assert-module from node documentation

let Person=require('./person')


let p=new Person("Tom",16);
console.log(p);
p.age=105;
//node_assert(p.age>=0 && p.age<=100,"BAD AGE")
// Fix person, age above 100 should not be accepted
console.log("Jatkuu")


let chai=require('chai');
let chai_assert=chai.assert;

//chai_assert.isAtMost(p.age,100,"Age should be atmost 100");
console.log("Jatkuu")

let expect=require('chai').expect;
const { assert } = require('browserify/lib/builtins');

//expect(p).to.have.property('age').with.lte(100);

/* You need to run through mocha to test this */
describe('Person', function() {
    var p=new Person("Timo",19);
    describe('age', function() {
        it('should always be <=100', function() {
            p.age=90;
            expect(p).to.have.property('age').with.lte(100);
        });
    });
    describe('name', function() {
        it('should have len>3', function() {
            let len=p.name.length;
            node_assert(len>3,"Liian lyhyt");
        });
    });
});
