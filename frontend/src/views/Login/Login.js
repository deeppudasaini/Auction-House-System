import "./login.css";
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import axios from "../../request/axios";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  
  // useEffect(()=>{
  //   localStorage.getItem('role').map(
  //     (role)=>{
  //       console.log(role.role_id)
  //     }
  //   )
  // },[]);
    
 function loginUser(e)
 {
   e.preventDefault();
    axios.post("/users/login",user).then
    (res=>{
      
      if(
        res.data.data[0].status==0
      )
      {
        setError("Wait for admin to approve your account");
        
      }
      else if(res.data.status===true && res.data.data[0].status==1)
      {
        
          localStorage.setItem("token",res.data.data[0].token);
          localStorage.setItem("user_id",res.data.data[0].user_id);
          const id=res.data.data[0].user_id;
          axios.get("/user-roles/user/"+id).then(response=>{
            
            localStorage.setItem("role",JSON.stringify(response.data));
            response.data.map(role=>{
              if(role.role_id==1)
              {
                window.location.href="/dashboard";
              }
              else if(role.role_id==2)
              {
                window.location.href="/buyer-dashboard";
              }
              else if(role.role_id==5)
              {
                window.location.href="/seller-dashboard";
              }
              else if(role.role_id==7)
              {
                window.location.href="/seller-dashboard";
              }
            })
            
          })
          
          
          
      }
      else
      {
          setError("Invalid Credentials.Try Again");
      }
       
    }
    )

}
  return (
    <div>
      <section className="vh-100 my-3">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="logo.jpg" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <h1>Fotheby's Auction House</h1>
                  <label>Since 1961 AD</label>
                </div>
                {
              error ? (
                <div class="alert alert-dismissible alert-danger">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>
                {error}
                </strong> 
                      
                    
              </div>):null
            }
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Email address"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    value={user.email}

                  />
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    value={user.password}

                  />
                </div>
              
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={loginUser}  

                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a className="link-danger">
                    <Link to="/register" >
                      Register
                    </Link>

                      
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
