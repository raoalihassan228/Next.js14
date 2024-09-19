"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = (props:any) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");

  useEffect(()=>{
    getPorductDetails()
  },[])

  const getPorductDetails = async () => {
    let productId= props.params.editProduct
    const fetchData = await fetch(`http://localhost:3000/api/products/${productId}`)
    const data = await fetchData.json()
    console.log(data)

    if (data.success) {
      let result1 = data.result
      setName(result1.name)
      setPrice(result1.price)
      setColor(result1.color)
      setModel(result1.model)
    }
  }

  let updateProduct = async () => {
    let productId= props.params.editProduct
    const res = await fetch(`http://localhost:3000/api/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, color, model }),
    });
    const data = await res.json();
    if (data.result) {
      alert("Product updated successfully");
    }
  }
  return (
    <div>
      <h1>Update Product</h1>
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
      <button className="btn" onClick={updateProduct}>
        Update Product
      </button>
      <Link href="/products">Go to Products</Link>
    </div>
  );
};

export default Page;
