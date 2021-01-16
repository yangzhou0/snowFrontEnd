import React,{useState, useEffect} from 'react'
import ReactMapGL, {Marker,Popup} from 'react-map-gl'
import { Link} from 'react-router-dom';
import { fetchResorts} from '../api/ResortAPI';
import './css/mapPageCss.css'
import snowboardLogo from '../assets/icons/snowboard.png'
import SearchBar from '../components/SearchBar'
import {resortsToOptions} from "./helper/resortsToOptions"
export default function MapPage(){
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 4
  });

  const [selectedResort, setSelectedResort] = useState(null);
  const [resortsData, setResortsData] = useState([]);
  const [resortOptions, setResortOptions] = useState([]);

  const handleClick = (resort)=>{
    setSelectedResort(resort)
  }

  useEffect(()=>{
    const listener = (e)=>{
      if(e.key == 'Escape'){
        setSelectedResort(null)
      }
    }
    window.addEventListener('keydown',listener)
    fetchResorts().then(resorts => {
      setResortsData(resorts);
      setResortOptions(resortsToOptions(resorts))
    })
    return ()=>{
      window.removeEventListener('keydown',listener)
    }

  },[])

  return ( 
    <div>
      <SearchBar resortOptions = {resortOptions} setViewport={setViewport} setSelectedResort={setSelectedResort}/>
      <ReactMapGL
      {...viewport}
      mapStyle = 'mapbox://styles/yangzhou93/ckipmnmy613zi17ti10exzems'
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}>
      {resortsData.map((resort,index)=>
        <Marker key = {index} latitude = {resort.latitude} longitude = {resort.longitude}>
          <button className = 'marker-btn' onClick = {(e)=>{e.preventDefault();handleClick(resort)}}>
            <img src = {snowboardLogo} alt ='resort' />
          </button>
        </Marker>
      )}
        {selectedResort && <Popup latitude = {selectedResort.latitude} longitude = {selectedResort.longitude} closeOnClick={false} onClose={() => setSelectedResort(null)}>
          <div>
            <Link to={`/resorts/${selectedResort.name}`}>{selectedResort.name}</Link>
            <p>{selectedResort.description}</p>
            <a href = {selectedResort.website } target="_blank">website</a>
          </div>
        </Popup>}
      </ReactMapGL>

    </div>
  );
}