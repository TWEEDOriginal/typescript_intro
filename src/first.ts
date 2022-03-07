//Basic types
let id: number = 5;
let company: string = "Learner";
let isJobless: Boolean = true;
let x: any = 33; //can be any type

let ids: number[] = [1, 2, 3, 4, 5]; // only numbers allowed in list

//Tuple
let person: [number, string, boolean] = [1, "Tweed", true]; // only three items, and the type must correspond

let employee: [number, string][];

employee = [
  [19, "Brymo"],
  [20, "Trevor"],
  [22, "Martin"],
];

// Union

let new_id: string | number = 2; // one or the other

// objects

type User = {
  id: number;
  name: string;
};
// type cannot be changed outside of its declaration.
const user: User = {
  id: 1,
  name: "twilo",
};

let cid: any = 1;
// as ensures the type is changed to the new type
let customerid = cid as number; // or <number>cid

function addNum(x: number, y: number): number {
  // takes in two  numbers returns a number
  return x + y;
}

function log(message: string | number): void {
  // takes in a message returns nothing
  console.log(message);
}

//Interfaces
interface UserInterface {
  readonly id: number; //makes this readonly you can't change the value once it is set
  name: string;
  usertype?: string;
  age?: number; // this makes age property optional
}

// One major difference between type aliases vs interfaces
// are that interfaces are open and type aliases are closed.
// This means you can extend an interface by declaring it
// a second time.
interface UserInterface {
  height?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "twilo",
};
console.log(user1.usertype?.toUpperCase());

type Point = number | Boolean; // you can't use an interface with union

interface MathFunc {
  (x: number, y: number): number; // takes in two number returns a number
}

const add: MathFunc = (x: number, y: number): number => x + y;

const sub: MathFunc = (x: number, y: number): number => x - y;

//Classes

interface PersonInterface {
  register(): string;
}

class Person implements PersonInterface {
  private id: number; // You can't change the value or get the value(e.g via console.log) outside the class
  protected name: string; //You can only get or change the value within the class or an extension of it
  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp0 = new Employee(0, "Tawheed Oguntade", "CEO");
console.log(emp0.register());

// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["name", "is", "string"]);

// The object myUserAccount cannot be used until the type has
// been declared to TypeScript.
// the reason for this is because jsonParser returns a type of unknown

const jsonParser = (jsonString: string): unknown => JSON.parse(jsonString);
type jsonUser = {
  name: string;
};

// as ensures the type is changed to the new type 
const myUserAccount = jsonParser(`{ "name": "Samuel" }`) as jsonUser;
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

const validateUser = (user: User) => {
  if (user) {
    return user.name !== "NaN";
  }

  // According to the type system, this code path can never
  // happen, which matches the return type of neverReturns.

  return neverReturns();
};

const req = { url: "https://example.com", method: "GET" } as const;

// The as const suffix acts like const but for the type system,
// ensuring that all properties are assigned the literal
// type instead of a more general version like string or number

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
  // Writing ! after any expression is effectively a
  // type assertion that the value isn’t null or undefined
}
