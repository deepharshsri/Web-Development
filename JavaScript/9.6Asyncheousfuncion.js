function downloadFile(url,downloaded){
// we are going to download a file from given  path 
// 3 sec fake delay means not actually downloading it.
console.log("we are downloading file from: " + url);
setTimeout(function(){
     let downloadedPath=":C:\\Downloads\\" + url.split('/').pop()
     console.log("The file has been downloaded to : " + downloadedPath)
     downloaded(downloadedPath)
 },3000)
}

downloadFile("https//google.com/logo.png", function(downloadedPath){
     resizeFile(downloadedPath,function(resizedPath){
         uploadFile(resizedPath,function(){    
           console.log("The file has been uploaded successfully") 
         })
     })
})
 

    function resizeFile(downloadedPath,resizing){
        // resizePath will fake delay of 3 second
        console.log("We are resizing the file from path : " +downloadedPath)
        setTimeout(function(){
                let resizedPath=downloadedPath.split('.')[0]+"-resized."+downloadedPath.split('.')[1];
            console.log("The file has been resized to : "+resizedPath )
            resizing(resizedPath)
        },3000)
      
    }


    function uploadFile(resizedPath,uploading){
        // uploadFile will also get a fake delay of 3 sec
        let uploadPath="\\cb:\\upload\\"+resizedPath.split('\\').pop();
        console.log("We are uploading file to : "+ uploadPath)
        setTimeout(uploading,3000);
    }