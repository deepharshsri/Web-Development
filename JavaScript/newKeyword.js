// console.log(this==global)// false

function foo(){
    
    // console.log(this==global)// true bcz we are calling function and by this time "this" will refer to Global object .
   
       this.a="something"
       b=13;
       console.log(this==global)
       return 10;


}
// let o1=foo()

let o2= new foo();

// console.log(o1)
// console.log(o1.a)
// console.log(o1.b)
console.log(o2)
console.log(o2.a)
console.log(o2.b)

