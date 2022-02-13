import { useState , useEffect } from "react";
import Items from "../../components/Items/Items.js";
import { Link } from 'react-router-dom';
import * as htmlToImage from 'html-to-image';
import UserDetails from '../../container/User/UserDetails';
import { jsPDF } from "jspdf";
import axios from "../../request/axios.js";

export default function BuyerDashboard() {
    const[buyerItems,setBuyerItems]=useState([]);
    const[auction,setAuction]=useState([]);
    function printAuctionCatalogue()
    {
        htmlToImage.toPng(document.getElementById('catalogue-to-print'), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          const pdf = new jsPDF();
          const imgProps= pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(dataUrl, 'PNG', 0, 0,pdfWidth, pdfHeight);
          pdf.save("Catalogue.pdf"); 
        });
    }
     useEffect(()=>{
        const fetchBuyerData=async()=>{
          await axios.get("/items").then
          (res=>{
            
            for(let i=0;i<res.data.length;i++){
              
                
                   setBuyerItems(res.data);
                
            }
          })
          
        }
        const fetchAuctionData=async()=>{
          await axios.get("/auctions").then
          (res=>{
              
             setAuction(res.data);
          })
        }
        fetchAuctionData();
        fetchBuyerData();
        
    },[]);
  return (
    <div>
      <UserDetails userId={localStorage.getItem('user_id')} />
      
      <div id="catalogue-to-print">
        
        
        <h1><u>Auction List</u></h1>
        {
            auction.map(auction=>{
              if(auction.auction_status==1){
                return(
                  <div className="alert alert-dismissible alert-success" key={auction.auction_id}>
                  
                  <h4 className="alert-heading">{auction.auction_title}</h4>
                  <p className="mb-0">Description: {auction.auction_description}</p>
                  <h5>Start Date: {auction.auction_start_date}</h5>
                  
                  <h5>Start Time: {auction.auction_time}</h5>
                  <Items items={
                    buyerItems.filter(item=>{
                        return item.auction==auction.auction_id && item.item_status==1;
                    })
                  } auctionId={auction.auction_id}/>
                  
                  <Link to={"/report/"+auction.auction_id}>
                  <button className="btn btn-primary">
                  View Auction
                  </button>
                  </Link>
                </div>
                )
              }
            })
        }        


        

        
        </div>
        <button className="btn btn-outline-success" onClick={printAuctionCatalogue}>Print Catalogue</button>
        </div>
  )
}