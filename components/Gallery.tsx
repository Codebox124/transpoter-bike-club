const Gallery = () => {
    return (
      <section className="bg-gray-900 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-500 bg-opacity-20 text-green-400 font-medium text-sm rounded-full mb-4">CAPTURED MOMENTS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Experience the Thrill Through Our Lens</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A visual journey through our most exhilarating events, breathtaking jumps, and milestone victories.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="row-span-2 col-span-1">
              <div className="relative h-full group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img2.webp" 
                  alt="Professional rider mid-air jump" 
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 p-6">
                  <span className="bg-green-500 text-xs text-gray-900 px-3 py-1 rounded-md font-semibold uppercase">Competition</span>
                  <h3 className="text-xl font-bold text-white mt-2">Championship Finals</h3>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="relative h-full group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img3.webp" 
                  alt="Rider in action on dirt track" 
                  className="object-cover w-full h-64 transform group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-lg font-bold text-white">Track Day</h3>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="relative h-full group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img4.webp" 
                  alt="Close-up of motocross gear" 
                  className="object-cover w-full h-64 transform group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-lg font-bold text-white">Pro Equipment</h3>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <div className="relative h-full group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img5.webp" 
                  alt="Aerial view of motocross track" 
                  className="object-cover w-full h-64 transform group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 p-6">
                  <span className="bg-green-500 text-xs text-gray-900 px-3 py-1 rounded-md font-semibold uppercase">Featured</span>
                  <h3 className="text-xl font-bold text-white mt-2">Champion's Track</h3>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="relative h-full group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img6.webp" 
                  alt="Rider catching air during jump" 
                  className="object-cover w-full h-64 transform group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-lg font-bold text-white">Training Session</h3>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="relative h-full group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/img1.webp" 
                  alt="Motocross team celebration" 
                  className="object-cover w-full h-64 transform group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-lg font-bold text-white">Team Victory</h3>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
      </section>
    );
  };
  
  export default Gallery;