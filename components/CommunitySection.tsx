const CommunitySection = () => {
    return (
      <section className="bg-gray-100 py-24 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="20" cy="20" r="3.5" fill="#000000"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
  
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-600 font-medium text-sm rounded-full mb-6">Join Our Community</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-gray-900">
              A Thriving Community of Passionate Motocross Enthusiasts
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
              Connect with riders who share your passion for the track. Access industry insights, event information, and forge meaningful relationships with fellow enthusiasts dedicated to elevating the sport.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-8 py-3 bg-green-500 text-gray-900 font-semibold rounded-md hover:bg-green-400 transition duration-300 shadow-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Join Community
              </button>
              
              <button className="px-8 py-3 bg-white text-gray-900 border border-gray-300 font-semibold rounded-md hover:bg-gray-50 transition duration-300 shadow-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                Learn More
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-500 text-2xl font-bold mb-2">10,000+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-500 text-2xl font-bold mb-2">250+</div>
              <div className="text-gray-600">Annual Events</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-500 text-2xl font-bold mb-2">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CommunitySection;