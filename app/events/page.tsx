'use client'
import { useState } from "react";
import Link from "next/link";

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const events = [
    {
      id: 1,
      title: "Motocross Championship",
      date: "May 25, 2025",
      location: "Desert Arena",
      category: "competition",
      description: "Experience intense competition as riders battle for the championship title. Features professional and amateur divisions with cash prizes.",
      image: "/federacia.png"
    },
    {
      id: 2,
      title: "Night Ride Festival",
      date: "June 15, 2025",
      location: "City Raceway",
      category: "festival",
      description: "An electrifying night event with illuminated tracks, music, and spectacular light shows. Perfect for thrill-seekers and families alike.",
       image: "/federacia.png"
    },
    {
      id: 3,
      title: "ATV Enduro Challenge",
      date: "July 8, 2025",
      location: "Forest Trail",
      category: "competition",
      description: "Test your endurance and skill on challenging forest terrain. This all-day event features multiple obstacles and technical sections.",
      image: "/federacia.png"
    },
    {
      id: 4,
      title: "Beginners Workshop",
      date: "August 3, 2025",
      location: "Training Center",
      category: "workshop",
      description: "Learn essential riding techniques and safety practices. Ideal for newcomers to the sport with equipment provided.",
    image: "/federacia.png"
    },
    {
      id: 5,
      title: "Desert Rally",
      date: "September 12, 2025",
      location: "Sunset Valley",
      category: "rally",
      description: "A two-day adventure through scenic desert landscapes. Camping and meals included with registration.",
       image: "/federacia.png"
    },
    {
      id: 6,
      title: "Pro Exhibition",
      date: "October 5, 2025",
      location: "Memorial Stadium",
      category: "exhibition",
      description: "Watch professional riders showcase their most impressive stunts and techniques. Meet and greet session after the show.",
      image: "/federacia.png"
    }
  ];

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
     

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            Get ready for the ride of your life! Here's a sneak peek into our upcoming motocross adventures and tournaments.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={() => setActiveFilter("all")} 
              className={`px-4 py-2 rounded-full ${activeFilter === "all" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              All Events
            </button>
            <button 
              onClick={() => setActiveFilter("competition")} 
              className={`px-4 py-2 rounded-full ${activeFilter === "competition" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              Competitions
            </button>
            <button 
              onClick={() => setActiveFilter("festival")} 
              className={`px-4 py-2 rounded-full ${activeFilter === "festival" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              Festivals
            </button>
            <button 
              onClick={() => setActiveFilter("workshop")} 
              className={`px-4 py-2 rounded-full ${activeFilter === "workshop" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              Workshops
            </button>
            <button 
              onClick={() => setActiveFilter("rally")} 
              className={`px-4 py-2 rounded-full ${activeFilter === "rally" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              Rallies
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-6 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
                      {event.category}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition">
                      Register Now
                    </button>
                    <button className="text-green-600 hover:text-green-800 font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for the Adventure?</h2>
          <p className="text-gray-300 mb-8">Join our community of riders and never miss an event. Sign up for our newsletter for exclusive updates and early registration benefits.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md font-medium transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

  
    
    </main>
  );
}