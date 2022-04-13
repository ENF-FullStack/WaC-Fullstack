(function(){

console.log("Mod2 loaded");

var data="Hi there";

function printHello(){
    document.getElementById('output').innerHTML+=`<p>Mod 2 says: "${data}"</p>`;
}

/*
window.onload=function(){
    console.log("Mod2 window on load")
    printHello();
}
*/

window.addEventListener('load',function(){
    console.log("Mod2 window on load")
    printHello();
});

})();




