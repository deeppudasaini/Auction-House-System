// const Bid=require('../models/Bid');
const connectionToSql=require('../../database/connection')
const getAllBids=async(req,res)=>{
connectionToSql.query('SELECT * FROM bid',(err,result)=>{
    if(err){
        console.log("Cannot Get Bid")
        res.json({
            status:false,
            message:"Cannot Get Bid"
        })
        console.log(err)
    }
    else{
        
        res.status(200).json(result)
            
        
    }
    
})

}

const getBidById=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('SELECT * FROM bid WHERE bid_id=?',[id],(err,result)=>{
        if(err){
            console.log("Cannot Get Bid")
            res.json({
                status:false,
                message:"Cannot Get Bid"
            })
            console.log(err)
        }
        else{
            res.json(result)
        }
        
    })
}
const createBid=async(req,res)=>{
    const {bidder ,bid_item ,bid_seller ,bid_price}=req.body;
    connectionToSql.query('INSERT INTO bid(bidder,bid_item,bid_seller,bid_price) VALUES(?,?,?,?)',[bidder ,bid_item ,bid_seller ,bid_price],(err,result)=>{
        if(err){
            console.log("Cannot Create Bid")
            res.json({
                status:false,
                message:"Cannot Create Bid"
            })
            console.log(err)
        }
        else{
           
            res.json({
                status:true,
                message:"Bid Created",
                data:result
            })
        }
        
    })

}
 
module.exports={
    
    getAllBids,
    getBidById,
    createBid,
    
}