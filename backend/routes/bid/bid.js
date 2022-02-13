const express=require('express');
const bidRouter=express.Router();
const {getAllBids,getBidById,createBid}=require('../../controllers/Bid/bid.controller');

bidRouter.route('/').get(getAllBids).post(createBid);
bidRouter.route('/:id').get(getBidById);

module.exports=bidRouter;