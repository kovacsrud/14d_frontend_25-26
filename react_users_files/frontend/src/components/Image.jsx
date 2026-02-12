import { useContext } from "react";
import ImageContext from "../context/ImageContext";

function Image({path,image}) {
    const {imageName,_id}=image;
    const {imgDelete}=useContext(ImageContext);
  return (
    <div className="m-5 card bg-sky-200 w-96 shadow-sm">
      <figure>
        <img
          src={`${import.meta.env.VITE_BASE_URL}${path}/${imageName}`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{imageName}</h2>
        
        <div className="card-actions justify-end">
          <button onClick={()=>imgDelete(_id)} className="btn btn-primary">Törlés</button>
        </div>
      </div>
    </div>
  );
}

export default Image;
