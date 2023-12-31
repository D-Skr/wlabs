const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger = 50) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger;
        this.sound = 'Hi';
    }

    greet() {
        return `${this.sound}, ${this.name} ${this.species}`
    }

    feed() {
        this.hunger -= 20;
        return `Yum, I love food`
    }
}

class Cat extends Animal {
    constructor(name, color, hunger) {
        super(name, 'cat', color, hunger);
        this.sound = 'Meow'
        this.food = 'fish';
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
        this.sound = 'Woof';
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

    getAnimalsBySpecies(species) {
        return this.animals.filter(a => a.species === species);
    }
}

const shelter = new AnimalShelter();

for (let a of animalData) {
    let animal;
    if (a.species === 'cat') {
        animal = new Cat(a.name, a.color, a.hunger);
    } else if (a.species === 'dog') {
        animal = new Dog(a.name, a.color, a.hunger);
    } else {
        animal = new Animal(a.name, a.species, a.color, a.hunger);
    }
    shelter.addAnimal(animal);
}

console.log(shelter.getAnimalsBySpecies('dog'));

shelter.animals.forEach(a => {
    console.log(a.greet());
    console.log(a.feed());
})