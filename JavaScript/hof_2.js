function ClientGreeter(name){
    let firstname=name.split(" ")[0]
     function greeter(){
         console.log("Hello "+ firstname)
         
     }
return greeter;
    }
let johngreeter = ClientGreeter("Deepansh Srivastava")
let harrygreeter= ClientGreeter("Arnav Bhaiya")
johngreeter();
harrygreeter();