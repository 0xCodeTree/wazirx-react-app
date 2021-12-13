import {useEffect, useState, useContext} from 'react';
import './App.css';
import Header from './components/Header';
import PriceList from './components/PriceList';
import PriceListTile from './components/PriceListTile';
import AssetData from './data/AssetData';
import  {AssetProvider} from './context/AssetContext';
import {AssetContext} from "./context/AssetContext";

function App() {



  return (
    <AssetProvider>
        <div className="App">
   <Header/>
   
   <PriceList />
    </div>
    </AssetProvider>
  
  );
}

export default App;
