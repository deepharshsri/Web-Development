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

function resizeFile(filePath){
    return new Promise((resolve,reject)=>{
        console.log("Resizing has been Started ");
        setTimeout(()=>{
            let resizedPath=filePath.split('.')[0]+"-resized."+filePath.split('.')[1]
            console.log("The file is been resized as : "+resizedPath)
            resolve(resizedPath.split("//").pop())
           
        },3000)
    })
}

function uploadFile(diskPath){
    return new Promise ((resolve,reject)=>{
     console.log("Uploading Started...")
     setTimeout(() => {
          let uploadPath="https\\cb\\lk\\"+diskPath
          console.log(`The file has been uploaded to ${uploadPath} `)
          resolve(uploadPath)
     },3000);    


    })
}

Promise.all([
    downloadFile("ftps\\cb\\account\\logo.png"),
    downloadFile("https\\cb\\promo\\promo.png"),
    downloadFile("https\\cb\\videos\\avatar.png")
]).then((downloadValue)=>{
    return  Promise.all(downloadValue.map(resizeFile))
}).then((ResizeValues)=>{
    return  Promise.all(ResizeValues.map(uploadFile))
}).then((values)=>{
    console.log(values)
}).catch((err)=>{
    console.log(err)
})

