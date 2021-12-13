import {useState} from 'react';
import Card from './shared/Card';

function PriceListTile({item}) {
    return (
        <Card>
            <div className="name-display">{item.baseAsset.toUpperCase()}</div>
            <div className="price-display"> {item.lastPrice} INR</div>
            </Card>
    )
}

export default PriceListTile
