"use client";
import Link from "next/link";
import useTranslations from '@/hooks/useTranslations';

export default function PartnersPage() {
  const t = useTranslations();
  const partner = {
    id: 1,
    name: "SpeedTech Racing",
    logo: "/part.jpeg",
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.partnersPage.hero.title}</h1>
          <p className="text-gray-300 text-lg mb-6">
            {t.partnersPage.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Single Partner Display */}
      <section className="py-20 px-6 bg-gray-50 flex-grow flex flex-col items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-7xl flex flex-col items-center">
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full  object-cover"
          />
         
        </div>
      </section>

    
     
    </main>
  );
}
