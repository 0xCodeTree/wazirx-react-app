import PriceListTile from "./PriceListTile";
import {useContext} from 'react';
import {AssetContext} from "../context/AssetContext";

function PriceList() {
    const {asset,getAssetData} = useContext(AssetContext);
    if(!asset || asset.length === 0){
        return <p>No Data</p>
    }
    return (
        <div className="asset-list">

<button className="btn" onClick={getAssetData}>Refresh</button>

            {asset.map((item)=>{
                return <PriceListTile item={item}/>
            })}
            
        </div>
    )
}

export default PriceList
