import {useState,useEffect} from 'react';
import axios from '../../request/axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
export default function UserEdit(props) {
  const { id } = useParams(); 
  
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact:"",
    bank_account_number:"",
    bank_sort_code:"",
    status:true,
  });
 
  const [role,setRole]=useState([
    {
      role_id:"",
      user_id:""
    }
  ]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/user-roles/user/${id}`);
      console.log(response.data);
      setRole(response.data);
    }
    
    async function fetchUserData() {
      const response = await axios.get(`/users/${id}`);
      setNewUser(response.data[0]);
    }
    fetchUserData();
    fetchData();
  }, []);

    
  return (<div>
    

    <h1>Edit Users</h1>
    <form>
             
                {
         error?
       
    <div class="alert alert-dismissible alert-danger">
      
      <strong>Sorry</strong> Cannot Edit user
    </div>:success?
    <div class="alert alert-dismissible alert-success">
    
    <strong>Well done!</strong> User Editted
  </div>:null
}
                <div class="form-group mb-3">
                  <label for="first_name">First Name</label>
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) =>
                      setNewUser({ ...newUser, first_name: e.target.value })
                    }
                    value={newUser.first_name}

                   
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="last_name">Last Name</label>
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) =>
                      setNewUser({ ...newUser, last_name: e.target.value })
                    }
                    value={newUser.last_name}

                 
                  />
                </div>
                <div className="form-outline mb-3">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    
                    className="form-control form-control-lg"
                    placeholder="Email address"
                    onChange={
                      (e) => setNewUser({ ...newUser, email: e.target.value })

                    }
                    value={newUser.email}

                  />
                </div>
                <div className="form-outline mb-3">
                  <label for="contact">Phone Number</label>
                  <input
                    type="number"
                    
                    className="form-control form-control-lg"
                    placeholder="Phone Number"
                   onChange={
                      (e) => setNewUser({ ...newUser, contact: e.target.value })
                   }
                    value={newUser.contact}
                  />
                </div>
                <div className="form-outline mb-3">
                  <label for="contact">Bank Account Number</label>
                  <input
                    type="number"
                    
                    className="form-control form-control-lg"
                    placeholder="Bank Account Number"
                   onChange={
                      (e) => setNewUser({ ...newUser, bank_account_number: e.target.value })
                   }
                    value={newUser.bank_account_number}
                  />
                </div>
                <div className="form-outline mb-3">
                  <label for="contact">Account Sort Number</label>
                  <input
                    type="number"
                    
                    className="form-control form-control-lg"
                    placeholder="Account Sort Number"
                   onChange={
                      (e) => setNewUser({ ...newUser, bank_sort_code: e.target.value })
                   }
                    value={newUser.bank_sort_code}
                  />
                </div>

                
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={async () => {
                      const response = await axios.put(`/users/${id}`, newUser);
                      if (response.data.error) {
                        setError(response.data.error);
                      } else {
                        setSuccess(true);
                      }
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    
                  >
                    <Link to="/user">Cancel</Link>
                  </button>
                </div>
              </form>
  </div>);
}
