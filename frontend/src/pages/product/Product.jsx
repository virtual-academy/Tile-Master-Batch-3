import React, { useState } from "react";
import axios from 'axios';

const Product = () => {
  const [data, setData] = useState({
    product_name: "",
    price: "",
    description: "",
  });
  const handleInputs = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setData({ ...data, [name]: val });
  };
  const handleSubmits = (e)=>{
    // e.preventDefaults();
    axios.post('http://localhost:4000/api/products/add-product', data);

    alert("Product Saved Successfully..")

  }

  return (
    <form>
      Product Name <br />
      <input
        type="text"
        name="product_name"
        onChange={handleInputs}
        value={data.product_name}
      />
      <br />
      Price <br />
      <input
        type="text"
        name="price"

        onChange={handleInputs}
        value={data.price}
      />
      <br />
      Description <br />
      <input
        type="text"
        name="description"
        onChange={handleInputs}
        value={data.description}
      />
      <br />
      <button onClick={handleSubmits}>Submit</button>
    </form>
  );
};

export default Product;
