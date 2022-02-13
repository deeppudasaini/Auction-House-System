import React from 'react'
import Items from '../../container/Items/Items'
export default function SellerItems() {
    return (
        <div>
            <Items seller_id={localStorage.getItem('user_id')}/>
        </div>
    )
}
