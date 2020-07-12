// for(let i = 0; i <3; i++) {
//     console.log(i)
  
//     setTimeout(function(){
//      console.log(i)
//    },1000)
//  } 

// console.log("after 1 sec")

// for(var i = 0; i <3; i++) {
//   console.log(i)

//   setTimeout(function(){
//    console.log(i)
//  },1000)
// } 

// console.log("after 1 sec")


//Closure : 

function counter(){
  let cal=10
  function increment(){
    console.log(++cal)
  }
  return increment
}

var CAlCI =counter()

CAlCI()
CAlCI()


// if(true){
//   let s="dasfa"
// }




// var fda=10
// if(true){
// console.log(fda)
// }

// function myfun(){
//   let fa="fadsf"
//   console.log(fa)
//   fun()
//   function fun(){
//       let ra="fsdg"
//       let a="gfdsg"
//       console.log( "fadgfs"+ra)
//       mfun()
//       function mfun(){
//         let ka="daefa"
//         console.log(ra)
//         // console.log(fa)
//            minefun()
//          function minefun(){
//            let fds="fdsgf"
//           console.log("fasfa"+fa)
//          }
//        }
//   }
// }
// myfun()




// let faf=new myfun("fds ")
// let fassdf=new myfun("asfds ")

// console.log(faf)





// if(true ){
//   let a=10;




// setTimeout(function (){
//   console.log(a)
// },1000)
// }
// let a=102;


// var b="faed"
// function hfd(){
//   console.log(b)
// }
// // 
// hfd()