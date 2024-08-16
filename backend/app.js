const obj = {
    name: 'john Smith',
    age: 30,
    
}

const person = Object.create(obj)
person.name = 'John Smith'
person.nameq = 'John Smith'
console.log(person) 
console.log(obj.length) 