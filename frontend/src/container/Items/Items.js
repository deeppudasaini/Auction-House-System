import ItemTable from "../../components/Table/Itemtable";
import {useState, useEffect} from "react";
import axios from "../../request/axios";
import ItemAdd from '../../components/Form/ItemAdd';

export default function Items(props) {
  const [item, setItem] = useState([]);
  
  const [showAdd, setShowAdd] = useState(false);
  const [itemId, setItemId] = useState(null);
 
  useEffect(() => {
    
      
      async function getItemDataFromAPI(){
        
        if(props.seller_id){
          
        await axios.get(`/items`).then((res) => {
          
          setItem(
            
            res.data.filter(item => item.seller_id == props.seller_id)

          );
        }).catch((err) => {
          console.log(err);
        });
        
        }
        else{
          
          await axios.get(`/items`).then((res) => {
            setItem(
              res.data

  
            );
          }).catch((err) => {
            console.log(err);
          });
          
        }
    }
    
    getItemDataFromAPI();
  
    
      
  },[item]);

  return (
    <div>
      {
       JSON.parse(localStorage.getItem('role')).map(role=>{
        if(role.role_id==5||role.role_id==7)
        {
          return(
      <div className="d-grid gap-2 my-3 mx-5">
        <button className="btn btn-lg btn-secondary" type="button" onClick={()=>{
          setShowAdd(!showAdd);
          
          
        }}>
          Add Items
        </button>
      </div>
      
        )}})
        

}
{
        showAdd?
        (<ItemAdd itemId={itemId} individualItems={
          item.filter((item) => item.id === itemId)
       } />)
        :
        null
}
<hr />

      <ItemTable items={item} removeItem={
        async (id) => {
          await axios.delete(`/items/${id}`).then((res) => {
            setItem(item.filter(item => item.id !== id));
          }).catch((err) => {
            console.log(err);
          });
        }
      }
      archiveItem={
        async (id) => {
          await axios.put(`/items/archive/${id}`,{
            item_status:0
          }).then((res) => {
            setItem(item.filter(item => item.id !== id));
          }).catch((err) => {
            console.log(err);
          });
        }
      
          
      }
      unarchiveItem={
        async (id) => {
          await axios.put(`/items/archive/${id}`,{
            item_status:1
          }).then((res) => {
            setItem(item.filter(item => item.id !== id));
          }).catch((err) => {
            console.log(err);
          });
        }
        
          
      }
      />
    </div>
  );
}
