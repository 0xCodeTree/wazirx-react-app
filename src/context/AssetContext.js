import {createContext,useState,useEffect} from 'react';

export const AssetContext = createContext();

export const AssetProvider = ({children}) => {
    const [asset, setasset] = useState([
    
    ])

    useEffect(()=>{
        const interval = setInterval(getAssetData,30000);
        return ()=> clearInterval(interval);
    // getAssetData()
  },[])

 

  

    const getAssetData = async()=>{
        const response = await fetch('https://api.wazirx.com/sapi/v1/tickers/24hr');
        const data = await response.json();
        setasset(data);
        console.log(data);
    }






    return <AssetContext.Provider value={{
        asset,
        getAssetData
    }}>
        {children}
    </AssetContext.Provider>
}

// export default AssetContext