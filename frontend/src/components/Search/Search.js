import React, { useEffect } from 'react'
import axios from '../../request/axios';
import { useState } from 'react';
export default function Search() {
   const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
const [searchResult, setSearchResult] = useState([]);
    const [key, setKey] = useState('');
    useEffect(() => {
        async function getItems() {
            await axios.get('/items').then((res) => {
                setItems(res.data);
            }).catch((err) => {
                console.log(err);
            });
        }
        getItems();
    }, []);
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchItems = items.filter(item => item[key]==search);
        setSearchResult(searchItems);
        
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
                      <option value="artist_name">Artist Name</option>
                      <option value="classification">Classification</option>
                      <option value="item_price"
                     >Item Price</option>
                      <option value={'item_medium'}>Item Medium</option>
                      <option value={'image_type'}>Image Type</option>
                      <option value={'item_material_used'}>Item Material Used</option>
                      <option value={'item_height'}>Item Height</option>
                      <option value={'item_length'}>Item Length</option>
                      <option value={'item_width'}>Item Width</option>
                      <option value={'item_weight'}>Item Weight</option>
                    </select>
                  </div>
                    <button class="btn btn-primary" type="button" id="button-addon2"
                  onClick={handleSubmit}
                    >Search</button>
                  </div>
        </form>
        {
            searchResult.map(item => (
        <div class="card text-white bg-info mb-3" style={{maxWidth: '20rem'}}>
    <div class="card-header">{item.artist_name} ({
        item.auction_category === 1 ? 'Painting' :
            item.auction_category === 2 ? 'Carving' :
                item.auction_category === 3 ? 'Drawing' :
                    item.auction_category === 4 ? 'Sculpture' :
                        item.auction_category === 5 ? 'Photographic Images' :
                        null
                    
                
    })</div>
    <div class="card-body">
        <h4 class="card-title">Date: {item.produced_date}</h4>
<p class="card-text">{item.description}</p>
<p class="card-text">Price: {item.item_price}</p>
</div>
</div>
            ))
}
        </div>
    )
}