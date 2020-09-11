let Sequelize=require('sequelize')

const sequelize =new Sequelize('shopingcart','shopper','shoppass',{
    host:'localhost',
    dialect: 'mysql'
})

const User=sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncerment: true,
        primaryKey:true
    
    },
    name :{
        type : Sequelize.STRING,
         allowNull : false
    },

})

const Product = sequelize.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name:{
        type : Sequelize.STRING,
        allowNull:false
    },
    manufacturer:{

     type : Sequelize.STRING
    },
    price:{
        type:Sequelize.FLOAT,
        defaultValue:0.0,
        allowNull:false
    }
})

sequelize.sync()

exports=module.exports={
    Product,
    User
}