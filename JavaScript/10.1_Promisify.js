const util=require('util')
function downloadfile(url,downloaded){
    // fake delay of 3 sec to Download file loguc 
   
        console.log("Downloading has been start from : "+url);
        if(!url.startsWith("https")){
          return downloaded (new  Error("url must be start with 'https'"))
        }
        setTimeout(()=>{
            let downloadedPath="C://Downloads/"+url.split('\\').pop();
            console.log("The file has been downloaded to : "+ downloadedPath);
                  downloaded(null,downloadedPath);
        },3000)
}
function resizefile(filePath,format,resized){
    // fake delay of 3 sec to Resize file loguc 
 if(['zip','ip','lzip'].indexOf(format)===-1){
   return resized(new Error("We only except : "+ ['zip','ip','lzip']))
 }
     setTimeout(( )=>{
       let resizedPath=filePath.split('.')[0]+"-resized."+format
       console.log("The file has been resized to : "+resizedPath)
       resized(null,resizedPath)
     },3000)
}
function uploading(resizedPath,uploaded){
    // fake delay of 3 sec to Upload file loguc 
    var url= "http:cb\\upload\\" 
    console.log("Uploading has been started to "+url+resizedPath.split('/').pop());
    setTimeout(()=>{
        let uploadPath=url+resizedPath.split('/').pop();
         console.log("The file has been uploaded successfullt to : "+uploadPath);
         uploaded();
    },3000)
}

const downloadFile=util.promisify(downloadfile)
const resizeFile=util.promisify(resizefile)
const uploadFile=util.promisify(uploading)


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
