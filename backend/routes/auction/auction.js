const express=require('express');
const auctionRouter=express.Router();//auctionRouter is an instance of express.Router()
const {getAllAuctions,createAuction,archiveAuction,getAuctionById,editAuction,removeAuction}=require('../../controllers/Auction/auction.controller');


auctionRouter.route('/').get(getAllAuctions).post(createAuction);

auctionRouter.route('/:id').get(getAuctionById).put(editAuction).delete(removeAuction);


auctionRouter.route('/archive/:id').put(archiveAuction);

module.exports=auctionRouter;