"use client";

import { useRouter } from "next/navigation";


export default function DeleteBtn(props: any) {
    const router = useRouter();
  const deleteRecord = async() =>{
    const res = await fetch(`http://localhost:3000/api/products/${props.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.result) {
      alert("Product deleted successfully");
      router.push("/products");
    }
  }
  return (
    <div>
      <button onClick={deleteRecord}>Delete</button>
    </div>
  );
}
