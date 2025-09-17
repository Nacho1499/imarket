import React from "react";
import Link from "next/link";
import { ShoppingBag, Utensils, Smartphone, Home } from "lucide-react"; // nice icons
import { link } from "fs";

interface Category {
  id: number;
  name: string;
  slug: string;
  icon: React.ReactNode;
  link:string
};

const categories: Category[] = [
  { id: 1, link:"/cloth", name: "Clothing", slug: "clothing", icon: <ShoppingBag size={30} /> },
  { id: 2,link:"/food", name: "Food", slug: "food", icon: <Utensils size={30} /> },
  { id: 3,link:"/phone", name: "Phones", slug: "phones", icon: <Smartphone size={30} /> },
  { id: 4,link:"/appliance", name: "Appliances", slug: "appliances", icon: <Home size={30} /> },
];

function Category() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold">🌟 Popular Categories</h2>
        <p className="mt-2 text-gray-600">
          Shop from your favorite categories quickly and easily
        </p>

        {/* grid */}
        <div className="grid max-w-4xl mx-auto grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {categories.map((cat) => (
            <Link
              href={cat.link}
              key={cat.id}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 animate-bounce">
                {cat.icon}
              </div>
              <span className="font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
