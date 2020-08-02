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
//    },1000)
//     })(i);
//   } 
  
//   console.log("after 1 sec")
  
  // for(var i = 0; i <3; i++) {
  //  setTimeout(console.log,1000,i)
  // }
  // console.log("after 1 sec")
  
  var foo = { 
    bar: function() { 
      return this.baz
     },
    baz: 1 
            }

            console.log(foo.bar());

    (function(x){
     console.log(typeof x());
     })(foo.bar)

    