import { events } from "@/app/utils/data";


// Fonction pour générer toutes les routes statiques à partir de tes produits
export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug, // 👈 Next.js va créer /product/seafood-pizza etc.
  }));
}

export default function ProductPage({ params }) {
  const { slug } = params;

  // Chercher le produit correspondant
  const product = events.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="p-6 text-red-600">
        <h1>❌ Produit introuvable</h1>
      </div>
    );
  }

  return (
  
    <div className="p-6 bg-amber-300 h-screen">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl text-red-600 font-bold mt-4">${product.price}</p>
      <img src={product.img} alt={product.title} className="w-64 mt-4" />
    </div>
  );
}
