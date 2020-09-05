const mysql=require('mysql2')

let connnection =mysql.createConnection({ 
    
    host:'localhost',
    database:'mytest',
    user:'myclint',
    password:'mypass'
})

connnection.query(
    'CREATE TABLE IF NOT EXISTS persons(name VARCHAR(30),age INTEGER NOT NULL,city VARCHAR(20))',
    (err,results)=>{
        if(err){
            console.log("Error Occurs");
        }
        else {
            console.log('Row added succesfully')
        }
    connnection.close()
    }

)