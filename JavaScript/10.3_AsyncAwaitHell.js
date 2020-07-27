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

    },1500)
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
        },1000)
    })
}

function uploadFile(diskPath){
    return new Promise ((resolve,reject)=>{
     console.log("Uploading Started...")
     setTimeout(() => {
          let uploadPath="https\\cb\\lk\\"+diskPath.split("//").pop()
          console.log(`The file has been uploaded to ${uploadPath} `)
          resolve()
     },500);    


    })
}

// Async Await Hell

// async function task(){
      
//     const start=new Date().getTime()

//     const downloadFile1=await   downloadFile("https\\cb\\promo\\promo.png")
//     const downloadFile2=await   downloadFile("https\\cb\\account\\avatar.png")
//     const downloadFile3=await   downloadFile("https\\cb\\dashboard\\image.png")
//     const ResizedFile1=await   resizeFile(downloadFile1,'zip')
//     const ResizedFile2=await   resizeFile(downloadFile2,'zip')
//     const ResizedFile3=await   resizeFile(downloadFile3,'zip')
//     await   uploadFile(ResizedFile1)
//     await   uploadFile(ResizedFile2)
//     await   uploadFile(ResizedFile3)
//     console.log((new Date().getTime() -start)/1000)
// }
// task()

async function task1(){

    const downloadFile1=await   downloadFile("https\\cb\\promo\\promo.png")
    const ResizedFile1=await   resizeFile(downloadFile1,'zip')
    await   uploadFile(ResizedFile1)

}
async function task2(){
    const downloadFile2=await   downloadFile("https\\cb\\account\\avatar.png")
    const ResizedFile2=await   resizeFile(downloadFile2,'zip')
    await   uploadFile(ResizedFile2)
    
}
async function task3(){
    
    const downloadFile3=await   downloadFile("https\\cb\\dashboard\\image.png")
    const ResizedFile3=await   resizeFile(downloadFile3,'zip')
    await   uploadFile(ResizedFile3)
}

// async function task(){
      
//    const start=new Date().getTime()

//    const completed1= task1()
//    const completed2= task2()
//    const completed3= task3()
//    await completed1
//    await completed2
//    await completed3

//     console.log((new Date().getTime() -start)/1000)

// }
// task()


// Or we can use here Promise.all

Promise.all([
    task1(),
    task2(),
    task3()
]).then(()=>console.log("Hey! I have use Promise.all to run Parallely all my task"))