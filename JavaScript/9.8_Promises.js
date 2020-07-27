function downloadFile(url){
    return new Promise((resolve,reject)=>{
       if(!url.startsWith("https")){
           return reject(new Error("The url must be start with https"))
       }
    console.log("Downloading has been start from : "+url);
    setTimeout(()=>{
        let downloadedPath="Windows//C://Downloads//"+url.split("\\").pop();
        console.log("The file has been downloaded to : "+downloadedPath);
        resolve(downloadedPath)

    },3000)
    })

    
}

function resizeFile(filePath,format){
    return new Promise((resolve,reject)=>{
        let valid=['zip','lzip','7z'];
        if(valid.indexOf(format)==-1){
            return reject(`The file must be in ${valid}`)
        }
        console.log("Resizing has been Started ");
        setTimeout(()=>{
            let resizedPath="-resized."+format;
            console.log("The file is been resized as : "+resizedPath)
            resolve(resizedPath)
            resolve()
        },4000)
    })
}

function uploadFile(diskPath){
    return new Promise ((resolve,reject)=>{
     console.log("Uploading Started...")
     setTimeout(() => {
          let uploadPath="https\\cb\\lk\\"+diskPath
          console.log(`The file has been uploaded to ${uploadPath} `)
          resolve()
     },3000);    


    })
}

// We can hadle error in Differnt ways like this 
// 1 . using throwing error 

// downloadFile("htstps:\\www.google.com\\logo.png")
// .catch((err)=>{
//     console.error("Error in Downloading" )
//     throw err
// })
// .then((downloadedPath)=>resizeFile(downloadedPath,'dzip'))
// .catch((err)=>{
//     console.error(err.message)
    
// })
// .then(uploadFile)
// .then(()=> console.log("task Completed" ))
// .catch((message)=>{
// console.log(message)
// })

// Above if u see when line No 53 executes then it will find the next catch Block and it will not go in any " then " block until it find Catch Block .


// 2 Way if we haven't use "thr error" then it will go inside every "then block" therefore it will make Problem for us so what we can do is we can shift "catch block" after all then "then Block " so that if any Promise fails to fulfill its Promise it will skip all " then block " which are attached to that Promise until it finds Catch Block.


downloadFile("https:\\www.google.com\\logo.png")
.then((downloadedPath)=>resizeFile(downloadedPath,'zip'))
.catch((err)=>{
    console.error("Error : "+err)
   
})
.then(uploadFile)
.then(()=> console.log("task Completed" ))
.catch((message)=>{
console.log(message)
})



// var p2 = downloadFile("https:\\www.google.com\\kdsk\\logo.png")
// console.log(p2)
// var p3 =p2.then(function(Value){
//     console.log(Value);
//     return Value
// }).then((value)=>{
//     console.log(p3)
//     console.log(value)
// })
// console.log(p3)


