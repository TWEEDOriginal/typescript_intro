"use strict";
var _a;
//Basic types
let id = 5;
let company = "Learner";
let isJobless = true;
let x = 33; //can be any type
let ids = [1, 2, 3, 4, 5]; // only numbers allowed in list
//Tuple
let person = [1, "Tweed", true]; // only three items, and the type must correspond
let employee;
employee = [
    [19, "Brymo"],
    [20, "Trevor"],
    [22, "Martin"],
];
// Union
let new_id = 2; // one or the other
// type cannot be changed outside of its declaration.
const user = {
    id: 1,
    name: "twilo",
};
let cid = 1;
// as ensures the type is changed to the new type
let customerid = cid; // or <number>cid
function addNum(x, y) {
    // takes in two  numbers returns a number
    return x + y;
}
function log(message) {
    // takes in a message returns nothing
    console.log(message);
}
const user1 = {
    id: 1,
    name: "twilo",
};
console.log((_a = user1.usertype) === null || _a === void 0 ? void 0 : _a.toUpperCase());
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const person0 = new Person(0, "Tawheed Oguntade");
const person1 = new Person(1, "Abdullah Oguntade");
//Sub Classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp0 = new Employee(0, "Tawheed Oguntade", "CEO");
console.log(emp0.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["name", "is", "string"]);
// The object myUserAccount cannot be used until the type has
// been declared to TypeScript.
// the reason for this is because jsonParser returns a type of unknown
const jsonParser = (jsonString) => JSON.parse(jsonString);
// as ensures the type is changed to the new type 
const myUserAccount = jsonParser(`{ "name": "Samuel" }`);
myUserAccount.name;
const neverReturns = () => {
    // If it throws on the first line
    throw new Error("Always throws, never returns");
};
// It is a () => never, it returns never
// which means it should never happen. These can still be
// passed around like other values:
// Having a function never return can be useful when dealing
// with the unpredictability of the JavaScript runtime and
// API consumers that might not be using types:
const validateUser = (user) => {
    if (user) {
        return user.name !== "NaN";
    }
    // According to the type system, this code path can never
    // happen, which matches the return type of neverReturns.
    return neverReturns();
};
const req = { url: "https://example.com", method: "GET" };
// The as const suffix acts like const but for the type system,
// ensuring that all properties are assigned the literal
// type instead of a more general version like string or number
function liveDangerously(x) {
    // No error
    console.log(x.toFixed());
    // Writing ! after any expression is effectively a
    // type assertion that the value isn’t null or undefined
}
