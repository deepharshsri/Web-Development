// var h ="Deepansh";
// // console.log(h)

// +function (){
//     return "hello"
// };

// console.log(h)

// function fun(){
//     var fdjf=10
// }
// console.log(fdjf)/





// use it as Local Scope without Polluting the Global Scope:

// (function (){
// var a=10;
// var b=a/5;
// console.log(a+b)
// })();




// minification 


// (function (l,p,r,s){
//     l("power:" + p(3,4))
//     l("root: "+r(2))
//     l("sin : :"+s(10))
    
// })(console.log,Math.pow,Math.sqrt,Math.sin)


// for loop setTimOut 

// for(var i = 0; i <3; i++) {
//     console.log(i);
//   (function (i){
//     setTimeout(function(){
//      console.log(i)
// //    },1000)
// //     })(i);
// //   } 
  
// //   console.log("after 1 sec")
  
//   // for(var i = 0; i <3; i++) {
//   //  setTimeout(console.log,1000,i)
//   // }
//   // console.log("after 1 sec")
  
  var foo = { 
    bar: function() { 
      return this.baz
     },
    baz: 29 
            };

        
            // console.log(typeof nu());
let nu=function(){
  return 33
};
// let c=foo.bar()
// console.log(c);

    (function(x){
      let a=x
     console.log( a());
     })(nu)

// let fs = require('fs');

// console.log('1');

// fs.readFile('test.txt', 'utf8', function(error, data) { if (error) { throw error; }

// console.log('2');
// });

// console.log('3');