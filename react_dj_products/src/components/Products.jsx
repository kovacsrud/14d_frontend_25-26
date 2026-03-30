import { useState,useEffect } from "react";
import Product from "./Product";

function Products() {
    const[products,setProducts]=useState([]);

    const getProducts=()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(adat=>setProducts(adat.products))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        getProducts();
    },[])

  return (
    <div>
        {
            products.map((product)=>(<Product key={product.id} product={product} />))
        }
    </div>
  )
}

export default Products