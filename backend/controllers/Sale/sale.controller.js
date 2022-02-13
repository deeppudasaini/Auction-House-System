// const Sale=require('../models/Sale');
const connectionToSql=require('../../database/connection')
const getAllSales=async(req,res)=>{
connectionToSql.query('SELECT * FROM sale',(err,result)=>{
    if(err){
        console.log("Cannot Get Sale")
        res.json({
            status:false,
            message:"Cannot Get Sale"
        })
        console.log(err)
    }
    else{
        
        res.status(200).json(result)
            
        
    }
    
})

}

const getSaleById=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('SELECT * FROM sale WHERE sale_id=?',[id],(err,result)=>{
        if(err){
            console.log("Cannot Get Sale")
            res.json({
                status:false,
                message:"Cannot Get Sale"
            })
            console.log(err)
        }
        else{
            res.json(result)
        }
        
    })
}
const createSale=async(req,res)=>{
    const {winning_bidder,commission,item_id,sale_price}=req.body;
    connectionToSql.query('INSERT INTO sale(winning_bidder,commission,item_id,sale_price) VALUES(?,?,?,?)',[sale_id,winning_bidder,commission,item_id,sale_price],(err,result)=>{
        if(err){
            console.log("Cannot Create Sale")
            res.json({
                status:false,
                message:"Cannot Create Sale"
            })
            console.log(err)
        }
        else{
           
            res.json({
                status:true,
                message:"Sale Created",
                data:result
            })
        }
        
    })

}
// const editSale=async(req,res)=>{
//     const id=req.params.id;
//     const {sale_title,sale_description,sale_start_date,sale_time,sale_end_date,sale_status}=req.body;
//     connectionToSql.query('UPDATE sale SET sale_title=?,sale_description=?,sale_start_date=?,sale_end_date=?,sale_time=?,sale_status=? WHERE sale_id=?',[sale_title,sale_description,sale_start_date,sale_end_date,sale_time,sale_status,id],(err,result)=>{
//         if(err){
//             console.log("Cannot Update Sale")
//             res.json({
//                 status:false,
//                 message:"Cannot Update Sale"
//             })
//             console.log(err)
//         }
//         else{
//             res.json({
//                 status:true,
//                 message:"Sale Updated",
                
//             })
//         }
        
//     }
//     )
// }
const removeSale=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('DELETE FROM sale WHERE sale_id=?',[id],(err,result)=>{
        if(err){
            console.log("Cannot Delete Sale")
            res.json({
                status:false,
                message:"Cannot Delete Sale"
            })
            console.log(err)
        }
        else{
            res.json({
                status:true,
                message:"Sale Deleted",
            })
        }
        
    })
}   
module.exports={
    
    getAllSales,
    getSaleById,
    createSale,
    removeSale
}