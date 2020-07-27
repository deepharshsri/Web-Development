let arr=[5, 3 ,2,1,4]

// console.log(arr.sort())

let arr2=[4,1,2,13,26,3,42,29]

// console.log(arr2.sort())// By default sort method sorts the element in Lexigraphically Order.It treats element as string .



//////////////////////////////////


function compare(a,b){
    return a-b
}


// let sortedArray=arr2.sort(compare)

// console.log(sortedArray)

let sortedArray=arr2.sort(function(a,b){    //another way to use any function 
    console.log(arr2)
    console.log(a+" & "+b)
    return a-b>0
})
console.log(arr2)

//To print array in decsendingorder:

let sortedArray1=arr2.sort(function(a,b){    //another way to use any function 
    // console.log(arr2)
    // console.log(a+" & "+b)
    return b-a
})
// console.log(arr2)


// TO print array on the basis of "UNIT DIGIT" 
// console.log(arr2)

let sortedArray3=arr2.sort(function(a,b){    //another way to use any function 
   
    return (a%10)-(b%10)
})

// console.log(sortedArray3)



