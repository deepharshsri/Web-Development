// // Global Scope : 
// //* If a variable is declared outside all functions or curly braces ({}), it is said to be defined in the global scope.

// const c=10;
// let a=10;
// let b="Deepansh"
// //
// //

// //Local Scope : 


// function fun(){
// let h=12;
// //   console.log(h)  
// }
// fun()
// console.log(h)

// Var Understanding 

// var x=20
// function myfun(){
   
//     var x=40 
//     x+=1

//     console.log(" I belongs to line no 27 : " +x)
//     if(true){
//         var x=30
//         console.log(" I belongs to line no 30 : " +x)
//     }
//     console.log(" I belongs to line no 32 : " +x)
// }

// myfun()
// console.log(" I belongs to line no 36 : " +x)


// if (true){
// var y=17
// console.log(" I belongs to line no 41 : " +y)
// }
// console.log(" I belongs to line no 43 and ouside the Block scope : " +y)

// Let UNderstanding :

// let x=20
// function myfun(){
   
//     let x=40 
//     x+=1

//     console.log(" I belongs to line no 54 : " +x)
//     if(true){
//         let x=30
//         console.log(" I belongs to line no 57 : " +x)
//     }
//     console.log(" I belongs to line no 59 : " +x)
// }

// myfun()
// console.log(" I belongs to line no 63 : " +x)


// let y=10

// if (true){
// let y=17
// console.log(" I belongs to line no 41 : " +y)
// }
// console.log(" I belongs to line no 43 and ouside the Block scope : " +y)

// Const Understanding :

 
const x=20

function myfun(){
   
    const x=40 

    console.log("Const : I belongs to line no 54 : " +x)
   
    if(true){
        const x=30
        console.log("Const:  I belongs to line no 57 : " +x)
    }
    console.log("Const :  I belongs to line no 59 : " +x)
}

myfun()
console.log("Const : I belongs to line no 63 : " +x)



if (true){
const  y=17
 
console.log(" I belongs to line no 41 : " +y)
}

// console.log(y)

