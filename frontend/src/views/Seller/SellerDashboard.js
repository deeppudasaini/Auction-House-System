import { useState , useEffect } from "react";
import Items from "../../components/Items/Items.js";
import axios from "../../request/axios.js";
import UserDetails from '../../container/User/UserDetails';
export default function SellerDashboard() {
    const[sellerItems,setSellerItems]=useState([]);
     useEffect(()=>{
        const fetchSellerData=async()=>{
          await axios.get("/items").then
          (res=>{
                   setSellerItems(res.data);
          })
          
        }
        fetchSellerData();
    },[]);
  return (
    <div>
      <h1>My Details</h1>

      <UserDetails userId={localStorage.getItem('user_id')} />
      <hr className="mx-5"/>
        <h1>My Approved Items</h1>
        
        
        <Items items={
            sellerItems.filter(item=>{
                return item.seller_id==localStorage.getItem('user_id') && item.item_status==1;
            })
        }/>   
        
        </div>
  )

}