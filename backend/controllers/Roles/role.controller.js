// const Role=require('../models/Role');
const connectionToSql=require('../../database/connection')
const getAllRoles=async(req,res)=>{
connectionToSql.query('SELECT * FROM user_roles',(err,result)=>{
    if(err){
        console.log("Cannot Get Role")
        res.json({
            status:false,
            message:"Cannot Get Role"
        })
        console.log(err)
    }
    else{
        
        res.status(200).json(result)   
    }
    
})

}
  
const getRoleById=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('SELECT * FROM user_roles WHERE user_role_id=?',[id],(err,result)=>{
        if(err){
            console.log("Cannot Get Role")
            res.json({
                status:false,
                message:"Cannot Get Role"
            })
            console.log(err)
        }
        else{
            res.json(result)
        }
        
    })
}
const getRoleByUserId=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('SELECT * FROM user_roles WHERE user_id=?',[id],(err,result)=>{
        if(err){
            console.log("Cannot Get User")
            res.json({
                status:false,
                message:"Cannot Get User"
            })
            console.log(err)
        }
        else{
            res.json(result)
        }
        
    })
}
const createRole=async(req,res)=>{
    const {user_id,role_id}=req.body;
    connectionToSql.query('INSERT INTO user_roles(user_id,role_id) VALUES(?,?)',[user_id,role_id],(err,result)=>{
        if(err){
            console.log("Cannot Create Role")
            res.json({
                status:false,
                message:"Cannot Create Role"
            })
            console.log(err)
        }
        else{
            res.json(result)
        }
        
    })
    

}
const editRole=async(req,res)=>{
    const id=req.params.id;
    const {user_id,role_id}=req.body;
    connectionToSql.query('UPDATE user_roles SET user_id=?,role_id=? WHERE user_role_id=?',[user_id,role_id,id],(err,result)=>{
        if(err){
            console.log("Cannot Update Role")
            res.json({
                status:false,
                message:"Cannot Update Role"
            })
            console.log(err)
        }
        else{
            res.json({
                status:true,
                message:"Role Updated",
                
            })
        }
        
    }
    )
}

const removeRole=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('DELETE FROM user_roles WHERE user_role_id=?',[id],(err,result)=>{
        if(err){
            console.log("Cannot Delete Role")
            res.json({
                status:false,
                message:"Cannot Delete Role"
            })
            console.log(err)
        }
        else{
            res.json({
                status:true,
                message:"Role Deleted",
            })
        }
        
    })
}   
            
module.exports={
    getAllRoles,
    getRoleById,
    editRole,
    createRole,
    removeRole,
    getRoleByUserId
}