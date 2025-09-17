import React from "react";
import Image from "next/image";

interface Vendor {
  id: number;
  img: string;
  vendorName: string;
  location: string;
  category: string
}

const vendors: Vendor[] = [
  {
    id: 1,
    img: "/home.jpg",
    vendorName: "ND Stores",
    location: "Kuje Area Council Abuja",
    category: "Home appliances"

  },
  {
    id: 2,
    img: "/food.jpg",
    vendorName: "AB SuperMart",
    location: "Garki, Abuja",
    category: "Food items"
  },
  {
    id: 3,
    img: "/phone.jpg",
    vendorName: "City Trends",
    location: "Wuse 2, Abuja",
    category: "phones & accessories"
  },
 
  {
    id: 5,
    img: "/fab.jpg",
    vendorName: "Mega Foods",
    location: "Maitama, Abuja",
    category: "Clothes & fashion"
  },
  
  
];

function Vendors() {
  return (
    <section className="py-20 px-6">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-center mb-2">
        🔥 Featured Vendors
      </h1>
      <p className="text-center text-gray-500 max-w-lg mx-auto mb-12">
        Browse some of our top-rated vendors and explore their amazing products.
      </p>

      {/* Vendor grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {vendors.map((ven) => (
          <div
            key={ven.id}
            className="rounded-xl shadow-lg overflow-hidden bg-white hover:scale-105 transition-transform duration-300"
          >
            {/* Vendor image */}
            <div className="relative h-48 w-full">
              <Image
                src={ven.img}
                alt={ven.vendorName}
                fill
                className="object-cover"
              />
            </div>

            {/* Vendor info */}
            <div className="p-5">
              <h2 className="text-lg font-semibold">{ven.vendorName}</h2>
              <p className="text-sm text-gray-500"><span className="font-bold">Category:</span> {ven.category}</p>
              <p className="text-sm text-gray-500">{ven.location}</p>

              <button className="mt-5 w-full rounded-md bg-yellow-400 cursor-pointer text-black font-medium py-2 px-4 hover:bg-yellow-500 transition">
                Check Vendor
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vendors;
