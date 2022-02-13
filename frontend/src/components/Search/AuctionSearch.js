import React, { useEffect } from 'react'
import axios from '../../request/axios';
import { useState } from 'react';
export default function AuctionSearch(props) {
   
    const [search, setSearch] = useState('');
const [searchResult, setSearchResult] = useState([]);
    const [key, setKey] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchAuctions = props.auction.filter(auction => auction[key]==search);
        setSearchResult(searchAuctions);
        
    }
    return (
        <div>
             <form>
        
        <div class="input-group mb-3"
        style={
          {
            width: "25%",
          }
        }>
          
                    <input type="text" class="form-control" placeholder="Search.." aria-label="Search.." aria-describedby="button-addon2"
                      onChange={handleChange}
                    />
                    <div class="form-group" 
                    >
                    <label for="exampleSelect1" class="form-label mt-4">Search by</label>
                    <select class="form-select" id="exampleSelect1" 
                    onChange={
                        (e) => {
                            setKey(e.target.value);
                        }
                    }>
                      <option value="auction_title">Auction Name</option>
                      <option value="auction_description">Auction Description</option>
                      
                    </select>
                  </div>
                    <button class="btn btn-primary" type="button" id="button-addon2"
                  onClick={handleSubmit}
                    >Search</button>
                  </div>
        </form>
        {
            searchResult.map(auction => (
        <div class="card text-white bg-info mb-3" style={{maxWidth: '20rem'}}>
    <div class="card-header">{auction.auction_title} </div>
    <div class="card-body">
        <h4 class="card-title">Time: {auction.auction_time}</h4>
<p class="card-text">{auction.auction_description}</p>

</div>
</div>
            ))
}
        </div>
    )
}