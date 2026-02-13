import { useContext } from "react";
import ImageContext from "../context/ImageContext";


function ImageBin({image,data}) {
    const{imgDeleteBin}=useContext(ImageContext);

  return (
    <div>
        <div className="m-5 card bg-sky-200 w-96 shadow-sm">
      <figure>
        <img
          src={data}
          alt="bin"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{image.imageName}</h2>
        
        <div className="card-actions justify-end">
          <button onClick={()=>imgDeleteBin(image._id)} className="btn btn-primary">Törlés</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ImageBin