require("dotenv").config();
const express = require('express')
const auctionApp = express()
const multer=require('multer');
auctionApp.use(express.json());
const database=require('./database/connection');
var cors = require('cors');
auctionApp.use(express.urlencoded({extended: true}))

auctionApp.use(express.json());
auctionApp.use(cors())
database.setupDB;//setup the database connection
//route




auctionApp.use('/api/v1/auctions',require('./routes/auction/auction'));
auctionApp.use('/api/v1/categories',require('./routes/auction-category/auction-category'));
auctionApp.use('/api/v1/items',require('./routes/auction-item/auction-item'));
auctionApp.use('/api/v1/bids',require('./routes/bid/bid'));
auctionApp.use('/api/v1/sales',require('./routes/sale/sale'));
auctionApp.use('/api/v1/users',require('./routes/user/user'));
auctionApp.use('/api/v1/user-roles',require('./routes/role/role'));

var port = 8000;



const runNodeServer=async()=>{
    try{
        
        auctionApp.listen(port,()=>{
            console.log(`Using Port ${port}`);
        });
    }catch(err){
        console.log(err);
    }
};
runNodeServer();