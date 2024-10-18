// 4. Generics
// Generics allow you to create reusable components that work with any data type.
/*
function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(42);
const str = identity<string>("Hello");

console.log(num); // Output: 42
console.log(str); // Output: Hello
*/

function employeeData<T>(arg: T):T{
    return arg;
}

const empName = employeeData<string>("Swarneem Nandanwar");
const empID = employeeData<number>(1122323);
const empContact = employeeData<number>(12345678);

console.log("Employee Name: ", empName,"Employee ID: ", empID,"Employee Contact: ", empContact,)