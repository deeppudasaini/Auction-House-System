import {useState,useEffect} from 'react';
import axios from '../../request/axios';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
export default function ItemEdit(props) {
  const {id} = useParams();

  const [auctions,setAuctions] = useState([]);
  const [category,setCategory] = useState([]);
  const [itemDetails,setItemDetails]=useState({
    seller_id:"",
    artist_name: "",
    user_id: "",
    produced_date: "",
    classification: "",
    description: "",
    auction: "",
    item_price: "",
    auction_category: "",
    item_medium: "",
    framed: "",
    image_type: "",
    item_material_used: "",
    item_height: "",
    item_width :"",
    item_length: "",
    item_weight: "",
    item_status: ""});
  const [user,setUser] = useState([]);
  const [afterMessage,setAfterMessage]=useState(false);
  const [error,setError]=useState(false);

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
    async function getItems()
  {
    const response = await axios.get('/items/'+id);
    console.log(response.data[0]);
    setItemDetails(response.data[0]);
  }
    async function getUsers(){
      const response = await axios.get('/users');
      setUser(response.data);
    }
    
    getAllAuctions();
    getAllCategory();
    getUsers();
    getItems();
  },[]);

  


  
   






  return (<div>
    <h1>Edit Items</h1>
    <form className="mx-5">
    {
         error?
       
    <div class="alert alert-dismissible alert-danger">
      
      <strong>Sorry</strong> Cannot Edit Item
    </div>:afterMessage?
    <div class="alert alert-dismissible alert-success">
    
    <strong>Well done!</strong> Item Edited Successfully
  </div>:null
}
      <div className="form-group my-4" >
        
        <input type="text" className="form-control" id="artist_name" placeholder="Artist Name" onChange={(e)=>{setItemDetails({...itemDetails,artist_name:e.target.value})}} value={itemDetails.artist_name}/>
      </div>
      <div className="form-group my-4">
        <h4 htmlFor="endDate">Produced Date</h4>
        <input type="date" className="form-control" id="endDate" onChange={(e)=>{setItemDetails({...itemDetails,produced_date:e.target.value})}} value={itemDetails.produced_date}/>
      </div>
      <div className="form-group my-4">
 
 
</div>
      <div className="form-group my-4" >
        
        <input type="text" className="form-control" id="classification" placeholder="Classification" onChange={(e)=>{setItemDetails({...itemDetails,classification:e.target.value})}} value={itemDetails.classification}/>
      </div>
      <div className="form-group my-4">
      <textarea className="form-control" id="description" placeholder="Descriptions" rows="3" onChange={(e)=>{setItemDetails({...itemDetails,description:e.target.value})}} value={itemDetails.description}></textarea>
      </div>
      <div className="form-group my-4">
      <select className="form-control" id="auction" onChange={(e)=>{setItemDetails({...itemDetails,auction:e.target.value})}} value={itemDetails.auction}>
        <option>Select Auction</option>
        {auctions.map((auction,index)=>{
          return <option key={index} value={auction.auction_id} className='text-primary'>{auction.auction_title}</option>
        })}
      </select>
      </div>
      <div className="form-group my-4" >
        
        <input type="number" className="form-control" id="artist_name" placeholder="Item Price" onChange={(e)=>{setItemDetails({...itemDetails,item_price:e.target.value})}} value={itemDetails.item_price}/>
      </div>
      <div className="form-group my-4">
      <select className="form-control" onChange={(e)=>{setItemDetails({...itemDetails,auction_category:e.target.value})}} value={itemDetails.auction_category} disabled>
        <option>Select Categories</option>
        {category.map((category,index)=>{
          return <option key={index} value={category.auction_category_id} className='text-primary'>{category.category_name}</option>
        })}
      </select>
      </div>
      {
        itemDetails.auction_category==1 || itemDetails.auction_category==3?
        <div>
      <div className="form-group my-4" >
        
        <input type="text" className="form-control" id="item_medium" placeholder="Item Medium" onChange={(e)=>{setItemDetails({...itemDetails,item_medium:e.target.value})}} value={itemDetails.item_medium}/>

      </div>
<div className='form-check'>
<input className='form-check-input' type='radio' name='framed'  value='1' onChange={(e)=>{setItemDetails({...itemDetails,framed:e.target.value})}} checked={itemDetails.framed==1}/>
<label className='form-check-label' htmlFor='framed'>Framed</label>

</div>
<div className='form-check'>
<input className='form-check-input' type='radio' name='framed' value='0' onChange={(e)=>{setItemDetails({...itemDetails,framed:e.target.value})}} checked={itemDetails.framed==0}/>
<label className='form-check-label' htmlFor='framed'>Unframed</label>

</div>

    </div>
      :
      null
      }
      {
        itemDetails.auction_category==5?
      <div className="form-group my-4" >
        
        <input type="text" className="form-control"  placeholder="Image Type" onChange={(e)=>{setItemDetails({...itemDetails,image_type:e.target.value})}} value={itemDetails.image_type}/>
      </div>:null
}
{
  itemDetails.auction_category==2 || itemDetails.auction_category==4?
      <div className="form-group my-4" >
        
        <input type="text" className="form-control"  placeholder="Material Used" onChange={(e)=>{setItemDetails({...itemDetails,item_material_used:e.target.value})}} value={itemDetails.item_material_used}/>
      </div>:null
}     
      <div className="form-group my-4" >
        
        <input type="number" className="form-control"  placeholder="Height" onChange={(e)=>{setItemDetails({...itemDetails,item_height:e.target.value})}} value={itemDetails.item_height}/>
      </div>
      
      <div className="form-group my-4" >
        
        <input type="number" className="form-control"  placeholder="Length" onChange={(e)=>{setItemDetails({...itemDetails,item_length:e.target.value})}} value={itemDetails.item_length}/>
      </div>
      {
        itemDetails.auction_category==2 || itemDetails.auction_category==4?
        <div>
      <div className="form-group my-4" >
        
        <input type="number" className="form-control"  placeholder="Width" onChange={(e)=>{setItemDetails({...itemDetails,item_width:e.target.value})}} value={itemDetails.item_width}/>
      </div>
      <div className="form-group my-4" >
        
        <input type="number" className="form-control"  placeholder="Weight" onChange={(e)=>{setItemDetails({...itemDetails,item_weight:e.target.value})}} value={itemDetails.item_weight}/>
      </div>
      </div>:null
}
      
     <div className="form-group my-4">
     <button class="btn btn-lg btn-success" type="button" 
     onClick={
        ()=>{
          axios.put('/items/'+id,itemDetails).then(res=>{
            setAfterMessage(true)
            setError(false)

            
          }
          ).catch(err=>{
            
            setAfterMessage(false)
            setError(true)
          })
        }
     }
     >Edit</button>
     <button class="btn btn-lg btn-danger" type="button">
       <Link to='/item'>Cancel</Link>
     </button>
     </div>


    </form>
  </div>);
}
