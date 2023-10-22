class Person {
    constructor(){
        this.name
    }
    
    set personName(newName){
         this.name = newName
    }
    get personName(){
        return  `My name is ${this.name}`
    }
    walk(){
        console.log(`${this.name} is walking` )
    }
}
let tan = new Person()
tan.personName = 'tan'
console.log(tan);