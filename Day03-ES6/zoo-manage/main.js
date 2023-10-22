class Zoo {
  constructor(zoo, animals) {
    this.zoo = zoo;
    this.animals = animals;
  }
  addNewAnimal(name) {
    this.animals.push(name);
  }
  checkExistingAnimal(name) {
    let animalCheck = this.animals.filter((animal) => {
      return animal == name;
    });
    
    if (animalCheck.length >= 1) {
      console.log(`we have ${name} in the list`);
    } else {
      console.log(`we don't have ${name} in the list`);
    }
  }
  getAnimalList() {
    let filterAnimal = new Set(this.animals);
    console.log(`I have ${[...filterAnimal]} in my zoo`);
  }
  deleteAnimal(name) {
    this.animals.shift(name);
  }
}
let zoo = new Zoo("Vườn thượng uyển", ["panda", "lion"]);
