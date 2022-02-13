// const Auction=require('../models/Auction');
const connectionToSql=require('../../database/connection')
const getAllAuctionCategories=async(req,res)=>{
connectionToSql.query('SELECT * FROM auction_category',(err,result)=>{
    if(err){
        console.log("Sorry but auction cannot get category")
        res.json({
            status:false,
            message:"Sorry but auction cannot get category"
        })
        console.log(err)
    }
    else{
        
        res.status(200).json(result)
            
        
    }
    
})

}
const getAuctionCategoryById=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('SELECT * FROM auction_category WHERE auction_category_id=?',[id],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot get category")
            res.json({
                status:false,
                message:"Sorry but auction cannot get category"
            })
            console.log(err)
        }
        else{
            res.json(result)
        }
        
    })
}



module.exports={
    getAllAuctionCategories,
    getAuctionCategoryById,
    
}