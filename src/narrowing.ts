type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    // fish or human
    if (animal.swim !== undefined) {
      animal.swim();
    }
  } else {
    // bird or human
    if (animal.fly !== undefined) {
      animal.fly();
    }
  }
}

let sodiq: Human = {
  swim: () => console.log("sodiq can swim"),
  fly: () => console.log("sodiq can fly in an airplane"),
};
let dolphin: Fish = {
  swim: () => console.log("dolphins are excellent swimmers"),
};
let eagle: Bird = {
  fly: () => console.log("An eagle flies soaring through the sky"),
};
move(sodiq);
move(dolphin);
move(eagle);

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
let goldfish: Fish = {
  swim: () => console.log("goldfish swimming in the mini aquarium"),
};

console.log(isFish(goldfish));

let hummingbird: Fish = {
  swim: () =>
    console.log("humming bird flies by flapping it's wings really fast"),
};

let animal_list: (Fish | Bird)[] = [goldfish, hummingbird];

const getSmallPet = (): Fish | Bird => {
  return animal_list[Math.floor(Math.random() * animal_list.length)];
};

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;
      
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

console.log(
  getArea({
    kind: "square",
    sideLength: 3,
  })
);

console.log(
  getArea({
    kind: "circle",
    radius: 1.2,
  })
);
