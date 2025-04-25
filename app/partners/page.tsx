"use client"
import { useState } from "react";
import Link from "next/link";

export default function PartnersPage() {
  // Partner categories for filtering
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Partner data with categories
  const partners = [
    {
      id: 1,
      name: "SpeedTech Racing",
      logo: "/federacia.png",
      category: "all"
    },
   
    
  ];

  const filteredPartners = activeFilter === "all" 
    ? partners 
    : partners.filter(partner => partner.category === activeFilter);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
     

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            We are proud to collaborate with leading brands and organizations that share our passion for motorsports.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={() => setActiveFilter("all")} 
              className={`px-4 py-2 rounded-full ${activeFilter === "all" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              All Partners
            </button>
            <button 
              onClick={() => setActiveFilter("equipment")} 
              className={`px-4 py-2 rounded-full ${activeFilter === "equipment" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              Equipment
            </button>
            <button 
              onClick={() => setActiveFilter("manufacturer")} 
              className={`px-4 py-2 rounded-full ${activeFilter === "manufacturer" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              Manufacturers
            </button>
            <button 
              onClick={() => setActiveFilter("apparel")} 
              className={`px-4 py-2 rounded-full ${activeFilter === "apparel" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              Apparel
            </button>
            <button 
              onClick={() => setActiveFilter("sponsor")} 
              className={`px-4 py-2 rounded-full ${activeFilter === "sponsor" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              Sponsors
            </button>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-6 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {filteredPartners.map(partner => (
              <div key={partner.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="flex items-center justify-center h-32">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Call to Action */}
      <section className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-gray-300 mb-8">
            Interested in showcasing your brand to our passionate community of motorsport enthusiasts? 
            Partner with us to connect with our audience and support exciting events throughout the year.
          </p>
          <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-md font-medium transition">
            Contact Our Partnership Team
          </button>
        </div>
      </section>

    </main>
  );
}