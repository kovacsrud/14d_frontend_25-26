import Kutya from './Kutya';
import { useContext } from 'react';
import KutyaContext from '../context/KutyaContext';


function Kutyak() {
  const {kutyak}=useContext(KutyaContext);
  return (
     <div>
      <h1 className="text-3xl text-lime-800 text-center font-bold">Rendelési adatok</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
          kutyak.map((kutya,i)=>(<Kutya key={i} kutya={kutya} />))
        }
      </div>
      </div>
  )
}

export default Kutyak