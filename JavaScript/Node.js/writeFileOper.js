const fs=require('fs')

fs.writeFile(__dirname+"/someFile.txt"," I have some data",(err)=>{
    if(err) throw err
    console.log("File was written")
})