import { useState } from "react";
import Product from "./Product";
import ProductDetail from "./ProductDetail";

function ProductRender({product}) {
    const [isOpen,setIsOpen]=useState(false);

    const kapcsol=()=>{
        setIsOpen(prev=>!prev);
    }

  return (
    <div>
        {
            isOpen ?
            <>
                <Product product={product} kapcsol={kapcsol} />
                <ProductDetail product={product} />
            </>
            :
            <>
                <Product product={product} kapcsol={kapcsol} />
            </>
        }
    </div>
  )
}

export default ProductRender