const mysql=require('mysql2')

let  insert={
    name: process.argv[2],
    age: parseInt( process.argv[3]),
    city: process.argv[4]
}

let connnection =mysql.createConnection({ 
    
    host:'localhost',
    database:'mytest',
    user:'myclint',
    password:'mypass'
})



connnection.query(
    `INSERT INTO persons(name,age,city) VALUES
    (
        '${insert.name}',
         ${insert.age},
        '${insert.city}')`,
        
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