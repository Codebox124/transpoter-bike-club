'use client'
import { useState } from "react";
import useTranslations from '@/hooks/useTranslations';
import { events } from "@/constants/events";

export default function RegistrationPage() {
  const t = useTranslations();
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
    alert(t.registrationPage.messages.success);
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.registrationPage.hero.title}</h1>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            {t.registrationPage.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 px-6 bg-gray-50 flex-grow">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
          

            <div className="w-full p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">{t.registrationPage.form.title}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">{t.registrationPage.form.fullName.label}</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder={t.registrationPage.form.fullName.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.registrationPage.form.email.label}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t.registrationPage.form.email.placeholder}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t.registrationPage.form.phone.label}</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={t.registrationPage.form.phone.placeholder}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">{t.registrationPage.form.eventType.label}</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">{t.registrationPage.form.eventType.placeholder}</option>
                    {events.map((event) => (
                      <option key={event.id} value={event.id}>
                        {event.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">{t.registrationPage.form.experienceLevel.label}</label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">{t.registrationPage.form.experienceLevel.placeholder}</option>
                    <option value="beginner">{t.registrationPage.form.experienceLevel.options.beginner}</option>
                    <option value="intermediate">{t.registrationPage.form.experienceLevel.options.intermediate}</option>
                    <option value="advanced">{t.registrationPage.form.experienceLevel.options.advanced}</option>
                    <option value="expert">{t.registrationPage.form.experienceLevel.options.expert}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bikeType" className="block text-sm font-medium text-gray-700 mb-1">{t.registrationPage.form.bikeType.label}</label>
                  <input
                    id="bikeType"
                    name="bikeType"
                    type="text"
                    value={formData.bikeType}
                    onChange={handleChange}
                    placeholder={t.registrationPage.form.bikeType.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>




                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">{t.registrationPage.form.specialRequests.label}</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}

                    placeholder={t.registrationPage.form.specialRequests.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    {t.registrationPage.form.submitButton}
                  </button>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    {t.registrationPage.form.termsText}
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