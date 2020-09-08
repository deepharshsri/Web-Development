let mysql =require('mysql2')

let connection=mysql.createConnection({
    host:'localhost',
    database:'mytest',
    user:'myclint',
    password:'mypass'
}
)
const path=require('path');


function addPerson(name,age,city){
    return new Promise((resolve,reject)=>{
        connection.query(
            `INSERT INTO  persons(name,age,city) VALUES(?,?,?)`,
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

function getPerson(){
    return new Promise((resolve,reject)=>{
        connection.query(
            `SELECT * FROM persons`,
             (err,rows,cols)=>{
                 if(err){
                     reject(err)
                 }
                 else{
                     resolve(rows)
                 }
             }
        )
    })
 

}

module.exports={
    getPerson,
    addPerson
}