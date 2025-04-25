// components/Hero.tsx
const Hero = () => {
    return (
      <section className="relative h-[90vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero.webp')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Passionate about motorcycles</h1>
          <p className="max-w-xl mx-auto mb-6">
            Join us at ATV & Motorcycle and be part of a thriving community that celebrates motocross, adrenaline, and adventure!
          </p>
          <button className="px-8 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-600">
            Explore More
          </button>
        </div>
      </section>
    );
  }
  
  export default Hero;
  