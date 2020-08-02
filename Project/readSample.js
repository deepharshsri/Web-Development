const fs=require('fs');

fs.readFile(__dirname+"/sample.txt",function(err,data){
    if(err) throw err

    //  console.log(data.toString())
    let arr =data.toString().split('\n')
 let i=0;
 arr.pop()
 let ans1=[]
 let ans2=[]
 let j=0
 let count=1;
  while(i<arr.length){
     let  val=arr[i]
    //   console.log(val)
    let res=ans1.indexOf(val)
    if(res===-1){
    ans1[j]=val
    ans2[j]=count
    j++;
    }
    else{
        ans2[res]=count+1

    }
   
   i++;
}
 let kata=""
 while(ans1.length!=0){
      kata=kata+ans1.shift()+" : " +ans2.shift()+"\n"
 }
 console.log(kata)
fs.writeFile(__dirname+"/newFile.txt",kata,function(err){
    if(err ) throw err
})
    
    
})