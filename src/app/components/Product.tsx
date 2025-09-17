import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface Product {
  id: number;
  img: string;
  name: string;
  price: string;
  vendor: string;
}

const products: Product[] = [
  { id: 1, img: "/phone.jpg", name: "iPhone 14 Pro", price: "$999", vendor: "TechWorld" },
  { id: 2, img: "/fab.jpg", name: "Classic White Shirt", price: "$40", vendor: "Clothify" },
  { id: 3, img: "/food.jpg", name: "Jollof Rice Pack", price: "$10", vendor: "Mama’s Kitchen" },
  { id: 4, img: "/home.jpg", name: "Samsung Smart TV", price: "$650", vendor: "Appliance Hub" },
   { id: 5, img: "/home.jpg", name: "Samsung Smart TV", price: "$650", vendor: "Appliance Hub" },
    { id: 6, img: "/home.jpg", name: "Samsung Smart TV", price: "$650", vendor: "Appliance Hub" },
];

function Product() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center">🔥 Trending Products</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg shadow-md bg-white hover:shadow-lg transition overflow-hidden"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-600 text-sm">by {product.vendor}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-green-600 font-bold">{product.price}</span>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} />
                </div>
              </div>
              <button className="mt-4 cursor-pointer w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
