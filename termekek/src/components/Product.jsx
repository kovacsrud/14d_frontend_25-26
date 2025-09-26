function Product({ product,kapcsol }) {
  return (
    <div class=" my-6  flex flex-col justify-center items-center">
      <div class="bg-gradient-to-r w-96 from-purple-600 to-pink-600 rounded-lg shadow-lg p-2">
        <h1 class="text-4xl font-bold text-white mb-4">{product.title}</h1>
        <p class="text-lg text-white mb-8">
          {product.category}
        </p>
        <p class="text-lg text-white mb-8">
          Ár:{product.price}
        </p>
        <a
          onClick={kapcsol}
          class="bg-white hover:bg-gray-200 text-purple-600 font-bold py-2 px-4 rounded"
        >
          Részletek
        </a>
      </div>
    </div>
  );
}

export default Product;
