import { PRODUCTS_DATA } from "/src/constants/index";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

const ProductBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { categoryId } = useParams();

  const isMobile =(window.innerWidth < 768);

  // Effect to retrieve the last selected category from URL search params on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lastSelectedCategory = params.get("category");

    if (lastSelectedCategory !== null) {
      setSelectedCategory(Number(lastSelectedCategory));
    } else {
      // Set category 1 as the default selected category
      setSelectedCategory(1);
    }
  }, [location.search]);

  // Function to handle category click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);

    // Update the URL search params with the selected category
    const params = new URLSearchParams(location.search);
    params.set("category", categoryId);
    navigate(`?${params.toString()}`);
  };

  return (
    <>
      {/* Category Banner Image (Desktop) */}
      {selectedCategory !== null && (
        <div
          className="h-80 bg-gray-400 bg-cover bg-center mb-4 hidden md:block"
          style={{
            backgroundImage: `url(${
              PRODUCTS_DATA.categories.find((category) => category.id === selectedCategory)
                .bannerImage
            })`,
          }}
        ></div>
      )}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Navigation Bar */}
          <div className="w-full md:w-1/4 pr-4">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold">Product Categories</h2>
            </div>
            <ul className="space-y-1">
              {PRODUCTS_DATA.categories.map((cat) => (
                <li
                  key={cat.id}
                  className={`cursor-pointer flex items-center space-x-2 py-2 px-4 rounded ${
                    selectedCategory === cat.id ? "bg-gray-300" : ""
                  }`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>{cat.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-3/4">
            {/* Render the product details based on the selected category */}
            {selectedCategory !== null && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PRODUCTS_DATA.products.map((product) => {
                  if (product.category === selectedCategory) {
                    return (
                        
                        
                      <div key={product.id} className="border rounded-lg p-4">
                      <Link to={`/products/${product.id}`}>
                        <div
                          className="w-full h-40 rounded bg-center bg-no-repeat bg-contain bg-gray-400 mb-4"
                          style={{ backgroundImage: `url(${product.image})` }}
                        ></div>
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-sm mb-4">{product.description}</p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-green-500 font-semibold">{product.price}</span>
                          <div className="text-blue-500 font-semibold">{`Quantity: ${product.quantity}`}</div>
                        </div>
                          </Link>
                        
                        
                        <div className="flex space-x-2">
                          {/* Start Trial Button */}
                          <Link
                            to={`/order`}
                            className="flex-1 bg-blue-500 text-white rounded hover:bg-blue-600 py-2 text-sm md:text-base flex justify-center items-center"
                          >
                            Start Trial
                          </Link>
                          {/* Start Subscription Button */}
                          <Link
                            to={`/order`}
                            className="flex-1 bg-green-500 text-white rounded hover:bg-green-600 py-2 text-sm md:text-base flex justify-center items-center"
                          >
                            Start Subscription
                          </Link>
                          {/* View Button */}
                          {!isMobile ?
                          <Link
                            to={`/products/${product.id}`}
                            className="flex-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 py-2 text-sm md:text-base flex justify-center items-center "
                          >
                            View
                          </Link>
                          :null}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBar;
