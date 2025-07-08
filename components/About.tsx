import useTranslations from '@/hooks/useTranslations';

const AboutSection = () => {
  const t = useTranslations();
    return (
      <section className="bg-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/about.webp" 
              alt="Motocross Action" 
              className="rounded-lg shadow-xl object-cover w-full h-full" 
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="bg-green-500 w-32 h-32 rounded-lg opacity-70"></div>
            </div>
          </div>
          
          <div className="text-white relative z-10">
            <h4 className="text-green-400 font-semibold tracking-wider uppercase mb-2">{t.about.sectionTitle}</h4>
            <h2 className="text-4xl font-bold mb-6 leading-tight">{t.about.title}</h2>
            
            <div className="w-16 h-1 bg-green-500 mb-6"></div>
            
            <p className="mb-8 text-gray-300 leading-relaxed">
              {t.about.description}
            </p>
            
            <div className="flex items-center space-x-4">
              <a 
                href="/about" 
                className="px-8 py-3 bg-green-500 text-gray-900 font-semibold rounded-md hover:bg-green-400 transition duration-300 inline-flex items-center"
              >
                {t.about.buttonStory}
              </a>
              <a 
                href="/community" 
                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-md transition duration-300"
              >
                {t.about.buttonCommunity}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;