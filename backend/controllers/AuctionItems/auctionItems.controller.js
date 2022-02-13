// const Auction=require('../models/Auction');
const connectionToSql=require('../../database/connection')

const getAllAuctionItems=async(req,res)=>{
connectionToSql.query('SELECT * FROM auction_item',(err,result)=>{
    if(err){
        console.log("Sorry but auction cannot get items")
        res.json({
            status:false,
            message:"Sorry but auction cannot get item"
        })
        console.log(err)
    }
    else{
        
        res.status(200).json(result)
            
        
    }
    
})

}
const getAuctionItemById=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('SELECT * FROM auction_item WHERE auction_item_lot_number=?',[id],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot get items")
            res.json({
                status:false,
                message:"Sorry but auction cannot get items"
            })
            console.log(err)
        }
        else{
            res.json(result)
        }
        
    })
}
const searchItem=async(req,res)=>{
    const {artist_name,produced_date,classification,description,auction,item_price,auction_category,item_medium,framed,image_type,item_material_used,item_height,item_width,item_length,item_weight,item_status}=req.body;
    connectionToSql.query('SELECT * FROM auction_item WHERE artist_name=? OR produced_date=? OR classification=? OR description=? OR auction=? OR item_price=? OR auction_category=? OR item_medium=? OR framed=? OR image_type=? OR item_material_used=? OR item_height=? OR item_width=? OR item_length=? OR item_weight=? OR item_status=?',[artist_name,produced_date,classification,description,auction,item_price,auction_category,item_medium,framed,image_type,item_material_used,item_height,item_width,item_length,item_weight,item_status],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot get items")
            res.json({
                status:false,
                message:"Sorry but auction cannot get items"
            })
            console.log(err)
        }
        else{
            res.json(result)
        }
        
    })
}


const createAuctionItem=async(req,res)=>{
    
        

        
        const {seller_id,artist_name,produced_date,classification,description,auction,item_price,image_url,auction_category,item_medium,framed,image_type,item_material_used,item_height,item_width,item_length,item_weight,item_sold,item_status}=req.body;
        connectionToSql.query('INSERT INTO auction_item(seller_id,artist_name,produced_date,classification,description,auction,item_price,image_url,auction_category,item_medium,framed,image_type,item_material_used,item_height,item_width,item_length,item_weight,item_sold,item_status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[seller_id,artist_name,produced_date,classification,description,auction,item_price,image_url,auction_category,item_medium,framed,image_type,item_material_used,item_height,item_width,item_length,item_weight,item_sold,item_status],(err,result)=>{
            if(err){
                console.log("Sorry but auction cannot add items")
                res.json({
                    status:false,
                    message:"Sorry but auction cannot add items"
                })
                console.log(err)
            }
            else{
               
                res.json({
                    status:true,
                    message:"Item Created",
                    data:result
                })
            }
            
        })
  

    
    

}
const editAuctionItem=async(req,res)=>{
    const id=req.params.id;
    const {artist_name,produced_date,classification,description ,auction,item_price,auction_category,item_medium,framed,image_type,item_material_used,item_height,item_width,item_length,item_weight,item_sold,item_status}=req.body;
    connectionToSql.query('UPDATE auction_item SET artist_name=?,produced_date=?,classification=?,description=?,auction=?,item_price=?,image_url=?,auction_category=?,item_medium=?,framed=?,image_type=?,item_material_used=?,item_height=?,item_width=?,item_length=?,item_weight=?,item_sold=?,item_status=? WHERE auction_item_lot_number=?',[artist_name,produced_date,classification,description,auction,item_price,auction_category,item_medium,framed,image_type,item_material_used,item_height,item_width,item_length,item_weight,item_sold,item_status,id],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot update items")
            res.json({
                status:false,
                message:"Sorry but auction cannot update items"
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
const archiveItem=async(req,res)=>{
    const id=req.params.id;
    const {item_status}=req.body;
    connectionToSql.query('UPDATE auction_item SET item_status=? WHERE auction_item_lot_number=?',[item_status,id],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot archive items")
            res.json({
                status:false,
                message:"Sorry but auction cannot archive items"
            })
            console.log(err)
        }
        else{
            res.json({
                status:true,
                message:"Item Archived"
            })
        }
        
    })
}
const removeAuctionItem=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('DELETE FROM auction_item WHERE auction_item_lot_number=?',[id],(err,result)=>{
        if(err){
            console.log("Sorry but auction cannot remove items")
            res.json({
                status:false,
                message:"Sorry but auction cannot remove items"
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
    getAllAuctionItems,
    getAuctionItemById,
    createAuctionItem,
    editAuctionItem,
    removeAuctionItem,
    archiveItem,
    searchItem
}