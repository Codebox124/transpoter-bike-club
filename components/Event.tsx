import { EventCard } from "./EventCard";
import useTranslations from '@/hooks/useTranslations';
import { events } from '@/constants/events';

const EventsSection = () => {
  const t = useTranslations();

  return (
    <section className="bg-gray-900 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
           
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.events.title}</h2>
            <div className="w-24 h-1 bg-red-500 mt-4 mb-4"></div>
            
          </div>

          <a href="/events" className="hidden md:flex items-center text-red-400 hover:text-red-300 transition duration-300">
            <span className="mr-2">{t.events.viewAll}</span>
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
              imageUrl={event.image}
              category={event.category}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-red-500 text-gray-900 font-semibold rounded-md hover:bg-red-400 transition duration-300 shadow-md inline-flex items-center md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
            {t.events.viewAllMobile}
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;