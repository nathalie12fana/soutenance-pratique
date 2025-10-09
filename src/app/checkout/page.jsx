"use client";
import React from "react";
import useCartStore from "@/store/cartStore";
import { useRouter } from "next/navigation"; // ✅ import router

export default function CheckoutPage() {
  const { cart, clearCart } = useCartStore();
  const router = useRouter();

  // Calcul total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    alert("✅ Paiement effectué avec succès !");
    clearCart();

    // ✅ Redirection après 2s
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">🧾 Récapitulatif de commande</h1>

        {cart.length > 0 ? (
          <>
            <ul className="divide-y divide-gray-200 mb-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-2"
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-2xl object-cover"
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

            {/* Total */}
            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total :</span>
              <span>{total}€</span>
            </div>

            {/* Bouton Payer */}
            <button
              onClick={handlePayment}
              className="w-full bg-green-500 text-white py-3 rounded-2xl font-semibold hover:bg-green-600 transition"
            >
              Payer
            </button>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Vous serez redirigé vers l’accueil après paiement...
            </p>
          </>
        ) : (
          <p className="text-center text-gray-500">
            Votre panier est vide. Retournez à la boutique 🛍️
          </p>
        )}
      </div>
    </div>
  );
}
