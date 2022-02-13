import axios from '../../request/axios';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
export default function UserTable(props) {  
  const [user,setUser] = useState([]);
  const [userRoles,setUserRoles]=useState([]);
 
  useEffect(()=>{

   
    async function getUsers(){
      const response = await axios.get('/users');
      setUser(response.data);
    }
    async function getUserRoles(){
      const response = await axios.get('/user-roles');
      setUserRoles(response.data);
    }
  
    getUsers();
    getUserRoles()
  },[]);
    function removeUser(id) {
      props.removeUser(id);
    }
  
    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">User id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Account No.</th>
              <th scope="col">Role</th>
            
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {props.users.map(user => (
  
            <tr class="table-secondary">
              <td>{user.user_id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.bank_account_number}</td>
             <td>{
               userRoles.map(userRole=>{
                  if(userRole.user_id===user.user_id){
                    if (userRole.role_id===1){
                      return "Admin"
                    }
                    else if(userRole.role_id===2){
                      return "Buyer"
                    }
                    else if(userRole.role_id===5){
                      return "Seller"
                    }
                    else if(userRole.role_id===7){
                      return "Joint"
                    }
                  }
               })
               }
             </td>
              
              <td>{user.status==1?"Active":"Deactive"}</td>
              <td>
              <button type="button" class="btn btn-warning mx-1"> <Link to={`/user/${user.user_id}`}>Edit</Link></button>
  <button type="button" class="btn btn-danger mx-1" 
  onClick={
    () => removeUser(user.user_id)
  }>Delete</button>
  <button type="button" class={user.status==1?"btn btn-danger mx-1":"btn btn-success mx-1"} onClick={user.status==1?
    () => props.archiveUser(user.user_id)
  :
  () => props.unarchiveUser(user.user_id)
  }>{user.status==1?"Deactivate":"Activate"}</button>
                </td>
              
              
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  