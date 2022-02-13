import CategoryItemGraph from "../../components/Graph/CategoryItemGraph"
import {useState,useEffect} from 'react';
import ItemPriceGraph from "../../components/Graph/ItemPriceGraph";
import axios from '../../request/axios';
import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";
import { useParams } from "react-router";
export default function Report(props)
{
    const{auction_id}=useParams();
    const [itemGraphDataByCatagory,setItemGraphDataByCatagory]=useState([]);
    function printAuctionReport()
    {
        htmlToImage.toPng(document.getElementById('report-to-print'), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          const pdf = new jsPDF();
          const imgProps= pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(dataUrl, 'PNG', 0, 0,pdfWidth, pdfHeight);
          pdf.save("download.pdf"); 
        });
    }
const [auction,setAuction]=useState([]);
    useEffect(()=>{
        const fetchItemGraphData=async()=>{
            await axios.get("/items").then
            (res=>{
                setItemGraphDataByCatagory(
                    res.data
                );
            })

        }
        const fetchAuction=async()=>{
            await axios.get("/auctions/"+auction_id).then
            (res=>{
                setAuction(res.data);
            })
        }

        fetchAuction();
        fetchItemGraphData();
    },[]);
    
    return(
        <div>
        <div id="report-to-print">
            <h1>Report</h1>

            <div>
                <h2><u>Auction Name</u>: {auction.map((auction)=>{
                    return auction.auction_title;
                })}</h2>
                <h3><u>Number of items listed in the auctions</u>: {
                  itemGraphDataByCatagory.filter(item=>{
                    return item.auction==auction_id
                }).length
                    
                    }</h3>
                   
                
            </div>
            <div>
            <CategoryItemGraph itemGraphDataByCatagory={
                itemGraphDataByCatagory.filter(item=>{
                    return item.auction==auction_id
                })
            }/>
                    
               
            </div>
            <div>
            <ItemPriceGraph 
                itemGraphDataByCatagory={
                    itemGraphDataByCatagory.filter(item=>{
                        return item.auction==auction_id
                    })
                }
            />
                    
               
            </div>
        </div>
        <button className="btn btn-outline-success" onClick={printAuctionReport}>Print Report</button>
        </div>
    )
}