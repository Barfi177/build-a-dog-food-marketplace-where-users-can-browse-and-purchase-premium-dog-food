"use client";
import React from "react";

export default function ProductCard({ product, onAdd }: any) {
  return (
    <div className="border p-4 rounded">
      <img src={product.imageUrl} alt={product.name} className="h-40 w-full object-cover rounded" />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="font-bold">${(product.priceCents / 100).toFixed(2)}</span>
        <button onClick={() => onAdd(product)} className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
      </div>
    </div>
  );
}