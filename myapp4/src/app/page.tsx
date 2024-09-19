"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const onSubmit =async (e: any) => {
    e.preventDefault();
    console.log(file);

    const data = new FormData()
    if (file) {
      data.set("file", file);
    } else {
      alert("No file selected");
      return;
    }

    const result = await fetch("api/upload", {
      method:"post",
      body: data
    })
    console.log(result)
    alert("File uploaded")
  };

  return (
    <main>
      <h1>Upload Imge</h1>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Upload File</button>
      </form>
    </main>
  );
}
