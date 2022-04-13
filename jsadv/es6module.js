
// consts
export const PI=3.14;

// Default values for parameters, rest-parameters
export function test(a,b=2,...rest){
    console.log("test",a,b,rest);
}

// As the name says
export function arrayMatch([a,b]){
    console.log("ArrayMatch",a,b);
}

// As the name says
export function objectMatch({y}){
    console.log("ObjectMatch",y);
}