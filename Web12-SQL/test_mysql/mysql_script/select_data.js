const mysql=require('mysql2')

let connnection =mysql.createConnection({ 
    
    host:'localhost',
    database:'mytest',
    user:'myclint',
    password:'mypass'
})



connnection.query(
    `SELECT * FROM persons`,
        
        (err,rows,cols)=>{
            if(err){
                console.log("Error Occurs");
            }
            else {
                console.log(rows)
                console.log(cols)
            }
            connnection.close()
        }
        
        )