import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json("No file found", { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json("Invalid file type", { status: 400 });
  }
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/${file.name}`;
  await writeFile(path, buffer);
  return NextResponse.json({
    message: "File uploaded",
    path: path,
    success: true,
  });
}
