import { PRODUCTS_DATA } from "/src/constants/index";
import React,{useEffect} from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = PRODUCTS_DATA.products.find((p) => p.id === parseInt(productId));

  if (!product) {
    // Handle the case when the product with the given ID is not found
    return <div>Product not found</div>;
  }
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen-md mx-auto px-4">
      {/* Product Banner Image */}
      <div className="h-96 mb-4 hidden md:block">
        <img src={product.bannerImage} alt={product.name} className="h-96 object-fill w-full" />
      </div>

      {/* Product Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
        <div className="flex flex-col md:flex-row md:mb-4">
          <div className="w-full md:w-1/3 md:pr-4">
            <img src={product.image} alt={product.name} className="w-full rounded" />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:pl-4">
            <p className="text-sm mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-green-500 font-semibold">{product.price}</span>
                <div className="text-blue-500 font-semibold mt-2">{`Quantity: ${product.quantity}`}</div>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                {/* Start Trial Button */}
                <Link to={'/order'}>
                <button className="bg-blue-500 text-white rounded hover:bg-blue-600 px-4 py-2 text-sm md:text-base">
                  Start Trial
                </button>
                </Link>
                {/* Start Subscription Button */}
                <Link to={'/order'}>
                <button className="bg-green-500 text-white rounded hover:bg-green-600 px-4 py-2 text-sm md:text-base">
                  Start Subscription
                </button>
                </Link>
               
                {/* View Button */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
