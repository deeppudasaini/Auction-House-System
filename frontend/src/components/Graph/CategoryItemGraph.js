import Chart from "react-google-charts";
export default function CategoryItemGraph(props)
{
    return(
        <div>
<Chart
  width={'100%'}
  height={'500px'}
  chartType="BarChart"
  loader={<div>Loading Categorical Chart</div>}
  data={
    [
        ['Category', 'Number of Items'],
        ['Painting', props.itemGraphDataByCatagory.filter(item=>{return item.auction_category===1}).length],
        ['Carving', props.itemGraphDataByCatagory.filter(item=>{return item.auction_category===2}).length],
        ['Drawing', props.itemGraphDataByCatagory.filter(item=>{return item.auction_category===3}).length],
        ['Sculpture', props.itemGraphDataByCatagory.filter(item=>{return item.auction_category===4}).length],
        ['Photographic Images', props.itemGraphDataByCatagory.filter(item=>{return item.auction_category===5}).length],
    ]
}
  options={{
    title: 'Number of Auction Items Present sorted Categoricaly',
    legend: { position: 'none' },
    hAxis: {
        title: 'Number of Items',
        minValue: 0,
    },
    vAxis: {
        title: 'Category',
    },
    animation:{
        startup:true,
        duration:1000,
        easing:'out',
    },
  }}
  
/>
        </div>
    )
}