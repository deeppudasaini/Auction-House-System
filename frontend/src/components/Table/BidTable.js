import axios from '../../request/axios';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
export default function BidTable(props) {  
  const [bid,setBid] = useState([]);
const [users,setUsers]=useState([]);
 const [items,setItems]=useState([]);
  useEffect(()=>{

   
    async function getBids(){
      const response = await axios.get('/bids');
      setBid(response.data);
    }
    async function getUsers(){
        const response = await axios.get('/users');
        setUsers(response.data);
        }
    async function getItems(){
        const response = await axios.get('/items');
        setItems(response.data);
        }
        getUsers();
  getItems();
   
    getBids();
   
  },[]);

  
    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              
              <th scope="col">Bidder</th>
              <th scope="col">Item Lot number</th>
              <th scope='col'>Bidding Time</th>
              
              <th scope="col">Item Seller</th>
              <th scope="col">Item Original Price</th>
              <th scope="col">Item Advance Bid Price</th>
              <th scope="col">Commission</th>
              
              
            </tr>
          </thead>
          <tbody>
            {bid.map(bid => (
  
            <tr class="table-secondary">
              
              <td>{
              users.map
              (user=>{
                   if(user.user_id===bid.bidder){
                      return user.first_name+" "+user.last_name
                   }
                 }
              )
                }</td>
              <td>{
                   items.map(
                        item=>{
                            if(item.auction_item_lot_number===bid.bid_item){
                                return item.auction_item_lot_number
                            }
                            }
                   )
}
              </td>
              <td>{bid.bid_time}</td>
                
              <td>{
              users.map
              (user=>{
                   if(user.user_id===bid.bid_seller){
                      return user.first_name+" "+user.last_name
                   }
                 }
              )
                }</td>
                   <td>{
                   items.map(
                        item=>{
                            if(item.auction_item_lot_number===bid.bid_item){
                                return item.item_price
                            }
                            }
                   )
}
              </td>
              <td>{bid.bid_price}</td>
                <td>{
                 Math.round(parseInt(bid.bid_price)*0.1)
}
                </td>
              
             
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  