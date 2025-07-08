import Link from "next/link";
import useTranslations from "@/hooks/useTranslations";

// EventCard Component
type EventCardProps = {
  title: string;
  date: string;
  location?: string;
  imageUrl?: string;
  category?: string;
};

export function EventCard({
  title,
  date,
  location,
  imageUrl = "/event-default.jpg",
  category,
}: EventCardProps) {
  const t = useTranslations();
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-0 right-0 bg-green-500 text-gray-900 font-semibold text-xs px-3 py-1 m-4 rounded-md">
          {category}
        </div>
      </div>

      <div className="p-6 border-l-4 border-green-500">
        <div className="flex items-center mb-4">
          <div className="bg-gray-900 rounded-md px-3 py-2 mr-4 text-center">
            <span className="block text-green-500 text-xs font-medium">
              {date.split(",")[0]}
            </span>
            <span className="block text-white text-xl font-bold">
              {date.split(",")[1]}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <div className="flex items-center text-gray-300 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-green-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{location}</span>
        </div>

        <Link className="cursor-pointer" href="/registration">
          <button className="w-full mt-2 px-4 py-2 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-600 transition duration-300 text-sm flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            {t.eventsPage.buttons.registerNow}
          </button>
        </Link>
      </div>
    </div>
  );
}
