function downloadfile(url,downloaded){
    // fake delay of 3 sec to Download file loguc 

    console.log("Downloading has been start from : "+url);
    setTimeout(()=>{
        let downloadedPath="C://Downloads/"+url.split('\\').pop();
        console.log("The file has been downloaded to : "+ downloadedPath);
              downloaded(downloadedPath);
    },3000)
}
function resizefile(filePath,resized){
    // fake delay of 3 sec to Resize file loguc 

    console.log("Resizing has been started from : "+ filePath)
     setTimeout(( )=>{
       let resizedPath=filePath.split('.')[0]+"-resized."+filePath.split(".")[1];
       console.log("The file has been resized to : "+resizedPath)
       resized(resizedPath)
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


downloadfile("https:\\www.google.com\\logo.png",(downloadedPath)=>{
    resizefile(downloadedPath,(resizedPath)=>{
        uploading(resizedPath,()=>{
            console.log("Done")
        })
    })
})