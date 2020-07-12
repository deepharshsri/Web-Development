function createCounter(val,delta){

    let counter={
    
        incre : function(){
        val+=delta
    },
    
    decre : function(){
        val-=delta
    },
    
    show : function(){
       console.log(val)
    }
}
return counter
}
let a=createCounter(50,5)
a.show()
a.incre()
a.incre()
a.show()
a.decre()
a.decre()
a.decre()
a.decre()
a.show()
a.show
console.log(typeof a) // a is an Object
console.log(typeof a.show) // a.show is a function
console.log(typeof a.show()) // a.show() is basically we are calling show function ,
                             //since it is not returning anything So it's return type is Undefined and 40 in output
                             // is because when we write a.show() it will call it due to this content inside it will get executed.

function fun(){
    console.log("hello")
}

let f=fun;
let g=fun();
console.log(typeof f)
console.log(typeof g)                               