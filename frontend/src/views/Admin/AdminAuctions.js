import AuctionTable from "../../components/Table/AuctionTable";
import {useState, useEffect} from "react";
import axios from "../../request/axios";
import AuctionAdd from '../../components/Form/AuctionAdd';

export default function AdminAuctions() {
  const [auction, setAuction] = useState([]);
  
  const [showAdd, setShowAdd] = useState(false);
  
  const [auctionId, setAuctionId] = useState(null);
  useEffect(() => {
    async function getAuctionDataFromAPI(){
      await axios.get("/auctions").then((res) => {
        setAuction(res.data);
        
        
      }).catch((err) => {
        console.log(err);
      });
    }
  
    
    getAuctionDataFromAPI();
    
      
  },[auction])

  return (
    <div>
   
      <div className="d-grid gap-2 my-3 mx-5">
        <button className="btn btn-lg btn-secondary" type="button" onClick={()=>{
          setShowAdd(!showAdd);
          
          
        }}>
          Add Auctions
        </button>
      </div>
      {
        showAdd?
        (<AuctionAdd />)
        :
        null
}
<hr />
      <AuctionTable auctions={auction}  removeAuction={
        async (id) => {
          await axios.delete(`/auctions/${id}`).then((res) => {
            setAuction(auction.filter(auction => auction.id !== id));
          }).catch((err) => {
            console.log(err);
          });
        }
      }
      archiveAuction={
        async (id) => {
          await axios.put(`/auctions/archive/${id}`,{
            auction_status:0
          }).then((res) => {
            setAuction(auction.filter(auction => auction.id !== id));
          }).catch((err) => {
            console.log(err);
          });
        }
      
          
      }
      unarchiveAuction={
        async (id) => {
          await axios.put(`/auctions/archive/${id}`,{
            auction_status:1
          }).then((res) => {
            setAuction(auction.filter(auction => auction.id !== id));
          }).catch((err) => {
            console.log(err);
          });
        }
        
          
      }
      
      
      />
    </div>
  );
}
