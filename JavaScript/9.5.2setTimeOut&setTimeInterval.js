function fun(){
    console.log("hello");
}
setTimeout(fun,1000);

// setTimeInterval

var intervalId;
var count =1;
function myfun(){
    if(count<5){
    console.log(++count)
}
else{
    clearInterval(intervalId)
}
}

intervalId=setInterval(myfun,1000)

