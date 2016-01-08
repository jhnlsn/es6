"use strict";

class Zoo {
  constructor(name) {
    this.name = name;
    this.animals = new Set();
  }

  add(animal) {
    this.animals.add(animal);
  };

  animalCount() {
    console.log('The zoo has ', this.animals.size, ' animals in the zoo');
  }
}


class Lion extends Zoo {
  speak() {
    console.log('I make a roar sound');
  }
}

var animal = new Lion('Bubbles');

animal.speak();
animal.add(animal);
animal.animalCount();
