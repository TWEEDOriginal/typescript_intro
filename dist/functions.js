"use strict";
// (a: string) => void means “a function
// with one parameter,
//  named a, of type string,
//  that doesn’t have a return value
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
let method = Object.assign((someArg) => {
    return false;
}, { description: "function with property" });
doSomething(method);
// the function returns the type of the array element
function firstElement(arr) {
    return arr[0];
}
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
// We can use multiple type parameters as well
function map(arr, func) {
    return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// manually specify Type 
const arr = combine([1, 2, 3], ["hello"]);
