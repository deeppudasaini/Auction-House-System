const express=require('express');
const auctionItemRouter=express.Router();

const {   getAllAuctionItems,
    getAuctionItemById,
    createAuctionItem,
    editAuctionItem,
    archiveItem,
    searchItem,
    removeAuctionItem}=require('../../controllers/AuctionItems/auctionItems.controller');
   

auctionItemRouter.route('/').get(getAllAuctionItems).post(createAuctionItem);
auctionItemRouter.route('/archive/:id').put(archiveItem);
auctionItemRouter.route('/:id').get(getAuctionItemById).put(editAuctionItem).delete(removeAuctionItem);
auctionItemRouter.route('/search').post(searchItem);
module.exports=auctionItemRouter;