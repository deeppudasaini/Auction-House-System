import "./App.css";
import axios from './request/axios';
import React,{Fragment,componentDidMount} from 'react';
import {useEffect,useState} from 'react';
import Login from "./views/Login/Login";
import AdminAuctions from "./views/Admin/AdminAuctions";
import Footer from "./components/Footer/Footer";
import Register from "./views/Register/Register";
import AdminDashboard from "./views/Admin/AdminDashboard";
import Navigation from "./components/Navigation/Navigation";
import AdminItems from "./views/Admin/AdminItems";
import SellerItems from "./views/Seller/SellerItems";
import SellerDashboard from "./views/Seller/SellerDashboard";
import BuyerDashboard from "./views/Buyer/BuyerDashboard";
import AdminUsers from './views/Admin/AdminUsers';
import AuctionEdit from "./components/Form/AuctionEdit";
import ItemEdit from "./components/Form/ItemEdit";
import BoughtItems from "./views/Buyer/BoughtItems";
import PageNotFound from "./components/404Error/PageNotFound";
import Report from "./container/Report/Report";
import AdminBid from "./views/Admin/AdminBid";
import AdminRoles from "./views/Admin/AdminRoles";
import { BrowserRouter as Router, Redirect, Routes, Route, Link } from "react-router-dom";

import UserEdit from "./components/Form/UserEdit";


export default function App() {
const [bid,setBid] = useState([]);
const [auction,setAuction] = useState([]);
const [items,setItems] = useState([]);
const [users,setUsers] = useState([]);

// useEffect(
//   () => {
//     const fetchAuctionData=async()=>{
//       await axios.get("/auctions").then
//       (res=>{
//           setAuction(res.data);
//       })
//     }

//     const fetchBidData = async () => {
//       await axios.get("/bids").then(res => {
//         setBid(res.data);
//       });
//     };
//     // const fetchItemsData = async () => {
//     //   await axios.get("/items").then(res => {
//     //     setItems(res.data);
//     //   });
//     // };
//     // const fetchUsersData = async () => {
//     //   await axios.get("/users").then(res => {
//     //     setUsers(res.data);
//     //   });
//     // };
//     const checkForAuctionTiming = async () => {
//       auction.map(auction => {
        
//         console.log(new Date(auction.auction_time));
//         // console.log(strtotime);
//         if (new Date(auction.auction_time) < new Date()) {
//          console.log("Auction has ended");
//         }
//       })
//     }
//     // fetchUsersData();
    
    
//       fetchAuctionData();
//       // fetchItemsData();
//       fetchBidData();
//       checkForAuctionTiming();
    
 
    
    


    
    

//   },
//   [ auction, bid]
// )
  return (
    <div className="App">
    
       <Router>
         <Fragment>
        <Navigation />
        <Routes>
        <Route exact path="/" element={<Login/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path='/pageNotFound' element={<PageNotFound/>}/>
          <Route exact path="/dashboard" element={  
                  <AdminDashboard />
              }/>
                      <Route exact path="/buyer-dashboard" element={
              
                <BuyerDashboard />
              
             
           }/>
                      <Route exact path="/seller-dashboard" element={
                  <SellerDashboard />
              }/>

          <Route exact path="/auction" element={
            
          
           
             
              <AdminAuctions />
             
             
           
          
               
          
          
        }/>
          
          
          <Route exact path="/role" element={<AdminRoles/>}/>
          <Route exact path="/bid" element={<AdminBid/>}/>
          <Route exact path="/item" element={<AdminItems/>}/>
          <Route exact path="/user" element={<AdminUsers/>}/>
          <Route exact path="/user/:id" element={<UserEdit/>}/>
          <Route exact path="/auction/:id" element={<AuctionEdit/>}/>
       

          <Route exact path="/seller-items" element={<SellerItems/>}/>
          <Route exact path="/items/:id" element={<ItemEdit/>}/>
   
          <Route exact path="/buyer" element={<BuyerDashboard/>}/>
          <Route exact path="/buyer-items" element={<BoughtItems/>}/>
          <Route exact path="/report/:auction_id" element={<Report/>}/>
    
          
          
         
          </Routes>
  
          <Footer/>
          </Fragment>
        </Router>
      
    </div>
  );
} 




