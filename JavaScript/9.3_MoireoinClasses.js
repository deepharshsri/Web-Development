class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
let P1 =new Person("Harry Potter",15)

class Student extends Person{
    constructor(name ,age,school){
        super(name,age)

        this.school=school
    }
}

let P2=new Student("Ron Weasely",16,"Hogwarts")

console.log(P1)
console.log(P2)
