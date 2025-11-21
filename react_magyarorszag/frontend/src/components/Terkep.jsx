import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect,useState,useContext } from 'react';
import TelepulesContext from '../context/TelepulesContext';




function Terkep({szeles,magas,zoom}) {
    const {selectedTelepules}=useContext(TelepulesContext);
     const[telepules,setTelepules]=useState({});

  useEffect(()=>{
   
    if(selectedTelepules){
      fetch(`${import.meta.env.VITE_BASE_URL}/telepulesek/telepulesnev/${selectedTelepules}`)
      .then(res=>res.json())
      .then(adat=>{setTelepules(adat);console.log(adat)})
      .catch(err=>alert(err));
      }   
      
  },[selectedTelepules]);

    


  return (
    <div className="flex flex-row items-center justify-center">
        { telepules.lat && telepules.lng && (
            <MapContainer center={[telepules.lat,telepules.lng]} zoom={zoom} style={{width:szeles,height:magas}}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; OpenStreetmap contributors' />
                <Marker position={[telepules.lat,telepules.lng]}>
                    <Popup>{telepules.nev}</Popup>
                </Marker>


            </MapContainer> 
        )

        }
    </div>
  )
}

export default Terkep