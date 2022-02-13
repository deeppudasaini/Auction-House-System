import Chart from "react-google-charts";
export default function ItemPriceGraph(props)
{
    return(
        <div>
            <Chart
    width={'100%'}
    height={'500px'}
    chartType="LineChart"
    loader={<div>Loading Price Chart</div>}
   data={
    [
        ['Price', 'Number of Items'],
        ['0-5000', props.itemGraphDataByCatagory.filter(item=>{return item.item_price>=0 && item.item_price<=5000}).length],
        ['5000-10000', props.itemGraphDataByCatagory.filter(item=>{return item.item_price>5000 && item.item_price<=10000}).length],
        ['10000-15000', props.itemGraphDataByCatagory.filter(item=>{return item.item_price>10000 && item.item_price<=15000}).length],
        ['15000-20000', props.itemGraphDataByCatagory.filter(item=>{return item.item_price>15000 && item.item_price<=20000}).length],
        ['20000-25000', props.itemGraphDataByCatagory.filter(item=>{return item.item_price>20000 && item.item_price<=25000}).length],
        ['25000-30000', props.itemGraphDataByCatagory.filter(item=>{return item.item_price>25000 && item.item_price<=30000}).length],
        ['30000-35000', props.itemGraphDataByCatagory.filter(item=>{return item.item_price>30000 && item.item_price<=35000}).length],
        ['35000-40000', props.itemGraphDataByCatagory.filter(item=>{return item.item_price>35000 && item.item_price<=40000}).length],
        ['40000 Plus', props.itemGraphDataByCatagory.filter(item=>{return item.item_price>40000}).length],
    ]    
   }
    options={{
        title: 'Price Range of items present',
        legend: { position: 'none' },
        hAxis: {
            title: 'Price',
            minValue: 0,
        },
        vAxis: {
            title: 'Number of Items',
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