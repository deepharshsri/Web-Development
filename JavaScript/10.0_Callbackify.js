const util= require('util')

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

let downloadFilenew =util.callbackify(downloadFile)
let resizefilenew =util.callbackify(resizeFile)
let uploadFilenew =util.callbackify(uploadFile)

downloadFilenew("ttps:\\www.google.com\\logo.png",(err,downloadedPath)=>{
    if(err) throw err
resizefilenew(downloadedPath,'lzip',(err,resizedPath)=>{
if (err) {
    console.error(err)
    resizedPath=downloadedPath
}
uploadFilenew(resizedPath,()=>{
    console.log("Done")
})
})
})
