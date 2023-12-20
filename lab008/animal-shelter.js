const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger) {
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

const dog = new Animal('Dog1', 'Dog', 'black', 100);

console.log(dog.greet());
console.log(dog.hunger);
console.log(dog.feed());
console.log(dog.hunger);