import UserTable from "../../components/Table/UserTable";
import {useState, useEffect} from "react";
import axios from "../../request/axios";


export default function AdminUsers() {
  const [user, setUser] = useState([]);

  const [userId, setUserId] = useState(null);
  useEffect(() => {
    async function getUserDataFromAPI(){
      await axios.get("/users").then((res) => {
        setUser(res.data);
        
        
        
      }).catch((err) => {
        console.log(err);
      });
    }
  
    
    getUserDataFromAPI();
    
      
  },[user])

  return (
    <div>
      <div className="d-grid gap-2 my-3 mx-5">
      
      </div>
     
        
        
        

<hr />
      <UserTable users={user}  removeUser={
        async (id) => {
          await axios.delete(`/users/${id}`).then((res) => {
            setUser(user.filter(user => user.user_id !== id));
          }).catch((err) => {
            console.log(err);
          });
        }
      }
      archiveUser={
        async (id) => {
          await axios.put(`/users/archive/${id}`,{
            status:0
          }).then((res) => {
            setUser(user.filter(user => user.user_id !== id));
          }).catch((err) => {
            console.log(err);
          });
        }
      
          
      }
      unarchiveUser={
        async (id) => {
          await axios.put(`/users/archive/${id}`,{
            status:1
          }).then((res) => {
            setUser(user.filter(user => user.id !== id));
          }).catch((err) => {
            console.log(err);
          });
        }
        
          
      }
      
      />
    </div>
  );
}
