
const connectionToMySql =require('mysql');// import mysql for connection to database

// connection setup
const setupDB=connectionToMySql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'auction',
    multipleStatements:true
});
//connect to database
setupDB.connect((err)=>{
    if(err){
        console.log("Sorry! Failed to connect with database");
    }
    else{
        console.log('Yey, Database Connected Successfully');
    }
});
module.exports=setupDB;