const express=require('express');
const saleRouter=express.Router();
const {getAllSales,getSaleById,createSale,removeSale}=require('../../controllers/Sale/sale.controller');

saleRouter.route('/').get(getAllSales).post(createSale);
saleRouter.route('/:id').get(getSaleById).delete(removeSale);

module.exports=saleRouter;