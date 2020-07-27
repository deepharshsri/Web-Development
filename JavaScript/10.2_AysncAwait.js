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
            return reject(new Error(`The file must be in ${valid}`))
        }
        console.log("Resizing has been Started ....");
        setTimeout(()=>{
            let resizedPath=filePath.split(".")[0]+"-resized."+format;
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
          let uploadPath="https\\cb\\lk\\"+diskPath.split("//").pop()
          console.log(`The file has been uploaded to ${uploadPath} `)
          resolve()
     },3000);    


    })
}

async function doWork(){
    try{
    const DownloadFile=await   downloadFile("https\\cb\\promo\\promo.png")
    const ResizedFile=await   resizeFile(DownloadFile,'zip')
    await   uploadFile(ResizedFile)
    }
    catch(err){
        console.log(err.message)
    }
    return Promise.resolve("Ok , So I belongs to Return Promise value ")
}

// console.log(doWork())
// doWork().then(()=>console.log("taskEnded"))
doWork().then((comment)=>console.log(comment))