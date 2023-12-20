const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger = 50) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger;
    }

    greet() {
        return `Hi, ${this.name} ${this.species}`
    }

    feed() {
        this.hunger -= 20;
        return `Yum, I love food`
    }
}

class Cat extends Animal {
    constructor(name, color, hunger) {
        super(name, 'cat', color, hunger);
        this.food = 'fish';
    }

    greet() {
        return `Meow, ${this.name} ${this.species}`;
    }

    feed() {
        this.hunger -= 20;
        return `Yum, I love ${this.food}`;
    }
}

class Dog extends Animal {
    constructor(name, color, hunger) {
        super(name, 'dog', color, hunger);
        this.food = 'kibble';
    }

    greet() {
        return `Woof, ${this.name} ${this.species}`;
    }

    feed() {
        this.hunger -= 20;
        return `Yum, I love ${this.food}`;
    }
}

const dog = new Cat('Dog1', 'black', 123);

console.log(dog.greet());
console.log(dog.hunger); // 100
console.log(dog.feed());
console.log(dog.hunger); // 80

class AnimalShelter {
    constructor() {
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    adoptAnimal(animal) {
        const animalIndex = this.animals.indexOf(animal);
        this.animals.splice(animalIndex, 1);
    }
}

const shelter = new AnimalShelter();

for (a of animalData) {
    const animal = new Animal(a.name, a.species, a.color, a.hunger);
    shelter.addAnimal(animal);
}

console.log(shelter.animals);