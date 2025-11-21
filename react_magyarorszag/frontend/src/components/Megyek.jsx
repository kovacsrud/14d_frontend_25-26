import {useContext} from 'react';
import MegyeContext from '../context/MegyeContext';
import Megye from './Megye';

function Megyek() {
  const {megyek}=useContext(MegyeContext);

  return (
      <div>
        <h1 className="m-5 text-3xl font-bold text-center text-amber-500">Megyék:</h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
            {
                megyek.map((megye,i)=>(<Megye key={i} megye={megye} />))
            }
        </div>
    </div>
  )
}

export default Megyek