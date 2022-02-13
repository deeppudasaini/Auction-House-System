const express=require('express');
const userRouter=express.Router();

const {getAllUsers,getUserById,removeUser,editUser,archiveUser,registerUserToAuctionHouse,loginIntoAuctionHouse,logout}=require('../../controllers/User/user.controller');

userRouter.route('/').get(getAllUsers);
userRouter.route('/:id').get(getUserById).delete(removeUser).put(editUser);
userRouter.route('/archive/:id').put(archiveUser);
userRouter.route('/register').post(registerUserToAuctionHouse);
userRouter.route('/login').post(loginIntoAuctionHouse);
userRouter.route('/logout/:id').get(logout);
module.exports=userRouter;