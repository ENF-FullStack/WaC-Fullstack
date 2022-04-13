/* For the currency conversions you may assume that 
	1EUR=1.3USD and 1EUR=9.5SEK
*/

// 1) Implement a simple convertCurrency(rate,eur) that returns the converted value
function convertCurrency(rate,eur){
    return rate*eur;
}

console.log("Muunnos",convertCurrency(1.3,100));

// 2) Implement eurToUsd(e) -function. Try to use the fact that the functions
//    are also objects, attach a property to the function-object. 
//    You may use conversion rate: 1EUR=1.3USD

//let rate=1.3;
function eurToUsd(eur){
    return eurToUsd.rate*eur;
}
eurToUsd.rate=1.3;

console.log("eurToUsd",eurToUsd(200));

const joku=function(x){
    return x*joku.arvo;
}
joku.arvo=12;

console.log("Joku",joku(4));
// 3) Implement converterFactory(rate) that returns a new function that takes the 
//    euro-amount as parameter, test:
//    var e2usd=converterFactory(1.3);
//    var usd=e2usd(100);
function converterFactory(rate){
    return function(eur){
        return rate*eur;
    }
}

let e2s=converterFactory(9.55);
console.log("Kruunuina",e2s(100));
let e2u=converterFactory(1.3);
console.log("Dollareina",e2u(100));

// 4) Use bind-function (function prototype) to create a "new version" off
//    convertCurrency-function that only takes the eur amount as parameter,
//    the rate should be preset with bind.

let obj={
    name:"John"
}

function testThis(x){
    console.log(this,x);
}

testThis(5);

let uusiTesti=testThis.bind(obj,9);
uusiTesti();

let dollarit=convertCurrency.bind(null,1.3);
console.log("Dollarit",dollarit(300));

// 5)  Implement a self-executing function expression that holds rate in closure
//     and returns converter that only takes amount as parameter.

const usdConv=(function(rate){
    // Tähän apufunctioita ja apumuuttujia

    return function(eur){
        return rate*eur;
    }
})(1.3);

console.log("Self executing",usdConv(50));


// 6)  Implement self-executing function expression that returns an object
//     from whom you may call either convertToSek or convertToUsd

// 7) Implement showPrice(net,vat,calc)-function that shows the net-price, vat-amount
//    and total price. The second parameter somehow indicates vat (amount or percentage).
//    The third parameter is a function that knows how to calculate vat-amount from 
//    the first two parameters


