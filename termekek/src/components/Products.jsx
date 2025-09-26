import { useState,useEffect } from "react";
import ProductRender from "./ProductRender";


function Products() {
    const [products,setProducts]=useState([]);

    const fetchProducts=()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(termekek=>setProducts(termekek.products))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        fetchProducts();
    },[])

  return (
    <div>
        <h2 className="text-3xl text-center font-bold my-10">Products list</h2>
        <div className="flex flex-row flex-wrap items-center justify-center">
        {
            products.map((product,i)=>(<ProductRender key={i} product={product} />))
        }
        </div>
    </div>
  )
}

export default Products