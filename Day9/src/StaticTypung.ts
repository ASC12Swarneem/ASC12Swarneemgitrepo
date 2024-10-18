console.log("Typescript Features");
// 1. Static Typing
// TypeScript introduces static typing to JavaScript, allowing you to define the types of variables, function parameters, and return values. This helps you catch errors at compile time, rather than at runtime.

function add(a: number, b: number): number {
    return a + b;
}

//scribble
// function functionName(var : vartype, var2: vartype): returntype {
//     // return var + var2;
//     return ;
// }
// function functionName(var : vartype){
// }

let result = add(5, 10);
console.log(result); // Output: 15

//Static typing example

function myName(name:string):void{
    console.log("My name is ",name);
}   

function mul(a:number, b:number):number{
    return a*b;
}

//Using the above declared variable again
result = mul(2,3);
console.log(result);
