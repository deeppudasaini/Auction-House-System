import RoleTable from '../../components/Table/RoleTable';
import {useState, useEffect} from "react";
import axios from "../../request/axios";
import RoleAdd from '../../components/Form/RoleAdd';

export default function AdminRoles() {
  
  const [showAdd, setShowAdd] = useState(false);
  return (
    <div>
      <div className="d-grid gap-2 my-3 mx-5">
        <button className="btn btn-lg btn-secondary" type="button" onClick={()=>{
          setShowAdd(!showAdd);
        }}>
          Assign Roles
        </button>
      </div>
      {
        showAdd?
        (<RoleAdd />)
        :
        null
}
<hr />
    <h1>Accessed Provided to Users</h1>
    <div>
      <label>Note: </label>
      <p className='alert'>
        You need to add roles first and then remove user from another role
      </p>
    </div>
      <RoleTable />
    </div>
  );
}
