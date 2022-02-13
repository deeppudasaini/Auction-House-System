import "./register.css";

import {
  Link, Navigate,
} from "react-router-dom";


import { useState,useEffect } from "react";
import axios from "../../request/axios";
export default function Register() {
  
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmation_password: "",
    contact:"",
    bank_account_number:"",
    bank_sort_code:"",
    status:false,
  });
  const [role,setRole]=useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function registerUser(e) {
    e.preventDefault();
    if (newUser.password !== newUser.confirmation_password) {
      setError("Passwords do not match");
    }
     else {
      axios
      .post("/users/register", newUser)
      .then((res) => {
      axios.post("/user-roles",{
        user_id:res.data.data.insertId,
        role_id:role.value
      }).then(res=>{
        setSuccess(true);
      }).catch(err=>{
        console.log(err);
        setError("Cannot register user");
      })

      })
      .catch((err) => {
        setError("Cannot register user");
      });
     
    
    }

  }
useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/user-roles");
      
    }
    fetchData();
  
}, []);


  
return (
    <div>
      <section>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="logo.jpg" className="img-fluid" alt="Sample image" />
            </div>
          
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
             
                <div className="form-outline mb-3">
                  <h1>Fotheby's Auction House</h1>
                  <label>Since 1961 AD</label>
                </div>
                {
              success ? (
                <div class="alert alert-dismissible alert-success">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Congratulation!</strong> You have successfully registered in Fotheby Auction House. You can Now <a className="link-danger">
                      <Link to="/login">Login</Link>
                    </a>.
              </div>):null
            }
             {
              error ? (
                <div class="alert alert-dismissible alert-danger">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Sorry </strong> 
                {error}
                      
                    
              </div>):null
            }
                <div class="form-group mb-3">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="First Name"
                    
                    onChange={
                      (e) => setNewUser({ ...newUser, first_name: e.target.value })
                    }
                    value={newUser.first_name}
                  />
                </div>
                <div class="form-group mb-3">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Last Name"
                    
                    onChange={
                      (e) => setNewUser({ ...newUser, last_name: e.target.value })
                    }
                    value={newUser.last_name}

                  />
                </div>
                <div className="form-outline mb-3">
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
                <div>
                  <input 
                  type="number"
                  className="form-control form-control-lg"
                    placeholder="Account Number"
                    onChange={
                      (e) => setNewUser({ ...newUser, bank_account_number: e.target.value })
                    }
                    value={newUser.bank_account_number}
                  />
                </div>
                <div>
                  <input 
                  type="number"
                  className="form-control form-control-lg"
                    placeholder="Bank Sort Code"
                   
                    onChange={
                      (e) => setNewUser({ ...newUser, bank_sort_code: e.target.value })
                    }
                    value={newUser.bank_sort_code}
                  />
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    
                    className="form-control form-control-lg"
                    placeholder="Password"
                    onChange={
                      (e) => setNewUser({ ...newUser, password: e.target.value })
                    }
                    value={newUser.password}

                  />
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    onChange={
                      (e) => setNewUser({ ...newUser, confirmation_password: e.target.value })
                    }
                    value={newUser.confirmation_password}

                  />
                </div>
                <div class="form-group">
                  <select class="form-select" id="exampleSelect1"
                  onChange={
                      (e) => setRole({ ...role, value: e.target.value })
                  }
                  >
                    <option value={5
                    }>Seller</option>
                    <option value={2}>Buyer</option>
                    <option value={7}>Joint</option>
                  </select>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={registerUser}
                  >
                    Register
                  </button>

                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have a account!
                    <a className="link-danger">
                      <Link to="/login">Login</Link>
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
