import axios from "../../request/axios";
import "./item.css";
import { useState, useEffect } from "react";

export default function Items(props) {
  const [bid,setBid]=useState(
    {
      bidder:'',
      bid_item:'',
      bid_seller:'',
      bid_price:'',
      bid_time:new Date().toISOString().slice(11, 19),
      
      
    }
  );
  const [allBids,setAllBids]=useState([]);
  const [isBuyer,setIsBuyer]=useState(false);
  const [message,setMessage]=useState([]);
  useEffect(()=>{
    console.log(new Date().toISOString().slice(11, 19));
    async function getAllBids()
      {
        
        const response = await axios.get('/bids');
        setAllBids(response.data);
        
      }
      JSON.parse(localStorage.getItem('role')).map(
        role=>{
          if(role.role_id==2 || role.role_id==7)
          {
            setIsBuyer(true);
          }

          }
        
      )
      
      
      getAllBids();
      
  },[allBids]);
  return (
    <div className="project" id="project">
      
  <div className="container mx-auto mt-4">
  <div className="row">
    {props.items.map((item) => (
       <div className="col-md-4" key={item.auction_item_lot_number}>
         <div className="card" style={{width: '18rem'}}>
         <img src={!item.image_url?"https://i.pinimg.com/originals/66/89/7f/66897f3154b62f1e15c5c90bf62302c4.png":item.image_url} className="card-img-top" alt="No Image Available" />
          
           <div className="card-body">
             <h5 className="card-title">{item.artist_name}</h5>
             <h6 className="card-subtitle mb-2 text-muted">{item.produced_date}</h6>
             <p className="card-text">{item.description}</p>
             <a href="#" className="btn mr-2"><i className="fas fa-link" />Price: {item.item_price}</a>
             <a href="#" className="btn "><i className="fab fa-github" />Classification: {item.classification}</a>

             {
               isBuyer?
               allBids.filter(bid=>bid.bid_item==item.auction_item_lot_number && bid.bidder==localStorage.getItem('user_id')).length>0?
               <div class="alert alert-dismissible alert-info"> <strong>Your bid has been placed</strong> </div>:

                      
             <div>

           <form>
              <div className="form-group">
                
                <input type="number" className="form-control" id="exampleFormControlSelect1" placeholder="Enter Bid Amount" 
                onChange={
                  (e)=>{
                    setBid({
                      ...bid,
                      bid_price:e.target.value
                    })
                  }
                }
                value={bid.bid_price}
                />
              </div>
              <button type="submit" className="btn btn-primary"
              onClick={
                async (e)=>{
                  e.preventDefault();
                await axios.post('/bids',{
                  bidder:localStorage.getItem('user_id'),
                  bid_item:item.auction_item_lot_number,
                  bid_seller:item.seller_id,
                  bid_price:bid.bid_price,
                  

                }).then(res=>{
                  setMessage('Bid Added Successfully')
                  
                  
                }).catch(err=>{
                  setMessage('Bid Failed')
                })
              }
              }
              >Bid</button>
              
      

                
           </form>
            </div>
            :null
}
           </div>
         </div>
        
       </div>    
        ))
      }
      </div>
      </div>
    </div>
  );
}
