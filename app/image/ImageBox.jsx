"use client";
import { useState } from "react";

export default function ImageBox() {
  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const res = await fetch("/image/api/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setImg(data.image);
    setLoading(false);
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl mb-4">AI Image Generator</h1>

      <input
        className="w-full p-3 text-black rounded"
        placeholder="Describe image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        className="mt-4 bg-cyan-500 px-6 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {img && <img src={img} className="mt-6 rounded-xl" />}
    </div>
  );
}
