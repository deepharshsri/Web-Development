// console.log(this==global)// false

function foo(a){
    
    // console.log(this==global)// true bcz we are calling function and by this time "this" will refer to Global object .
   
       this.a=a
       b=13 
       console.log(this==global)
       return 10;


}
// console.log(a)
let o1=foo("harry potter")
console.log(a)
console.log(b)

// let o2= new foo();


// // console.log(o1)
// // console.log(o1.a)
console.log(o1.b)
// console.log(o2)
// console.log(o2.a)
// console.log(o2.b)
let oo={
    a:10,b:"feepe"}
    console.log(oo.b)

    f=10
 console.log(typeof f)



