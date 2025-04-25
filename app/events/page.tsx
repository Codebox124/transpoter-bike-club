'use client'
import Link from "next/link";

const events = [
  {
    title: "2024 Moto Drag Stage II",
    date: "October 20 , 11:00 AM",
    url:"https://motofederation.ge/ka/event/2024-moto-drag-racing-stage-ii",
    location: "Rustavi International Autodrome",
    image: "/federacia.png",
    category: "Championship",
    description: "Experience intense competition as riders battle for the championship title. Features professional and amateur divisions with cash prizes."
  },
  {
    title: "2024 Circuit Race - Stage III",
    date: "September 29, 11:00 AM",
    url:"https://motofederation.ge/ka/event/2024-circuit-race-stage-iii",
    location: "Rustavi International Autodrome",
    image: "/Circuit_racing.png",
    category: "Workshop",
    description: "An electrifying night event with illuminated tracks, music, and spectacular light shows. Perfect for thrill-seekers and families alike."
  },
  {
    title: "2024 Circuit Race - Stage II",
    date: "July 14, 11:00 AM",
    url:"https://motofederation.ge/ka/event/2024-circuit-race-stage-ii",
    location: "Rustavi International Autodrome",
    image: "/Frame 330 (1).png",
    category: "Competition",
    description: "Test your endurance and skill on challenging forest terrain. This all-day event features multiple obstacles and technical sections."
  },
  {
    title: "Georgian Cup TIME ATTACK Stage II",
    date: "July 14, 11:00 AM",
    url:"https://motofederation.ge/ka/event/georgian-cup-time-attack-stage-ii",
    location: "Rustavi International Autodrome",
    image: "/Frame 333.png",
    category: "Championship",
    description: "A two-day adventure through scenic desert landscapes. Camping and meals included with registration."
  },
  {
    title: "GNMF",
    date: "00",
    url:"https://motofederation.ge/ka/event/2025-sport-championship-of-georgia-circuit-racing-stage",
    location: "Rustavi International Autodrome",
    image: "/Gnmf.png",
    category: "Workshop",
    description: "Learn essential riding techniques and safety practices. Ideal for newcomers to the sport with equipment provided."
  },
  {
    title: "Georgian Cup TIME ATTACK Stage I",
    date: "00",
    url:"https://motofederation.ge/ka/event/georgian-cup-time-attack-stage-i",
    location: "Rustavi International Autodrome",
    image: "/TIME ATACK.png",
    category: "Competition",
    description: "Watch professional riders showcase their most impressive stunts and techniques. Meet and greet session after the show."
  }
];

// Helper function to slugify event titles for dynamic routing
const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function EventsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            Get ready for the ride of your life! Here's a sneak peek into our upcoming motocross adventures and tournaments.
          </p>
        </div>
      </section>

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
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
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
                      <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition">
                        Register Now
                      </button>
                    </Link>
                    <Link href={event.url}>
                      <button className="text-green-600 hover:text-green-800 font-medium">
                        Learn More
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
