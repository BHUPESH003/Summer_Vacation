import React from "react";
import { Link } from "react-router-dom";
import { PRODUCT } from "../../constants";

const ProductContainer = () => {
  const productsToShow = PRODUCT.slice(0, 4); // Show the first 4 products

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-5 border-t border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {productsToShow.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="p-2 border rounded-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <p className="font-semibold text-gray-800">{product.name}</p>
            <p className="text-gray-600">₹ {product.price}</p>
          </Link>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/products" className="text-blue-600 font-semibold bg-amber-100 border  border-gray-600 p-2 rounded-md">
          Explore All Products
        </Link>
      </div>
    </div>
  );
};

export default ProductContainer;
