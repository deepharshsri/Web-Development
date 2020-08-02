const express=require('express')

const server=express()

// server.get('/',function(req,res,next){
//     res.send('Hello Binlinchi Nagin Nigali')
// })

// server.listen(3030)




// server.get('/greet/:tod/:name',(req,res,next)=>{
      
//       let tod=req.params.tod     
    
//         switch(req.params.tod){
//             case 'evening' : tod = "Evening"; break;
//             case 'morning' : tod = "Morning"; break;

//            }
     
//     res.send("Good "+tod+" ! "+ req.params.name)
// })

// server.listen(3031)


// how to put query in our URl 

server.get('/greet/:tod',function(req,res,next){
        
      let tod=req.params.tod     
    
        switch(req.params.tod){
            case 'evening' : tod = "Evening"; break;
            case 'morning' : tod = "Morning"; break;

           }
     
    res.send(`<html><body><h1>Display Message</h1>
    <br></br></body></html> ${"Good"} ${tod+ "!" } ${req.query.name}`)
})

server.listen(3032)


// How to send HTML page 


// server.get('/grett',(req,res,next)=>{
//    res.send(`
//      <html>
//      <body>
//      <h1>Hey I am Heading</h1>
//      <i>Hey I belongs to iteractive</i>
//      </body>
//      </html>
   
//     `)
// })

// server.listen(3033)
