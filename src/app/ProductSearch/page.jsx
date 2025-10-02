"use client";
import React, { useState } from "react";

const products = [
  { id: 1, name: "Shrimp foods", price: 10, image: "/salade.png" },
  { id: 2, name: "French mayos", price: 8, image: "/pomme.png" },
  { id: 3, name: "Cheese pizza", price: 10, image: "/citron.png" },
  { id: 4, name: "Russian rolls", price: 8, image: "/burger.png" },
  { id: 5, name: "Seafood burgers", price: 8, image: "/burger2.png" },
  { id: 6, name: "Seafood burgers", price: 8, image: "/sandwicht.png" },
];

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(products);
  const [cart, setCart] = useState([]);

  // Recherche par prix ou nom partiel
  const handleSearch = () => {
    let results = [];

    if (!isNaN(query) && query.trim() !== "") {
      // Si l'entrée est un nombre → recherche par prix exact
      results = products.filter((p) => p.price.toString() === query.trim());
    } else {
      // Sinon recherche par nom partiel (insensible à la casse)
      results = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase().trim())
      );
    }

    setFiltered(results);
  };

  // Ajouter un produit au panier
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="p-6 bg-[#fbb200] min-h-screen">
      {/* Barre de recherche */}
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Nom (partiel) ou prix..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-3 py-1 rounded-2xl"
        >
          Search
        </button>
      </div>

      {/* Résultats de recherche */}
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <li
              key={p.id}
              className="border p-2 rounded bg-white shadow flex flex-col items-center"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-24 h-24 object-cover rounded-2xl mb-2"
              />
              <span className="font-semibold">
                {p.name} - {p.price}$
              </span>
              <button
                onClick={() => addToCart(p)}
                className="mt-2 bg-green-500 text-white px-2 py-1 rounded-2xl"
              >
                Ajouter
              </button>
            </li>
          ))
        ) : (
          <p>Aucun résultat</p>
        )}
      </ul>

      {/* Panier */}
      <div className="mt-6 border-t pt-4 bg-white p-4 rounded-2xl shadow">
        <h2 className="font-bold mb-2">🛒 Mon Panier</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between mb-2"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-2xl"
                  />
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                </div>
                <span className="font-semibold">
                  {item.price * item.quantity}€
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Votre panier est vide.</p>
        )}
      </div>
    </div>
  );
}
