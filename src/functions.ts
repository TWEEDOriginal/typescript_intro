type GreetFunction = (a: string) => void;
// (a: string) => void means “a function
// with one parameter,
//  named a, of type string,
//  that doesn’t have a return value

function greeter(fn: GreetFunction) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// functions can have properties
// in addition to being callable

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

let method: DescribableFunction = Object.assign(
  (someArg: number) => {
    return false;
  },
  { description: "function with property" }
);

doSomething(method);

// the function returns the type of the array element

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

// We can use multiple type parameters as well

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

console.log(parsed);


function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
  }

// manually specify Type 

const arr = combine<string | number>([1, 2, 3], ["hello"]);