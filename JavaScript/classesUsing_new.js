function Person (name ,age){
    this.Fisrtname=name.split(" ")[0]   // See First name is visible outside because when run line No : 8 it will show that Firstanme =" john"
                                        //which basically behaving as public " mark my word Behaving Like Public not actually Public"
    this.Lastname=name.split(" ")[1]
   
    // this.age=age                          // Also this is behaving like public not actually a public 

    //  let mAge=age;                           // Now as you see in output mAge is not visible beacuse it is behaving Like Private "mark my words Behaving like not actually it is"

    this.isAdult = function(){
        return age>18  
    }
     isnotAdult=function(){
         return "hello"
     }

    }
let p=new Person("John Mart",30)
console.log(p)
console.log(p.isAdult())              // this line gives true 

let h=new Person("Harry Potter",12)

console.log(h)
console.log(h.isAdult())                  // this will give false
console.log(h.mAge)                     // undefined 
console.log(h.Fisrtname)
console.log(h.isnotAdult)
 