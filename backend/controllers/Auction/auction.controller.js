// const Auction=require('../models/Auction');
const connectionToSql=require('../../database/connection')
const getAllAuctions=async(req,res)=>{
connectionToSql.query('SELECT * FROM auction',(err,result)=>{
    if(err){
        console.log("Sorry but auction cannot be fetched")
        res.json({
            status:false,
            message:"Sorry but auction cannot be fetched"
        })
        console.log(err)
    }
    else{
        
        res.status(200).json(result)   
    }
    
})

}

const getAuctionById=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('SELECT * FROM auction WHERE auction_id=?',[id],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot be fetched")
            res.json({
                status:false,
                message:"Sorry but auction cannot be fetched"
            })
            console.log(err)
        }
        else{
            res.json(result)
        }
        
    })
}
const createAuction=async(req,res)=>{
    const {auction_title,auction_description,auction_start_date,auction_time,auction_status}=req.body;
    connectionToSql.query('INSERT INTO auction(auction_title,auction_description,auction_start_date,auction_time,auction_status) VALUES(?,?,?,?,?)',[auction_title,auction_description,auction_start_date,auction_time,auction_status],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot be fetched")
            res.json({
                status:false,
                message:"Sorry but auction cannot be fetched"
            })
            console.log(err)
        }
        else{
           
            res.json({
                status:true,
                message:"Auction Created",
                data:result
            })
        }
        
    })

}
const editAuction=async(req,res)=>{
    const id=req.params.id;
    const {auction_title,auction_description,auction_start_date,auction_time,auction_status}=req.body;
    connectionToSql.query('UPDATE auction SET auction_title=?,auction_description=?,auction_start_date=?,auction_time=?,auction_status=? WHERE auction_id=?',[auction_title,auction_description,auction_start_date,auction_time,auction_status,id],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot update auction")
            res.json({
                status:false,
                message:"Sorry but auction cannot update auction"
            })
            console.log(err)
        }
        else{
            res.json({
                status:true,
                message:"Auction Updated",
                
            })
        }
        
    }
    )
}

const archiveAuction=async(req,res)=>{
    const id=req.params.id;
    const {auction_status}=req.body;
    connectionToSql.query('UPDATE auction SET auction_status=? WHERE auction_id=?',[auction_status,id],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot archive auction")
            res.json({
                status:false,
                message:"Sorry but auction cannot update auction"
            })
            console.log(err)
        }
        else{
            res.json({
                status:true,
                message:"Auction Archive ",
                
            })
        }
        
    }
    )
}

const removeAuction=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('DELETE FROM auction WHERE auction_id=?',[id],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot remove auction")
            res.json({
                status:false,
                message:"Sorry but auction cannot remove auction"
            })
            console.log(err)
        }
        else{
            res.json({
                status:true,
                message:"Auction Deleted",
            })
        }
        
    })
}   
module.exports={
    
    getAllAuctions,
    getAuctionById,
    createAuction,
    editAuction,
    archiveAuction,
    removeAuction
}