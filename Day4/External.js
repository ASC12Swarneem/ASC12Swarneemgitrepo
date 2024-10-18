console.log("External javascript file");

function externalScript() {
    console.log("This is the external javascript function");
}

function square(num) {
    return num * num;
}

var a = prompt("Enter the number");
console.log(typeof (a));
var num = parseInt(a);

console.log(square(num));