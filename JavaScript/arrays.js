let arr=[1,2,3]
// console.log(arr)// to print element in array
// console.log(arr.length)// to get array length
// console.log(arr[0],arr[2])// to get array value at any  particular index


// it is possible to create an heterogenous array i.e array which contain integer , string , boolean , another array
let num=[1,'hello',true,[4,5]]
// console.log(typeof num[0])// gives no.
// console.log(typeof num[3])// gives output Object

//loops in javaScript

// //normal iteration loop 


// // for (let i = 0;i<num.length;i++){
// // console.log(num[i])
// // }

// //  another useful loop basically known as enhanced for loop in a java  or in javascript " for-of" LOOP


// // for(let val of num){
// //     console.log(val)
// // }


// // another LOOP exist is "For-in" LOOP which will give index as result


// // for(let index in num){
// //     console.log(index)
// // }


// // Push And Pop operation in Array is possible in java Script  bcz in JavaScript Arrays are dynamic in  nature


// let fruits =['apple','mango']
// console.log(fruits)

// // Push operation 

// fruits.push("WaterMelon", "Banana")// push operation will add item from last
// console.log(fruits)   

// // Pop operation 

// fruits.pop()
// console.log(fruits )//Pop operation will delete from last of array

//// Shift operation 

// fruits.shift() // Shift will delete element from start of Array
// console.log(fruits)


//// Unshift operation 

// fruits.unshift("Kiwi","Chiku")// Unshift operation will add element from start of an Array
// console.log(fruits )

// let see some more funtion available in array

//// slice Operation 
// let notes=['do','ri','mi','no','bi','ta','shi','ju','ka']

// let slc=notes.slice(4,6)

// console.log(slc) // remember that slice is not a destructive function that means arrays will remain same after slicing it. See below
// console.log(notes)

//// Splice function

// let omit =notes.splice(4,2)

// console.log(omit);// As you can see in output notes.splice(4,2) will give output as ['bi','ta'] which is same as notes.slice(4,6) but 
// console.log(notes)// Here notes array get changed due to SPLICE function because splice is destructive in nature so it omit it element in notes as you can see in output 

// notes.splice(4,2,'ok','ok')// we can also use splice funtion to replace items 
// console.log(notes)


//// concat function


let notes=['do','ri','mi','no']

console.log(notes.concat('sa','ni','dha','pa'))
console.log(notes)
console.log(notes.concat(['he','ll','o']))