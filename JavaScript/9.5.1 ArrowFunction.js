// Example 1 Normal Function with two Pararmeter
let sum=function(a,b){
    return a+b;
}
// Above arrow Fucntion will be :

let sum2=(a,b)=>a+b

//Example 2 Normal Function with One Parameter

let ispositive=function(a){
    return a>0
}
// Above Arrow Function

let ispositive2=(a)=>a>0

// Example 3 Normal Function for no Argument as Pararmeter

let randomNumber=function(){
    return Math.randomNumber
}

// Above Arrow Function 

let randomNumber2=()=> Math.randomNumber

// Example 4 

// Be alert while using arrow function inside Classes of EcmaScipt5
// See 
 
  class Person{
      constructor(name){
          this.name=name;
      }
    
     printNameFunction(){
         setTimeout(function(){
         console.log( this.name)
     },1000)
    }
     printNameArrow(){
         setTimeout(()=>{
         console.log(this.name)
     },1000)
    }

  }
let name="harsh"
let person=new Person("Deepansh")
 person.printNameFunction()
 person.printNameArrow()
 console.log(this.name)


 /// In case of Object  : 

 let obj={
     a:10,

     myfun:()=>{
         return this.a;
     },
     newfun:function(){
         return this.a;
     }
 }

 console.log(obj.a)
 console.log(obj.myfun())
console.log(obj.newfun()) 
