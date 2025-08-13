"use client";
import React, { createContext, useContext, useState } from "react";

type Item = { productId: string; name: string; quantity: number; unit_cents: number };

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [items, setItems] = useState<Item[]>([]);
  const add = (item: Item) => {
    setItems((prev) => {
      const found = prev.find(p => p.productId === item.productId);
      if (found) return prev.map(p => p.productId === item.productId ? { ...p, quantity: p.quantity + item.quantity } : p);
      return [...prev, item];
    });
  };
  const remove = (productId: string) => setItems(prev => prev.filter(i => i.productId !== productId));
  const clear = () => setItems([]);
  const total = items.reduce((s, i) => s + i.unit_cents * i.quantity, 0);

  return <CartContext.Provider value={{ items, add, remove, clear, total }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);