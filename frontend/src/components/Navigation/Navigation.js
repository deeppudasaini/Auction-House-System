import axios from '../../request/axios';
import { Link } from 'react-router-dom';
export default function Navigation() {
  function logout()
  {
    axios.get(`/users/logout/${localStorage.getItem('user_id')}`)
    .then(res=>{
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('role');
      window.location.href='/'
    })
    .catch(err=>{
      console.log(err);
    })

    
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/logo.jpg" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"  
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {
            localStorage.getItem('role')?

          (
          <div className="collapse navbar-collapse" id="navbarColor02">
          
          

            
          
          <ul className="navbar-nav me-auto">
            {
              JSON.parse(localStorage.getItem('role')).map(role=>{
                if(role.role_id==1){
                  return(
                    <div style={
                      {
                        display: 'flex',
                        flexDirection: 'row',
                      }
                    }>
                    <li className="nav-item">
                    <a className="nav-link" >
                    <Link to="/dashboard" >
                          Admin Dashboard
                        </Link>
                    </a>
                  </li>
                   <li className="nav-item">
                
                   <a className="nav-link" href="#">
                   <Link to="/auction" >
                         Auctions
                       </Link>
                   </a>
                 </li> 
                 <li className="nav-item">
                <a className="nav-link" href="#">
                <Link to="/item" >
                      Items
                    </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <Link to="/bid" >
                      Bids
                    </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <Link to="/user" >
                      Users
                    </Link>
                </a>
              </li>
              <li className="nav-item">
                
                <a className="nav-link" href="#">
                <Link to="/role" >
                      Roles
                    </Link>
                </a>
              </li> 
                 </div>
                  )
                      }
              })
            }
            {
              JSON.parse(localStorage.getItem('role')).map(role=>{
                if(role.role_id==2)
                {
                  return(
                    <div style={
                      {
                        display: 'flex',
                        flexDirection: 'row',
                      }
                    }>
                       <li className="nav-item">
                          <a className="nav-link" >
                          <Link to="/buyer-dashboard" >
                                Buyer Dashboard
                              </Link>
                          </a>
                        </li>
                        <li className="nav-item">
                <a className="nav-link" >
                <Link to="/buyer-items" >
                      Bided Items
                    </Link>
                </a>
              </li>
                      </div>
                  )
                }
              })
            }
            {
              JSON.parse(localStorage.getItem('role')).map(role=>{
                if(role.role_id==5)
                {
                  return (
                    <div style={
                      {
                        display: 'flex',
                        flexDirection: 'row',
                      }
                    }>
                       <li className="nav-item">
                          <a className="nav-link" >
                          <Link to="/seller-dashboard" >
                                Seller Dashboard
                              </Link>
                          </a>
                        </li>
                        <li className="nav-item">
              <a className="nav-link" href="#">
              <Link to="/seller-items" >
                    Items
                  </Link>
              </a>
            </li>
                    </div>
                  )
                }
              })
            }
              {
                JSON.parse(localStorage.getItem('role')).map(role=>{
                  if(role.role_id==7)
                  {
                    return(
                      <div style={
                        {
                          display: 'flex',
                          flexDirection: 'row',
                        }
                      }>
                          <li className="nav-item">
                          <a className="nav-link" >
                          <Link to="/buyer-dashboard" >
                                Buyer Dashboard
                              </Link>
                          </a>
                        </li>
                         <li className="nav-item">
                          <a className="nav-link" >
                          <Link to="/seller-dashboard" >
                                Seller Dashboard
                              </Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                          <Link to="/seller-items" >
                                Items
                              </Link>
                          </a>
                        </li>
                      
                        <li className="nav-item">
                    <a className="nav-link" >
                    <Link to="/buyer-items" >
                          Bided Items
                        </Link>
                    </a>
                      </li>
                      </div>
                    )
                  }
                })
              }
            
            </ul>
{
  localStorage.getItem('role')?
<button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={logout}>
              Logout
            </button>:null
}
            
          
   
          </div>
          ):null}
        </div>
      </nav>
    </div>
  );
}
