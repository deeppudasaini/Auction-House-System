import {useState,useEffect} from 'react';
import axios from '../../request/axios';

import 'react-calendar/dist/Calendar.css';
export default function RoleAdd() {
  const [users,setUsers]=useState([]);
  const [roleDetails,setRoleDetails]=useState({
      role_id:'',
      user_id:'',
  });
const [afterMessage,setAfterMessage]=useState(false);
const [error,setError]=useState(false);
  
    async function insertRole(){
      
     
      
    console.log(roleDetails);
      const response=await axios.post('/user-roles',{
        role_id:roleDetails.role_id,
        user_id:roleDetails.user_id,

      }).then(res=>{
        setAfterMessage(true);
        setError(false);
      }).catch(err=>{
        console.log(err);
        setError(true);
        setAfterMessage(false);
      });
    
   

      
   
      
    }
useEffect(()=>{
    async function getUsers(){
        const response = await axios.get('/users');
        
        setUsers(response.data);
        }
        
        getUsers();
        
     
},[roleDetails,users]);
  return (<div>
    
    <h1>Add Roles</h1>
  
    <form className="mx-5">
    {
         error?
       
    <div class="alert alert-dismissible alert-danger">
      
      <strong>Sorry</strong> Cannot Add Role
    </div>:afterMessage?
    <div class="alert alert-dismissible alert-success">
    
    <strong>Well done!</strong> Role Created
  </div>:null
}

    <div className="form-group">
        <label>Roles</label>
        <select className="form-control" onChange={(e)=>{
            setRoleDetails({...roleDetails,role_id:e.target.value})
        }}>
            
            <option value="1">Admin</option>
            <option value="2">Buyer</option>
            <option value="5">Seller</option>
            <option value="7">Joint</option>
        </select>
    </div>
    <div className="form-group">
        <label>Users</label>
        <select className="form-control" onChange={(e)=>{
            setRoleDetails({...roleDetails,user_id:e.target.value})
        }}>
{
    users.map((user,index)=>{
        return <option value={user.user_id}>{user.first_name+" "+user.last_name}</option>
    }
    )
}
            
            </select>
    </div>



     <div className="form-group my-4">
     <button class="btn btn-lg btn-success" type="button" onClick={insertRole}>Assign</button>
     </div>


    </form>
  </div>);
}
