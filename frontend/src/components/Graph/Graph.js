
import { useEffect ,useState } from 'react';
import axios from '../../request/axios';
import CategoryItemGraph from './CategoryItemGraph';
import ItemPriceGraph from './ItemPriceGraph';
import UserRatioGraph from './UserRatioGraph';
export default function Graph()
{
    const [itemGraphDataByCatagory,setItemGraphDataByCatagory]=useState([]);
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
        
        const fetchItemGraphData=async()=>{
            await axios.get("/items").then
            (res=>{
                setItemGraphDataByCatagory(res.data);
            })
        }
        const fetchUsers=async()=>{
            await axios.get("/user-roles").then
            (res=>{
                setUsers(res.data);
            })
        }

        fetchItemGraphData();
fetchUsers()
      
        


        
        
    },[]);


                
    return(
        <div>
            <h1>Items Bar chart</h1>
            
            <CategoryItemGraph itemGraphDataByCatagory={itemGraphDataByCatagory}/>
            <h1>Item Price Line Graph</h1>
            
            <ItemPriceGraph itemGraphDataByCatagory={itemGraphDataByCatagory}/>

            
            <div>
           <h1>User Types Pie Chart</h1>
           
             <UserRatioGraph users={users}/>
           
            </div>
        </div>
    )
}
         
            
            