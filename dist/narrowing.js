"use strict";
function move(animal) {
    if ("swim" in animal) {
        // fish or human
        if (animal.swim !== undefined) {
            animal.swim();
        }
    }
    else {
        // bird or human
        if (animal.fly !== undefined) {
            animal.fly();
        }
    }
}
let sodiq = {
    swim: () => console.log("sodiq can swim"),
    fly: () => console.log("sodiq can fly in an airplane"),
};
let dolphin = {
    swim: () => console.log("dolphins are excellent swimmers"),
};
let eagle = {
    fly: () => console.log("An eagle flies soaring through the sky"),
};
move(sodiq);
move(dolphin);
move(eagle);
function isFish(pet) {
    return pet.swim !== undefined;
}
let goldfish = {
    swim: () => console.log("goldfish swimming in the mini aquarium"),
};
console.log(isFish(goldfish));
let hummingbird = {
    swim: () => console.log("humming bird flies by flapping it's wings really fast"),
};
let animal_list = [goldfish, hummingbird];
const getSmallPet = () => {
    return animal_list[Math.floor(Math.random() * animal_list.length)];
};
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log(getArea({
    kind: "square",
    sideLength: 3,
}));
console.log(getArea({
    kind: "circle",
    radius: 1.2,
}));
