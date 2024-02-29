import React, { useState } from "react";
import "./Products.css";
import Data from "./Data/Data.js";

const Products = () => {
  const [productItem, setProductItem] = useState(Data);

  const [searchTerm, setSearchTerm] = useState("");

  const upDatePrice = () => {
    const setFilter = productItem.filter((item) => {
      return item.price > 30;
    });
    setProductItem(setFilter);
  };

  const resetFunct = () => {
    setProductItem(Data);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = () => {
    // Parse the searchTerm as a number. If it's not a valid number, default to 0.
    const priceFilter = parseInt(searchTerm, 10) || 0;
   
    // Filter products where the price is greater than or equal to the priceFilter.
    const filteredProducts = productItem.filter(product => product.price >= priceFilter);
   
    // Update the productItem state with the filtered products.
    setProductItem(filteredProducts);
   };

  return (
    <div>
      <div className="filter-sect">
        <p className="filter" onClick={upDatePrice}>
          Filter By price
        </p>
        <div className="inpt">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <p className="filter" onClick={handleFilter}>Filter</p>
          
        <p className="filter" onClick={resetFunct}>
          Reset
        </p>
        </div>
      </div>
      <div className="cart">
        {productItem.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.thumbnail} alt={`${product.title}-Image`} />
            </div>
            <div className="product-details">
              <p className="product-title">{product.title}</p>
              <p className="product-price">{product.price}</p>
            </div>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
