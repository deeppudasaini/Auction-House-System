import axios from '../../request/axios';
import {useState,useEffect} from 'react';

export default function RoleTable(props) {  
  
const [users,setUsers]=useState([]);
 
 const [roles, setRole] = useState([]);
  
 
  useEffect(()=>{

   
    async function getRoleDataFromAPI(){
      await axios.get("/user-roles").then((res) => {
        setRole(res.data);
        
        
      }).catch((err) => {
        console.log(err);
      });
    }
  
    
    getRoleDataFromAPI();
    async function getUsers(){
        const response = await axios.get('/users');
        
        setUsers(response.data);
        }
        
        getUsers();
        
  
   
        
     
   
  },[]);

  
    return (
    
      <div>

        <table class="table table-hover">
          <thead>
            <tr>
              
              
              <th scope="col">User Name</th>
              <th scope="col">Roles</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody>
            
          {
              
              roles.map(role=>
                      
                   (
            <tr class="table-secondary">
              
              <td>{
              users.map
              (user=>{
                  if(user.user_id==role.user_id){
                     return user.first_name+" "+user.last_name
                  }
              }
              )
            
                }</td>
                <td>
                   {role.role_id==1?"Admin":role.role_id==2?"Buyer":role.role_id==5?"Seller":role.role_id==7?"Joint":null}
                </td>
        
          
            <td>
            <button type="button" class="btn btn-danger mx-1" 
  onClick={
  
    async function deleteRole(){
      await axios.delete(`/user-roles/${role.user_role_id}`).then((res) => {
        console.log(res);
        setRole(roles.filter(r=>r.user_role_id!==role.user_role_id));
        
        
      }).catch((err) => {
        console.log(err);
      });
    }
    
  }>Remove Access</button>
              </td> 
            </tr>
                    ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  