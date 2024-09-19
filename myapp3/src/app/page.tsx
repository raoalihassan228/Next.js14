import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/addproduct">Add Products</Link>
      <br/>
      <Link href="/products">All Products</Link>
    </div>
  );
}
