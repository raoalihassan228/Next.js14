import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";

// export async function GET() {
//   await mongoose.connect(connectionStr);
//   const data = await Product.find();
//   console.log(data);
//   return NextResponse.json({ message: data });
// }

export async function GET() {
  let data = []
  let success = true
  try {
    await mongoose.connect(connectionStr);
    data = await Product.find();
  } catch (error) {
    success : false
    return NextResponse.json({ message: error, success });
  }
  return NextResponse.json({ message: data, success });
}


// Static post data
// export async function POST(){
//   await mongoose.connect(connectionStr);
//   let product = new Product({
//     "name": "oppo",
//     "price": "2000",
//     "color": "black",
//     "model": "A5"
//   })

//   let data =  await product.save()
//   return NextResponse.json({ message: data });
// }

// Dynamic post data
export async function POST(req: NextRequest){
  const payload = await req.json()
  await mongoose.connect(connectionStr);
  let product = new Product(payload)

  let data =  await product.save()
  return NextResponse.json({ message: data });
}

