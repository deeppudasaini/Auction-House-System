import {useState,useEffect} from 'react';
import axios from '../../request/axios';
export default function ItemAdd(props) {
  const [auctions,setAuctions] = useState([]);
  const [category,setCategory] = useState([]);
  const [itemDetails,setItemDetails]=useState({
    seller_id:"",
    artist_name: "",
    
    produced_date: "",
    classification: "",
    description: "",
    auction: "",
    item_price: "",
    image_url: "",
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


  
    async function insertItem(){
      
        await axios.post('/items',
        {
            seller_id: localStorage.getItem('user_id'),
            artist_name: itemDetails.artist_name,
            user_id: itemDetails.user_id,
            produced_date: itemDetails.produced_date,
            classification: itemDetails.classification,
            description: itemDetails.description,
            auction: itemDetails.auction,
            item_price: itemDetails.item_price,
            image_url: itemDetails.image_url,
            auction_category: itemDetails.auction_category,
            item_medium: itemDetails.item_medium,
            framed: itemDetails.framed,
            image_type: itemDetails.image_type,
            item_material_used: itemDetails.item_material_used,
            item_height: itemDetails.item_height,
            item_width :itemDetails.item_width,
            item_length: itemDetails.item_length,
            item_weight: itemDetails.item_weight,
            item_status: false
            
        }).then(res=>{
            setAfterMessage(true);
            console.log(itemDetails)
            setError(false)
        }).catch(err=>{
            console.log(err);
            setError(true)
            setAfterMessage(false)
        })
        
    }
    const [afterMessage,setAfterMessage]=useState(false);
    const [error,setError]=useState(false);





  return (<div>
    <h1>Add Items</h1>
    {
         error?
       
    <div class="alert alert-dismissible alert-danger">
      
      <strong>Sorry</strong> Cannot Add Item
    </div>:afterMessage?
    <div class="alert alert-dismissible alert-success">
    
    <strong>Well done!</strong> Item Added
  </div>:null
}
    <form className="mx-5">
        
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
      <textarea className="form-control" id="description" rows="3" placeholder="Description" onChange={(e)=>{setItemDetails({...itemDetails,description:e.target.value})}} value={itemDetails.description}></textarea>
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
<div className='form-group my-4'>

<input type="text" className="form-control" id="image_url" placeholder="Image Url" onChange={(e)=>{setItemDetails({...itemDetails,image_url:e.target.value})}} value={itemDetails.image_url}/>


</div>
 

      <div className="form-group my-4">
      <select className="form-control" onChange={(e)=>{setItemDetails({...itemDetails,auction_category:e.target.value})}} value={itemDetails.auction_category}>
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
     <button class="btn btn-lg btn-success" type="button" onClick={insertItem}>Add</button>
     </div>


    </form>
  </div>);
}
