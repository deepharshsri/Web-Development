function Person(name , age){

this.name=name;
this.age=age
 
}

Person.prototype.isAdult=function(){
    return age>=18
}
let P1=new Person("Deepansh Srivastava",21)
console.log(P1.__proto__==Person.prototype)
Person.prototype.city="Delhi"
console.log(Person.city)
console.log(P1.city)
// let jj=Object.create(Person)
let pp=Object.create(P1)
let qq=Object.create(pp)
// console.log(P1.__proto__==Person.__proto__)
// console.log(P1.__proto__==Person.prototype)
// console.log(Person.prototype==Person.__proto__)
// console.log(pp.__proto__==Person.prototype)
// console.log(pp.__proto__==P1)
// console.log(pp.__proto__.__proto__==Person.prototype)
// console.log(qq.__proto__==Person.prototype)
// console.log(qq.__proto__==pp)
// console.log(qq.__proto__==pp.prototype)
// console.log(qq.__proto__==pp.__proto__)
// console.log(qq.__proto__.__proto__==pp.prototype)
// console.log(qq.__proto__.__proto__==pp.__proto__)
// console.log(qq.__proto__.__proto__==Person.prototype)
// console.log(qq.__proto__.__proto__.__proto__==Person.prototype)



/// 
// Inheritance concept using __proto__

function SuperType(){
	this.name = "Virat"
}

//SuperType prototype
SuperType.prototype.getSuperName = function(){
	return this.name
}

//SubType prototype function
function SubType(){
	this.age = 26
}

//Inherit the properties from SuperType
SubType.prototype = new SuperType();

//Add new property to SubType prototype
SubType.prototype.getSubAge = function(){
	return this.age;
}
console.log(SubType.prototype==SubType.__proto__)
console.log(SubType.__proto__==SuperType.prototype)
console.log(SubType.prototype.__proto__==SuperType.prototype) //<-- This line tell the another use __proto__, now we can see the __ proto__ present inside prototype how is used . 
