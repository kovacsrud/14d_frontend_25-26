import Kutyafajta from './Kutyafajta';
import { useContext } from 'react';
import KutyaContext from '../context/KutyaContext';

function Kutyafajtak() {
  const {kutyafajtak}=useContext(KutyaContext);
  return (
      <div>
      <h1 className="text-3xl text-lime-800 text-center font-bold">Kutyafajták</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
          kutyafajtak.map((kutyafajta,i)=>(<Kutyafajta key={i} kutyafajta={kutyafajta} />))
        }
      </div>
      </div>
  )
}

export default Kutyafajtak