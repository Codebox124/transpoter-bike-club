import { EventCard } from "./EventCard";

const EventsSection = () => {
    // Sample events data
    const events = [
      {
        title: "National Championship Series",
        date: "2025-05-15",
        location: "Pro Arena Track",
        imageUrl: "/federacia.png",
        
        category: "Championship"
      },
      {
        title: "Weekend Rider Workshop",
        date: "2025-05-22",
        location: "Training Facility",
        imageUrl: "/federacia.png",
        category: "Workshop"
      },
      {
        title: "Amateur League Finals",
        date: "2025-06-03",
        location: "East Valley Circuit",
        imageUrl: "/federacia.png",
        category: "Competition"
      }
    ];
  
    return (
      <section className="bg-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="inline-block px-4 py-1 bg-green-500 bg-opacity-20 text-green-400 font-medium text-sm rounded-full mb-4">MARK YOUR CALENDAR</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming Events</h2>
              <div className="w-24 h-1 bg-green-500 mt-4 mb-4"></div>
              <p className="text-gray-300 max-w-2xl">
                Join us for these exciting motocross events designed for all skill levels and interests.
              </p>
            </div>
            
            <a href="/events" className="hidden md:flex items-center text-green-400 hover:text-green-300 transition duration-300">
              <span className="mr-2">View All Events</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard 
                key={index} 
                title={event.title} 
                date={event.date} 
                location={event.location}
                imageUrl={event.imageUrl}
                category={event.category}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-green-500 text-gray-900 font-semibold rounded-md hover:bg-green-400 transition duration-300 shadow-md inline-flex items-center md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
              View All Events
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default EventsSection;