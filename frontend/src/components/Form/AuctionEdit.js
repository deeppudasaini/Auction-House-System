
import {useState,useEffect} from 'react';
import axios from '../../request/axios';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
export default function AuctionEdit() {
    const { id } = useParams(); 
    const [auction,setAuction]=useState({
        auction_title:'',
        auction_description:'',
        auction_start_date:'',
        
        auction_time:'',
        });
    const [afterMessage,setAfterMessage]=useState(false);
    const [error,setError]=useState(false);
useEffect(()=>{
    async function getAuction(){
        
        const response=await axios.get(`/auctions/${id}`);
         
        setAuction(response.data[0]);
    }
    getAuction();
},[]);


    return (<div>
        <h1>Edit Auctions</h1>
        <form className="mx-5">
        {
             error?
           
        <div class="alert alert-dismissible alert-danger">
          
          <strong>Sorry</strong> Cannot Edit user
        </div>:afterMessage?
        <div class="alert alert-dismissible alert-success">
        
        <strong>Well done!</strong> User Editted
      </div>:null
    }
          <div className="form-group my-4" >
            
            <input type="text" className="form-control" id="title" placeholder="Title" onChange={(e)=>{setAuction({...auction,auction_title:e.target.value})}} value={auction.auction_title}/>
          </div>
          <div className="form-group my-4">
     
            <textarea className="form-control" id="description" placeholder="Descriptions" rows="3" onChange={(e)=>{setAuction({...auction,auction_description:e.target.value})}} value={auction.auction_description}></textarea>
          </div>
          <div className="form-group my-4">
            <h4 htmlFor="startDate">Start Date</h4>
            <input type="date" className="form-control"  id="startDate" placeholder="Start Date" onChange={(e)=>{setAuction({...auction,auction_start_date:e.target.value})}} value={auction.auction_start_date}/>
          </div>
          
          <div className="form-group my-4">
            <h4 htmlFor="startPrice">Start Time</h4>
            <input type="time" className="form-control" id="startTime" onChange={(e)=>{setAuction({...auction,auction_time:e.target.value})}} value={auction.auction_time}/>
          </div>
         <div className="form-group my-4">
         <button class="btn btn-lg btn-success" type="button" onClick={
                async function editAuction(){
                    try{
                        const response=await axios.put(`/auctions/${id}`,auction);
                        setAfterMessage(true);
                        setError(false);
                    }
                    catch(e){
                        setError(true);
                        setAfterMessage(false);
                    }
                }
         }>Edit</button>
         <button class="btn btn-lg btn-danger" type="button">
            <Link to="/auction">Back</Link>
         </button>
         </div>
    
    
        </form>
      </div>);
}
