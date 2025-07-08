import useTranslations from '@/hooks/useTranslations';

const FeaturesGrid = () => {
  const t = useTranslations();
    return (
      <section className="bg-gray-900 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{t.features.title}</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">{t.features.subtitle}</p>
        </div>
  
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
            <div className="p-10 flex flex-col h-full justify-between border-b-4 border-green-500">
              <div>
                <div className="w-16 h-16 bg-green-500 rounded-lg mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.features.card1.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{t.features.card1.description}</p>
              </div>
              <button className="px-8 py-3 bg-green-500 text-gray-900 font-semibold rounded-md hover:bg-green-400 transition duration-300 inline-flex items-center self-start">
                {t.features.card1.button}
              </button>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 h-full min-h-80">
            <img src="/about.webp" alt="Adrenaline-Fueled Sports" className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 p-10 w-full">
              <span className="bg-green-500 text-gray-900 text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wider mb-4 inline-block">{t.features.card2.badge}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{t.features.card2.title}</h3>
              <p className="text-gray-200 mb-6 leading-relaxed max-w-lg">{t.features.card2.description}</p>
              <button className="px-8 py-3 bg-green-500 text-gray-900 font-semibold rounded-md hover:bg-green-400 transition duration-300 inline-flex items-center">
                {t.features.card2.button}
              </button>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 h-full min-h-80">
            <img src="/img1.webp" alt="Dive Into The World" className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 p-10 w-full">
              <span className="bg-green-500 text-gray-900 text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wider mb-4 inline-block">{t.features.card3.badge}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{t.features.card3.title}</h3>
              <p className="text-gray-200 mb-6 leading-relaxed max-w-lg">{t.features.card3.description}</p>
              <button className="px-8 py-3 bg-green-500 text-gray-900 font-semibold rounded-md hover:bg-green-400 transition duration-300 inline-flex items-center">
                {t.features.card3.button}
              </button>
            </div>
          </div>
  
          {/* Card 4 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
            <div className="p-10 flex flex-col h-full justify-between border-b-4 border-green-500">
              <div>
                <div className="w-16 h-16 bg-green-500 rounded-lg mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.features.card4.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{t.features.card4.description}</p>
              </div>
              <button className="px-8 py-3 bg-green-500 text-gray-900 font-semibold rounded-md hover:bg-green-400 transition duration-300 inline-flex items-center self-start">
                {t.features.card4.button}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesGrid;