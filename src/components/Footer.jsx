// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MAIN_PAGES, PRODUCTS, IMPORTANT_LINKS, ADDRESS_CONTACT } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-600 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-8">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Main Pages</h4>
          <ul>
            {MAIN_PAGES.map((page) => (
              <li key={page.name} className="mb-2">
                <Link
                  to={page.path}
                  className="hover:text-gray-300 border-b border-transparent hover:border-white transition-colors"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Products</h4>
          <ul>
            {PRODUCTS.map((product) => (
              <li key={product.name} className="mb-2">
                <Link
                  to={`/products/${product.id}`}
                  className="hover:text-gray-300 border-b border-transparent hover:border-white transition-colors"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Important Links</h4>
          <ul>
            {IMPORTANT_LINKS.map((link) => (
              <li key={link.name} className="mb-2">
                <Link
                  to={link.path}
                  className="hover:text-gray-300 border-b border-transparent hover:border-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Address & Contact</h4>
          <p className="mb-2">{ADDRESS_CONTACT.address}</p>
          <p className="mb-2">Email: {ADDRESS_CONTACT.email}</p>
          <p>Phone: {ADDRESS_CONTACT.phone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
