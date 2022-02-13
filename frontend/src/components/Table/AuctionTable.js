import { Link } from "react-router-dom";

import AuctionSearch from '../../components/Search/AuctionSearch';
export default function AuctionTable(props) {

  function removeAuction(id) {
    props.removeAuction(id);
  }
 
  return (
    <div>
      <AuctionSearch auction={props.auctions}/>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Auction Title</th>
            <th scope="col">Auction Description</th>
            <th scope="col">Auction Start Date</th>
            
            <th scope="col">Auction Time</th>
            <th scope="col">Auction Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.auctions.map(auction => (

          <tr class="table-secondary">
            <td>{auction.auction_title}</td>
            <td>{auction.auction_description}</td>
            <td>{auction.auction_start_date}</td>
            
            <td>{auction.auction_time}</td>
            <td>{auction.auction_status==1?"Unarchived":"Archived"}</td>
            <td>
            <button type="button" class="btn btn-warning mx-1">
              <Link to={`/auction/${auction.auction_id}`}>Edit</Link>
            </button>
<button type="button" class="btn btn-danger mx-1" 
onClick={
  () => removeAuction(auction.auction_id)
}>Delete</button>
<button type="button" class={auction.auction_status==1?"btn btn-danger mx-1":"btn btn-success mx-1"} onClick={auction.auction_status==1?
  () => props.archiveAuction(auction.auction_id)
:
() => props.unarchiveAuction(auction.auction_id)
}>{auction.auction_status==1?"Hide":"Show"}</button>

              </td>
            
            
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

