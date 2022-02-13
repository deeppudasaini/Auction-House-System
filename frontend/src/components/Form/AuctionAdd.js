import {useState,useEffect} from 'react';
import axios from '../../request/axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function AuctionAdd() {
  const [calendar, setCalendar] = useState(new Date());
  const [auctionDetails,setAuctionDetails]=useState({
    auction_title:'',
    auction_description:'',
    auction_start_date:'',
    
    auction_time:'',
    auction_status:1});
const [afterMessage,setAfterMessage]=useState(false);
const [error,setError]=useState(false);
  
    async function insertAuction(){
      
      if(new Date(auctionDetails.auction_start_date).getDay()==2 || new Date(auctionDetails.auction_start_date).getDay()==6){
      
    
      const response=await axios.post('/auctions',{
        auction_title:auctionDetails.auction_title,
        auction_description:auctionDetails.auction_description,
        auction_start_date:auctionDetails.auction_start_date,
        auction_time:auctionDetails.auction_time,
        
        auction_status:true

      }).then(res=>{
        setAfterMessage(true);
        setError(false);
      }).catch(err=>{
        console.log(err);
        setError(true);
        setAfterMessage(false);
      });
    }
    else
    {
      setError(true);
      setAfterMessage(false);
    }

      
   
      
    }

  return (<div>
    
    <h1>Add Auctions</h1>
    <div>
      <Calendar
        
        value={calendar}
       onChange={
         
          (date)=>{
            setCalendar(date);
            
            
          }

       }
        
      />
    </div>
    <form className="mx-5">
    {
         error?
       
    <div class="alert alert-dismissible alert-danger">
      
      <strong>Sorry</strong> Cannot Add user
    </div>:afterMessage?
    <div class="alert alert-dismissible alert-success">
    
    <strong>Well done!</strong> User Created
  </div>:null
}

      <div className="form-group my-4" >
        
        <input type="text" className="form-control" id="title" placeholder="Title" onChange={(e)=>{setAuctionDetails({...auctionDetails,auction_title:e.target.value})}} value={auctionDetails.auction_title}/>
      </div>
      <div className="form-group my-4">
 
        <textarea className="form-control" id="description" placeholder="Descriptions" rows="3" onChange={(e)=>{setAuctionDetails({...auctionDetails,auction_description:e.target.value})}} value={auctionDetails.auction_description}></textarea>
      </div>
      <div className="form-group my-4">
        <h4 htmlFor="startDate">Start Date</h4>
        <input type="date" className="form-control"  id="startDate" placeholder="Start Date" onChange={(e)=>{setAuctionDetails({...auctionDetails,auction_start_date:e.target.value})}} value={auctionDetails.auction_start_date}/>
      </div>
     
      <div className="form-group my-4">
        <h4 htmlFor="startPrice">Start Time</h4>
        <input type="time" className="form-control" id="startTime" onChange={(e)=>{setAuctionDetails({...auctionDetails,auction_time:e.target.value})}} value={auctionDetails.auction_time}/>
      </div>
     <div className="form-group my-4">
     <button class="btn btn-lg btn-success" type="button" onClick={insertAuction}>Add</button>
     </div>


    </form>
  </div>);
}
