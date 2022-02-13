const express=require('express');

const auctionCategoryRouter=express.Router();
const {  getAllAuctionCategories,
    getAuctionCategoryById,
   }=require('../../controllers/AuctionCategory/auctionCategory.controller');

auctionCategoryRouter.route('/').get(getAllAuctionCategories)
auctionCategoryRouter.route('/:id').get(getAuctionCategoryById)

module.exports=auctionCategoryRouter;