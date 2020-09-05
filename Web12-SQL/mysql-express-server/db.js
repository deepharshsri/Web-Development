const mysql=require('mysql2')

let connection =mysql.createConnection({
    host: 'localhost',
    database:'mytest',
    user:'myclint',
    password:'mypass'
})

function addperson(name,age,city){
    
    return new Promise((resolve,reject)=>{
        
        connection.query(
            `INSERT INTO persons (name,age,city) VALUES(?,?,?)`,
             [name,age,city],
               (err,results)=>{
                  if(err){
                      reject(err)
                  }
                  else{
                    resolve()
                  }
               }
                )
               
            })
            
            
        }
function getperson(){

    return new Promise((resolve,reject)=>{
                
                connection.query(
                    `SELECT * FROM persons`,
                    (err,results)=>{
                        if(err){
                            reject(err)
                        }
                        else{
                        resolve(results);
                        }
                    })
                    
                    
                }
    )
            }          
                
                exports=module.exports={
                    addperson,
                    getperson
                }