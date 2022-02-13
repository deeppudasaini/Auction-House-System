import Chart from "react-google-charts";
export default function UserRation(props)
{
    return (
        <div>
             <Chart
              width={'100%'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Loading User Chart</div>}
                data={
                    [
                        ['User', 'Ratio of Users'],
                        ['Admin', props.users.filter(user=>{return user.role_id===1}).length],
                        ['Seller', props.users.filter(user=>{return user.role_id===5}).length],
                        ['Buyer', props.users.filter(user=>{return user.role_id===2}).length],
                        ['Joint', props.users.filter(user=>{return user.role_id===7}).length],
                    ]
                }
                options={{
                    title: 'Number of Users Present',
                    legend: { position: 'none' },
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