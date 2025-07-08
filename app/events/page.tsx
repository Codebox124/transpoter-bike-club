'use client'
import Link from "next/link";
import useTranslations from '@/hooks/useTranslations';
import { events } from "@/constants/events";

export default function EventsPage() {
  const t = useTranslations();
  
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.eventsPage.hero.title}</h1>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            {t.eventsPage.hero.subtitle}
          </p>
        </div>
      </section>

      {/* <EventsSection /> */}
      {/* Events Grid */}
      <section className="py-16 px-6 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
                      {event.category}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <Link href="/registration">
                      <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition">
                        {t.eventsPage.buttons.registerNow}
                      </button>
                    </Link>
                    <Link href={event.url}>
                      <button className="text-red-600 hover:text-red-800 font-medium">
                        {t.eventsPage.buttons.learnMore}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
