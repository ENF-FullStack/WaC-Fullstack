(function(){

console.log("Mod1 loaded");

var data="Hello world";

function printHello(){
    document.getElementById('output').innerHTML+=`<p>Mod 1 says: "${data}"</p>`;
}

/*
window.onload=function(){
    console.log("Mod1 window on load")
    printHello();
}
*/

window.addEventListener('load',function(){
    console.log("Mod1 window on load")
    printHello();
});

})();



/* 
    Quite a few problems here:
    1.  When we set the window.onload onload-property "there can be only one"
        Both scripts set the property, the one that is loaded last overrides the first.
        How do you correct?

    2.  Both files declare printHello, the one that is loaded last again overrides the first.
        Try (in either or both files):
            console.log("data",data,window.data);
            console.log("printHello",window.printHello);
        Easy correction would be to change the name of the function so that the same name
        is not used. Test it.
        - So the work doesn't end there....

*/