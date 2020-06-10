let obj={

  a:123,
  b:"Deepansh",
  c:function(){
    return this.a+this.b
  },
  d:{
    g:"CodeForCause"
  }
}

console.log(obj.d.g)
// console.log(obj.c())


/// Classes 
console.log(   Fruit("apple","sweet"))

function Fruit(name, color){
  this.name=name;
  this.color=color;
  return "hello"
}
class taste{
  constructor(name,taste){
    this.name=name;
    this.taste=taste
  }

}
// let gg=Fruit("Kiwi","okok")
// console.log(gg)




let f1=new Fruit("orange","orange")
console.log(f1)
let f2=new Fruit("apple","sweet")
console.log(f2.name)
let f3=Fruit("kiwi","kadwa")
console.log(f3.color)
console.log(f3)

let f4=Fruit
console.log(f4())

// let create a simple object :\

 let f5={
        name: "Mango",
        color: "yellow"
 }
// console.log(typeof f5)

//  console.log(color)