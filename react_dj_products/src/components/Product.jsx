import Review from "./Review";

function Product({ product }) {
  return (
    <div>
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Product Spotlight (Asymmetric Breathe Room) */}
          <div className="lg:col-span-7">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-highest atelier-shadow">
                <img
                  alt={product.images[0]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Modern professional mirrorless camera with premium lens on a clean minimalist studio background, soft cinematic lighting, high-end electronics aesthetic"
                  src={product.images[0]}
                />
              </div>
               
              {/* Aesthetic Detail */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tertiary-container/10 rounded-full blur-3xl -z-10"></div>
              
            </div>
             <div className="flex flex-row flex-wrap items-center justify-center">
                    {
                        product.reviews.map((review,i)=>(<Review key={i} review={review }/>))
                    }
             </div>
            </div>
          
          {/* Right Column: Product Card Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl atelier-shadow">
              {/* Category Tag */}
              <div className="mb-4">
                <span className="text-[10px] font-bold tracking-[0.1em] text-primary uppercase bg-primary-fixed px-3 py-1 rounded-full font-label">
                  {product.category}
                </span>
              </div>
              {/* Title & Price */}
              <div className="space-y-2 mb-6">
                <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface font-headline tracking-tight leading-tight">
                  {product.title}
                </h1>
                <p className="text-2xl font-bold text-primary font-headline">
                  {product.price}
                </p>
              </div>
              {/*} Rating */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex text-yellow-500">
                 {/* <span
                    className="material-symbols-outlined text-[18px]"
                    style={{"font-variation-settings": 'FILL 1;'}}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{"font-variation-settings": 'FILL 1;'}}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{"font-variation-settings": 'FILL 1;'}}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{"font-variation-settings": 'FILL 1;'}}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{"font-variation-settings": 'FILL 1;'}}
                  >
                    star_half
                  </span>*/}
                </div>
                <span className="text-sm font-medium text-on-surface-variant font-body">
                  {product.rating} ({product.reviews.length} reviews)
                </span> 
               
              </div>
              {/* Description */}
              <p className="text-on-surface-variant leading-relaxed mb-8 font-body">
                {product.description}
              </p>
              {/*} Stock Status */}
              <div className="flex items-center space-x-2 mb-10 p-3 bg-surface-container-low rounded-lg">
                <span className="material-symbols-outlined text-tertiary-container text-[20px]">
                  check_circle
                </span>
                <span className="text-sm font-semibold text-tertiary font-label">
                  In Stock ({product.stock})
                </span>
              </div>
              {/*} Action Button */}
              <button className="w-full primary-gradient text-on-primary py-4 rounded-lg font-bold font-headline flex items-center justify-center space-x-3 transition-transform scale-100 active:scale-95 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span>Add to Cart</span>
              </button>
              <button className="w-full mt-4 bg-surface-container-high text-on-surface py-4 rounded-lg font-bold font-headline transition-all hover:bg-surface-container-highest">
                Save to Wishlist
              </button>
            </div>
            {/* Product Features Grid (Atelier Style) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg ">
              
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
