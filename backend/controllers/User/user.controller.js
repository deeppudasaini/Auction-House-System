// const User=require('../models/User');
const connectionToSql=require('../../database/connection')
const getAllUsers=async(req,res)=>{
connectionToSql.query('SELECT * FROM user',(err,result)=>{
    if(err){
        console.log("Cannot Get User")
        res.json({
            status:false,
            message:"Cannot Get User"
        })
        console.log(err)
    }
    else{
        
        res.status(200).json(result)
            
        
    }
    
})

}
   const registerUserToAuctionHouse=async(req,res)=>{
       try{
           //import bcryptjs for the encryption of the password
        const bcrypt = require("bcryptjs");
//this creates the token for the user
        const jwt = require("jsonwebtoken");
        
        //request all the essential data from the user 
           const {first_name,last_name,email,contact,bank_account_number,bank_sort_code,password,confirmation_password,status}=req.body;

           
           const checkExistingUser = await connectionToSql.query('SELECT * FROM user WHERE email=?',[email],async(err,result)=>{
                if(err){
                    console.log("Cannot Get User")
                    res.json({
                        status:false,
                        message:"Cannot Get User"
                    })
                    console.log(err)
                }
                else{
                    if(result.length>0){
                       return res.status(200).json({
                            status:false,
                            message:"User Already Exists"
                        })
                    }
                    }
                })
        

               
            
           if (!first_name || !last_name || !email || !contact || !password || !confirmation_password) {
            
                return res.json({
                    status:false,
                    message:"Please fill all the fields",
                    
                })
            }
            else if(password!==confirmation_password){
                return res.json({
                    status:false,
                    message:"Password and Confirmation Password does not match"
                })
            }
            
            else{

            
             const hashedEncryptedPassword=await bcrypt.hash(password,13);
             const jwtUserToken =jwt.sign({
                email,
                
            },
            'secret',{
                expiresIn:"2h"
            }
             )
            
            const registeringUser= await connectionToSql.query('INSERT INTO user(first_name,last_name,email,contact,bank_account_number,bank_sort_code,password,confirmation_password,token,status) VALUES(?,?,?,?,?,?,?,?,?,?)',[first_name,last_name,email,contact,bank_account_number,bank_sort_code,hashedEncryptedPassword,hashedEncryptedPassword,jwtUserToken,status],
            (err,result)=>{
                if(err){
                    console.log("Cannot Register User")
                    console.log(err)
                    return res.json({
                        status:false,
                        message:"Cannot Register User"
                        })
                        
                        }
                        else{
                            return res.json({
                                status:true,
                                message:"User Registered Successfully",
                                data:result,
                                token:jwtUserToken
                            })
                        }
                    })
        }
       }
       catch(error){
           console.log(error)
           
       }
   }

   const loginIntoAuctionHouse=async(req,res)=>{
    const bcrypt = require("bcryptjs");
    const jwt = require("jsonwebtoken");
       try{
           const {email,password}=req.body;
           if(!email || !password){
               return res.json({
                   status:false,
                   message:"Please fill all the fields"
               })
           }
           const checkExistingUser=await connectionToSql.query('SELECT * FROM user WHERE email=?',[email],
           async (err,result)=>{
               if(err){
                   console.log("Cannot Get User")
                   res.json({
                       status:false,
                       message:"Cannot Get User"
                       })
                       console.log(err)
                       
                    }
                    else{
                    if(result.length===0){
                        return res.json({
                            status:false,
                            message:"User does not exist"
                        })
                    }
                       else if (await bcrypt.compare(password,result[0].confirmation_password)){
                            const loginToken=jwt.sign({
                                email,
                                
                            },'secret',{
                                'expiresIn':'3h'
                            })
                            const updateToken=await connectionToSql.query('UPDATE user SET token=? WHERE email=?',[loginToken,email],
                            (err,r)=>{
                                if(err){
                                    console.log("Cannot Update Token")
                                }
                                else{
                                    
                                    res.json({
                                        status:true,
                                        message:"User Logged In Successfully",
                                        data:result,
                                        token:loginToken
                                    })
                                    
                                }

                            })
                       }
                       else{
                           
                           res.json({
                                 status:false,
                                    message:"Invalid Email or Password",
                                    
                            })
                       }
                    }
                    });
        }
       catch(error){
           console.log(error)
       }
   }
   const logout=async(req,res)=>{
    const id=req.params.id;
    
    connectionToSql.query('UPDATE user SET token=? WHERE user_id=?',[null,id],(err,result)=>{
        if(err){
            console.log("Cannot Logout User")
            res.json({
                status:false,
                message:"Cannot Logout User"
            })
            console.log(err)
        }
        else{
            
            res.json({
                status:true,
                message:"User Logged Out Successfully",
            })
        }
        
    })
}

const archiveUser=async(req,res)=>{
    const id=req.params.id;
    const {status}=req.body;
    connectionToSql.query('UPDATE user SET status=? WHERE user_id=?',[status,id],(err,result)=>{
        if(err){
            console.log("Cannot Update User")
            res.json({
                status:false,
                message:"Cannot Update User"
            })
            console.log(err)
        }
        else{
            res.json({
                status:true,
                message:"User Updated ",
                
            })
        }
        
    }
    )
}
   
            
const getUserById=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('SELECT * FROM user WHERE user_id=?',[id],(err,result)=>{
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

const editUser=async(req,res)=>{
    const id=req.params.id;
    const {first_name,last_name,email,contact,bank_account_number,bank_sort_code}=req.body;
    connectionToSql.query('UPDATE user SET first_name=?,last_name=?,email=?,contact=?,bank_account_number=?,bank_sort_code=? WHERE user_id=?',[first_name,last_name,email,contact,bank_account_number,bank_sort_code,id],(err,result)=>{
        if(err){
            console.log("Cannot Update User")
            res.json({
                status:false,
                message:"Cannot Update User"
            })
            console.log(err)
        }
        else{
            res.json({
                status:true,
                message:"User Updated ",
                
            })
        }
    }
    )
}
const removeUser=async(req,res)=>{
    const id=req.params.id;
    connectionToSql.query('DELETE FROM user WHERE user_id=?',[id],(err,result)=>{
        if(err){
            console.log("Cannot Delete User")
            res.json({
                status:false,
                message:"Cannot Delete User"
            })
            console.log(err)
        }
        else{
            res.json({
                status:true,
                message:"User Deleted",
            })
        }
        
    })
}   
module.exports={
    
    getAllUsers,
    getUserById,
    registerUserToAuctionHouse,
    removeUser,
    loginIntoAuctionHouse,
    logout,
    archiveUser,
    editUser
}