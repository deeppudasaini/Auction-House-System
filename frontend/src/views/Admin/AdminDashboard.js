import React from 'react'
import UserDetails from '../../container/User/UserDetails'
import Graph from '../../components/Graph/Graph'
export default function AdminDashboard() {
    return (
        <div>
            <UserDetails userId={localStorage.getItem('user_id')} />
            <h1><u> Graphs and Charts</u></h1>
            <Graph/>
        </div>
    )
}
