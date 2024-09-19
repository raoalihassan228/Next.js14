import DeleteBtn from "@/lib/deleteProduct";
import Link from "next/link";
import React from "react";

const getPorducts = async () => {
  const res = await fetch("http://localhost:3000/api/products", {cache: "no-cache"});
  const data = await res.json();
  return data;
};

const Page = async () => {
  const data = await getPorducts();
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl font-bold m-5">All Products</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Color</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {data.message.map((product: any, index: any) => {
            return (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.color}</td>
                <td>{product.model}</td>
                <td><Link href={"/products/"+product._id}>Update</Link>
                <DeleteBtn id = {product._id}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
