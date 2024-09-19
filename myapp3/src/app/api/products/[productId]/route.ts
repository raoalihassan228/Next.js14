import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, content: any) {
  const productId = content.params.productId;
  const filter = {_id: productId};
  const payload = await req.json()
  console.log(payload)
  await mongoose.connect(connectionStr)
  let result = await Product.findOneAndUpdate(filter, payload)
  return NextResponse.json({result, success: true });
}

export async function GET(req: NextRequest, content: any) {
  const productId = content.params.productId;
  const record = {_id: productId};
  await mongoose.connect(connectionStr)
  let result = await Product.findById(record)
  return NextResponse.json({result, success: true });
}


export async function DELETE(req: NextRequest, content: any) {
  const productId = content.params.productId;
  const record = {_id: productId};
  await mongoose.connect(connectionStr)
  let result = await Product.deleteOne(record)
  return NextResponse.json({result, success: true });
}