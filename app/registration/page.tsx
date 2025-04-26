'use client'
import { useState } from "react";
import Link from "next/link";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    experienceLevel: "",
    equipmentRental: "no",
    specialRequests: "",
    bikeType: ""
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Registration submitted successfully!");
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Register For An Event</h1>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            Secure your spot in our upcoming events. Fill in the form below to join the adrenaline-filled journey!
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 px-6 bg-gray-50 flex-grow">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
          

            <div className="w-full p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Registration Details</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Select Event</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">-- Select an event --</option>
                    <option value="motorcross">Motorcross Championship - May 25, 2025</option>
                    <option value="nightride">Night Ride Festival - June 15, 2025</option>
                    <option value="enduro">ATV Enduro Challenge - July 8, 2025</option>
                    <option value="workshop">Beginners Workshop - August 3, 2025</option>
                    <option value="rally">Desert Rally - September 12, 2025</option>
                    <option value="exhibition">Pro Exhibition - October 5, 2025</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">-- Select level --</option>
                    <option value="beginner">Beginner (Less than 1 year)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3-5 years)</option>
                    <option value="expert">Expert (5+ years)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bikeType" className="block text-sm font-medium text-gray-700 mb-1">Type of Bike</label>
                  <input
                    id="bikeType"
                    name="bikeType"
                    type="text"
                    value={formData.bikeType}
                    onChange={handleChange}
                    placeholder="e.g., Yamaha Raptor 700"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>




                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">Special Requests or Questions</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}

                    placeholder="Let us know if you have any special requests or questions..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Register Now
                  </button>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    By registering, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}