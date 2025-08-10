"use client"

import { useState } from "react"

export default function ArtMakingActivityPage() {
  const [selectedDate, setSelectedDate] = useState("2025-08-12")
  const [selectedArt, setSelectedArt] = useState("canvas")
  const [selectedTime, setSelectedTime] = useState("12:00")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-32 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='paint' patternUnits='userSpaceOnUse' width='20' height='20'><circle cx='10' cy='10' r='2' fill='rgba(255,255,255,0.1)'/></pattern></defs><rect width='100' height='100' fill='url(%23paint)'/></svg>")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5">
          <h1 className="text-6xl font-black mb-5 drop-shadow-lg animate-bounce">Art Making Studio</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
            Design your own compositions, choose from professional-grade materials, and bring your artistic vision to
            life through various mediums and techniques.
          </p>
          <a
            href="#booking"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse"
          >
            Start Creating Now
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <h2 className="text-4xl font-bold text-center text-purple-600 mb-8">Art Making Experience</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-l-4 border-purple-600">
                <h5 className="text-xl font-semibold text-purple-600 mb-3 flex items-center">
                  <span className="text-red-500 mr-2">🎨</span> 30+ Art Varieties Available
                </h5>
                <p className="text-gray-700">
                  Choose from Mosaic art, Mandalas, Glass painting, Canvas painting, Clay modeling, Pottery, Jewelry
                  making, and many more creative options.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-l-4 border-purple-600">
                <h5 className="text-xl font-semibold text-purple-600 mb-3 flex items-center">
                  <span className="text-red-500 mr-2">👥</span> Share the Creative Journey
                </h5>
                <p className="text-gray-700">
                  Two people can collaborate on a single art piece. Perfect for couples, friends, or parent-child
                  bonding experiences.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-l-4 border-purple-600">
                <h5 className="text-xl font-semibold text-purple-600 mb-3 flex items-center">
                  <span className="text-red-500 mr-2">🏠</span> Take Your Creation Home
                </h5>
                <p className="text-gray-700">
                  Every piece you create is yours to keep. Walk away with beautiful handmade art that reflects your
                  creativity and personal style.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-l-4 border-purple-600">
                <h5 className="text-xl font-semibold text-purple-600 mb-3 flex items-center">
                  <span className="text-red-500 mr-2">⏰</span> No Time Pressure
                </h5>
                <p className="text-gray-700">
                  Stay as long as your art takes to complete. No time limits - focus on your creativity without rushing.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-around mt-12 text-center">
              <div className="m-3">
                <span className="block text-4xl font-bold text-purple-300">30+</span>
                <span className="block text-sm text-gray-600 mt-1">Art Varieties</span>
              </div>
              <div className="m-3">
                <span className="block text-4xl font-bold text-purple-300">2+</span>
                <span className="block text-sm text-gray-600 mt-1">Years Minimum Age</span>
              </div>
              <div className="m-3">
                <span className="block text-4xl font-bold text-purple-300">₹350-₹2000</span>
                <span className="block text-sm text-gray-600 mt-1">Price Range</span>
              </div>
              <div className="m-3">
                <span className="block text-4xl font-bold text-purple-300">11AM-7PM</span>
                <span className="block text-sm text-gray-600 mt-1">Walk-in Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-purple-600 mb-10">Flexible Pricing</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-2xl font-semibold text-purple-600 mb-2">Pay As You Choose</h4>
              <h3 className="text-3xl font-bold text-red-500 mb-6">₹350 - ₹2000</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Choose your preferred art form
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Materials included
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Expert guidance available
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> No booking required
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Walk-in anytime
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm border-4 border-purple-600">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-2xl font-semibold text-purple-600 mb-2">Special Combo Offer</h4>
              <h3 className="text-3xl font-bold text-red-500 mb-6">10% OFF</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Art + Slime same day
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Automatic discount applied
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Perfect for full day fun
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Maximum value experience
                </li>
                <li className="flex items-center text-red-500 font-bold">
                  <span className="text-green-500 mr-2">✓</span> Save money, double the fun!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-white/95 rounded-3xl p-10 shadow-2xl backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-center text-purple-600 mb-8">Optional Booking System</h2>
            <p className="text-center text-lg text-gray-600 mb-10">
              While no booking is required, you can optionally reserve your preferred time slot to guarantee
              availability during peak hours.
            </p>

            {/* Step 1: Select Date */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <div className="border-b-2 border-gray-100 pb-4 mb-5">
                <h4 className="text-2xl font-semibold text-purple-600 flex items-center">
                  <span className="text-red-500 mr-2">📅</span> Step 1: Select Your Preferred Date (Optional)
                </h4>
              </div>
              <div className="flex gap-4 flex-wrap justify-center">
                {[
                  { day: "MON", date: "11", month: "AUG", value: "2025-08-11" },
                  { day: "TUE", date: "12", month: "AUG", value: "2025-08-12" },
                  { day: "WED", date: "13", month: "AUG", value: "2025-08-13" },
                  { day: "THU", date: "14", month: "AUG", value: "2025-08-14" },
                  { day: "FRI", date: "15", month: "AUG", value: "2025-08-15" },
                ].map((dateItem) => (
                  <div
                    key={dateItem.value}
                    className={`bg-white border-2 rounded-xl p-4 text-center cursor-pointer transition-all min-w-20 ${
                      selectedDate === dateItem.value
                        ? "border-purple-600 bg-purple-600 text-white -translate-y-1"
                        : "border-gray-200 hover:border-purple-600 hover:-translate-y-1"
                    }`}
                    onClick={() => setSelectedDate(dateItem.value)}
                  >
                    <div className="text-sm font-semibold">{dateItem.day}</div>
                    <div className="text-xl font-bold my-1">{dateItem.date}</div>
                    <div className="text-xs">{dateItem.month}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Select Art Type */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <div className="border-b-2 border-gray-100 pb-4 mb-5">
                <h4 className="text-2xl font-semibold text-purple-600 flex items-center">
                  <span className="text-red-500 mr-2">🎨</span> Step 2: Choose Your Art Form
                </h4>
              </div>
              <div className="flex gap-5 flex-wrap justify-center">
                {[
                  { id: "canvas", icon: "🎨", name: "Canvas Painting", price: "₹500-₹1200" },
                  { id: "mosaic", icon: "🧩", name: "Mosaic Art", price: "₹350-₹800" },
                  { id: "pottery", icon: "🏺", name: "Pottery", price: "₹600-₹2000" },
                ].map((art) => (
                  <div
                    key={art.id}
                    className={`bg-white border-2 rounded-2xl p-6 text-center cursor-pointer transition-all min-w-48 ${
                      selectedArt === art.id
                        ? "border-purple-600 bg-purple-600 text-white -translate-y-2 shadow-xl"
                        : "border-gray-200 hover:border-purple-600 hover:-translate-y-2 hover:shadow-xl"
                    }`}
                    onClick={() => setSelectedArt(art.id)}
                  >
                    <div className="text-3xl mb-2">{art.icon}</div>
                    <div className="font-bold text-lg mb-1">{art.name}</div>
                    <div className="text-sm opacity-80 mb-2">No time limit</div>
                    <div className="text-lg font-bold text-red-500">{art.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Select Time */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <div className="border-b-2 border-gray-100 pb-4 mb-5">
                <h4 className="text-2xl font-semibold text-purple-600 flex items-center">
                  <span className="text-red-500 mr-2">⏰</span> Step 3: Preferred Start Time
                </h4>
              </div>
              <div className="flex gap-4 flex-wrap justify-center">
                {[
                  { time: "11:00", label: "11:00 AM", status: "available" },
                  { time: "12:00", label: "12:00 PM", status: "available" },
                  { time: "14:00", label: "2:00 PM", status: "available" },
                  { time: "16:00", label: "4:00 PM", status: "filling-fast" },
                  { time: "18:00", label: "6:00 PM", status: "available" },
                ].map((slot) => (
                  <div
                    key={slot.time}
                    className={`bg-white border-2 rounded-xl p-4 text-center cursor-pointer transition-all min-w-28 ${
                      selectedTime === slot.time
                        ? "border-purple-600 bg-purple-600 text-white -translate-y-1"
                        : slot.status === "filling-fast"
                          ? "border-yellow-400 bg-yellow-50 hover:border-purple-600 hover:-translate-y-1"
                          : "border-gray-200 hover:border-purple-600 hover:-translate-y-1"
                    }`}
                    onClick={() => setSelectedTime(slot.time)}
                  >
                    <div className="font-bold mb-1">{slot.label}</div>
                    <div className="text-xs opacity-80">
                      {slot.status === "available" ? "Available" : "Filling Fast"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <div className="border-b-2 border-gray-100 pb-4 mb-5">
                <h4 className="text-2xl font-semibold text-purple-600 flex items-center">
                  <span className="text-red-500 mr-2">👤</span> Step 4: Your Information
                </h4>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-purple-600 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-purple-600 focus:outline-none transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Number of People</label>
                <select className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-purple-600 focus:outline-none transition-colors">
                  <option>1 Person</option>
                  <option>2 People (Sharing one art)</option>
                </select>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-4">Booking Summary</h4>
              <div className="space-y-2 mb-4">
                <p>
                  <strong>Date:</strong> Tuesday, August 12
                </p>
                <p>
                  <strong>Art Form:</strong> Canvas Painting
                </p>
                <p>
                  <strong>Start Time:</strong> 12:00 PM
                </p>
                <p>
                  <strong>People:</strong> 1 Person
                </p>
              </div>
              <p className="text-sm opacity-90 mb-4 flex items-start">
                <span className="mr-2">ℹ️</span>
                Remember: No booking is required! You can walk in anytime between 11 AM - 7 PM. This booking just helps
                us prepare for your visit.
              </p>
              <div className="text-2xl font-bold mb-4 pt-4 border-t border-white/20">
                Estimated Price Range: ₹500 - ₹1200
                <small className="block text-sm font-normal mt-1 opacity-80">
                  (Final price depends on materials chosen)
                </small>
              </div>
              <button className="w-full bg-yellow-400 text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-orange-400 transition-colors">
                Reserve Your Spot (Optional)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
