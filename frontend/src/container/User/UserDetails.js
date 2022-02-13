import axios from '../../request/axios';
import { useEffect, useState } from 'react';
export default function UserDetails(props) {
  const [user, setUser] = useState([]);
  const [userRoles, setUserRoles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/users/' + props.userId);
      setUser(response.data[0]);
    }
    async function fetchUserRoles() {
      const response = await axios.get('/user-roles');

      setUserRoles(response.data);
    }
    fetchUserRoles();
    fetchData();

  }, []);
  return (
    <div className="mx-1 my-1">
      <div className="row">
        <div className="col-lg mx-1 my-4">
          <div className="card mb-3">
            <h3 className="card-header">Personal Information</h3>
            <div className="card-body">
              <h5 className="card-title">{user.first_name + ' ' + user.last_name}</h5>
              <h6 className="card-subtitle text-muted">
                Auction House Client
                <br />
                Roles: {
                  userRoles.map(role => {
                    if (user.user_id === role.user_id) {
                      if (role.role_id === 1) {
                        return 'Admin' + ',';
                      }
                      if (role.role_id === 2) {
                        return 'Buyer' + ',';
                      }
                      if (role.role_id === 5) {
                        return 'Seller' + ',';
                      }
                      if (role.role_id === 7) {
                        return 'Joint' + ',';
                      }
                    }


                  }
                  )


                }
              </h6>
            </div>


            <ul className="list-group list-group-flush">
              <li className="list-group-item">Email: {user.email}</li>
              <li className="list-group-item">Account Number: {user.bank_account_number}</li>
              <li className="list-group-item">Contact: {user.contact}</li>

            </ul>


          </div>
        </div>

      </div>
    </div>

  );
}
