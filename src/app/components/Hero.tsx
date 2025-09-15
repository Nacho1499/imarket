import React from "react";

function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-6">
            {/* Animated dots */}
            <div className="flex gap-3 mb-6">

                <div className="h-4 w-4 rounded-lg animate-bounce bg-yellow-400 "></div>
                <div className="h-4 w-4 rounded-lg animate-bounce bg-yellow-400 delay-300"></div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold mb-4 lg:text-6xl">
                Shop Everything in One Place
            </h1>
            <p className="text-md mb-8 max-w-xl lg:text-lg text-gray-100">
                Discover vendors near you. Buy clothes, food, phones, and appliances —
                all in one marketplace.
            </p>

            {/* CTA buttons */}
            <div className="flex gap-4  justify-center">
                <button className="px-3 py-2 lg:px-6 py-3 bg-white text-green-600 font-semibold rounded-xl shadow hover:scale-105 hover:bg-gray-100 transition">
                    Explore Market
                </button>
                <button className="px-3 py-2 lg:px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:scale-105 hover:bg-yellow-500 transition">
                    Become a Vendor
                </button>
            </div>

            {/* Categories */}
            <div className="flex gap-3 mt-12 flex-wrap justify-center">
                {["🧥 Clothing", "🍲 Food", "📱 Phones", "🏠 Appliances"].map(
                    (category) => (
                        <span
                            key={category}
                            className="px-5 py-2 bg-white text-black rounded-full shadow hover:bg-gray-100 cursor-pointer transition"
                        >
                            {category}
                        </span>
                    )
                )}
            </div>
        </section>
    );
}

export default Hero;
