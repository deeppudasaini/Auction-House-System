import axios from '../../request/axios';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/Search/Search';
export default function ItemTable(props) {
  const [auctions,setAuctions] = useState([]);
  const [category,setCategory] = useState([]);
  const [user,setUser] = useState([]);
  
  useEffect(()=>{
    async function getAllAuctions()
    {
      
      const response = await axios.get('/auctions');
      
      setAuctions(response.data);
    }
    async function getAllCategory(){
      const response = await axios.get('/categories');
      setCategory(response.data);
    }
    async function getUsers(){
      const response = await axios.get('/users');
      setUser(response.data);
    }
    
    getAllAuctions();
    getAllCategory();
    getUsers();
  },[]);
    function removeItem(id) {
      props.removeItem(id);
    }
    return (
      <div>
       <Search />
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Item lot Number</th>
              <th scope="col">Seller</th>
              <th scope="col">Artist Name</th>
              <th scope="col">Produced Date</th>
              <th scope="col">Classification</th>
              <th scope="col">Description</th>
              <th scope="col">Auction Presented In</th>
              <th scope="col">Item price</th>
              <th scope="col">Category</th>
              <th scope="col">Medium</th>
              <th scope="col">Framed</th>
              <th scope="col">Image Type</th>
              <th scope="col">Material Used</th>
              <th scope="col">Height</th>
              <th scope="col">Width</th>
              
              <th scope="col">Length</th>
              <th scope="col">Weight</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {props.items.map(item => (
  
            <tr class="table-secondary">
              <td>{item.auction_item_lot_number}</td>
              <td>{
                user.map(user => {
                  if(user.user_id === item.seller_id){
                    return user.first_name+' '+user.last_name;
                  }
                })
              }</td>
              <td>{item.artist_name}</td>
              <td>{item.produced_date}</td>
              <td>{item.classification}</td>
              <td>{item.description}</td>
              <td>{
                auctions.map(auction => {
                  if(auction.auction_id === item.auction){
                    return auction.auction_title;
                  }
                })
}</td>
              <td>{item.item_price}</td>
              <td>{
                category.map(category => {
                  if(category.auction_category_id === item.auction_category){
                    return category.category_name;
                  }
                })
                }</td>
              <td>{item.item_medium}</td>
              <td>{
                item.framed === 1 ? 'Yes' :item.framed===0 ?'No':null
                }</td>
              <td>{item.image_type}</td>
              <td>{item.item_material_used}</td>
              <td>{item.item_height}</td>
              <td>{item.item_width}</td>
              <td>{item.item_length}</td>
              <td>{item.item_weight}</td>
              
              
              <td>{item.item_status==1?"Unarchived":"Archived"}</td>
              <td>
                {
JSON.parse(localStorage.getItem('role')).map(role=>{
  if(role.role_id==5||role.role_id==7)
  {
    return(<div>
              <button type="button" class="btn btn-warning mx-1">
                <Link to={`/items/${item.auction_item_lot_number}`}>
                Edit
                  </Link>
              </button>
  <button type="button" class="btn btn-danger mx-1" 
  onClick={
    () => removeItem(item.auction_item_lot_number)
  }>Delete</button>
  </div>)
  }
})
}

  {
    JSON.parse(localStorage.getItem('role')).map(role=>{
      if(role.role_id==1)
      {
        return (<div>
          <button type="button" class={item.item_status==1?"btn btn-danger mx-1":"btn btn-success mx-1"} onClick={item.item_status==1?
            () => props.archiveItem(item.auction_item_lot_number)
          :
          () => props.unarchiveItem(item.auction_item_lot_number)
          }>{item.item_status==1?"Hide":"Show"}</button>
          </div>)
      }
    })
}
                </td>
              
              
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  