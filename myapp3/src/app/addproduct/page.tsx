"use client";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");

  const addProduct = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, model }),
    });
    const data = await res.json();
    console.log(data);
    alert("Product added successfully");
  };
  
  return (
    <div>
      <h1>Add Product</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter product name"
        className="input"
      />
      <input
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        placeholder="Enter product price"
        className="input"
      />
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        value={color}
        placeholder="Enter product color"
        className="input"
      />
      <input
        type="text"
        onChange={(e) => setModel(e.target.value)}
        value={model}
        placeholder="Enter product model"
        className="input"
      />
      <button className="btn" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default Page;
