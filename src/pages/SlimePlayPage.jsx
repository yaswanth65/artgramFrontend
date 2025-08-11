'use client'

import { useState } from 'react'

export default function SlimePlayPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    date: null,
    location: null,
    session: 'complete',
    price: 850,
    time: null,
  })

  const nextStep = (step) => {
    setCurrentStep(step)
  }

  const prevStep = (step) => {
    setCurrentStep(step)
  }

  const selectDate = (date) => {
    setBookingData(prev => ({ ...prev, date }))
  }

  const selectLocation = (location) => {
    setBookingData(prev => ({ ...prev, location }))
  }

  const selectSession = (session, price) => {
    setBookingData(prev => ({ ...prev, session, price: parseInt(price) }))
  }

  const selectTime = (time) => {
    setBookingData(prev => ({ ...prev, time }))
  }

  const confirmBooking = () => {
    alert('Booking confirmed! You will receive a confirmation call within 2 hours.')
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Not selected'
    const date = new Date(dateStr)
    return date.toDateString()
  }

  const getLocationName = (location) => {
    const locationNames = {
      downtown: 'Downtown Center',
      mall: 'Shopping Mall',
      park: 'Adventure Park',
    }
    return locationNames[location] || 'Not selected'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-purple-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-green-400 via-purple-500 to-pink-500 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-45 from-green-400/80 to-purple-600/80 z-10"></div>
        <div className="relative z-20 max-w-4xl px-5">
          <h1 className="text-6xl font-black mb-5 text-white drop-shadow-lg animate-bounce">
            EXPERIENCE SLIME!!
          </h1>
          <p className="text-2xl mb-8 drop-shadow-md">1 Hr 15 min sessions</p>
          <a 
            href="#booking" 
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse"
          >
            Book Your Slime Experience
          </a>
        </div>
      </section>

      {/* Package Overview Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
            Choose Your Slime Adventure
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Base Package */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-2xl border-4 border-green-400 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
              
              <div className="text-center mb-6">
                <div className="inline-block bg-green-400 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
                  Base Package
                </div>
                <h3 className="text-3xl font-black text-red-600 mb-2">Rs 750/- Pack</h3>
                <p className="text-gray-600 text-lg font-medium">Perfect Starting Experience</p>
              </div>

              <div className="space-y-4 mb-6">
                {/* Slime Play Card */}
                <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-lg border-l-4 border-green-400 hover:translate-x-1 transition-transform">
                  <div className="text-3xl">🎨</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-red-600">Slime Play</h4>
                      <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold">45 min</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-tight">
                      Touch different colours and textures, slime throwing, jumping, magnetic slime and much more!
                    </p>
                  </div>
                  <img 
                    src="https://res.cloudinary.com/df2mieky2/image/upload/v1754831660/IMG_3352_nsdiar.jpg" 
                    alt="Kids playing with slime" 
                    className="w-20 h-15 rounded-lg object-cover"
                  />
                </div>

                {/* Slime Demo Card */}
                <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-lg border-l-4 border-green-400 hover:translate-x-1 transition-transform">
                  <div className="text-3xl">🧪</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-red-600">Slime Demo</h4>
                      <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold">15 min</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-tight">
                      Watch live slime making by our staff. 200ml fresh slime to take home with choice of scent & charms.
                    </p>
                  </div>
                  <img 
                    src="https://res.cloudinary.com/df2mieky2/image/upload/v1754831672/DSC07792_xxy5w1.jpg" 
                    alt="Live slime making demo" 
                    className="w-20 h-15 rounded-lg object-cover"
                  />
                </div>
              </div>

              <div className="text-center border-t-2 border-gray-100 pt-5">
                <div className="text-lg font-semibold text-green-400 mb-4">⏱️ Total: 1 Hour</div>
                <button className="bg-green-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors">
                  Choose Base Package
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 bg-white/90 px-6 py-4 rounded-full shadow-lg mb-5 font-semibold text-gray-700">
                <span>Upgrade for just</span>
                <div className="text-2xl text-purple-600 animate-bounce">➜</div>
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full font-bold">+Rs 100</span>
              </div>

              <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white rounded-3xl p-8 shadow-2xl border-4 border-purple-500 w-full relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
                    Premium Experience
                  </div>
                  <h3 className="text-3xl font-black text-red-600 mb-2">Rs 850/- Complete Pack</h3>
                  <p className="text-gray-600 text-lg font-medium">Ultimate Slime Adventure</p>
                </div>

                <div className="mb-6">
                  <div className="text-center font-semibold text-gray-600 mb-5 p-3 bg-purple-50 rounded-lg">
                    Everything in Base Package +
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 border-2 border-pink-400 relative overflow-hidden">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full flex items-center justify-center text-2xl animate-pulse shadow-lg">
                        ✨
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-bold text-red-600">Glow in Dark Experience</h4>
                          <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">+15 min</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-tight">
                          15 minutes of magical glowing slime in our special dark room. Watch your slime transform into a glowing masterpiece!
                        </p>
                      </div>
                      <img 
                        src="https://res.cloudinary.com/df2mieky2/image/upload/v1754831818/Screenshot_2025-08-10_184600_dugdpm.png" 
                        alt="Glowing slime in dark room" 
                        className="w-20 h-15 rounded-lg object-cover border-2 border-pink-400 shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center border-t-2 border-purple-100 pt-5">
                  <div className="text-lg font-semibold text-purple-600 mb-4">⏱️ Total: 1 Hour 15 Minutes</div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-500 hover:to-purple-500 transition-all">
                    Choose Premium Pack
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Special Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-100 to-purple-100 rounded-2xl p-8 border-l-4 border-green-400 hover:scale-105 transition-transform">
              <h4 className="text-xl font-bold text-red-600 mb-3">For Kids 8+ Years</h4>
              <p className="text-gray-700">
                Bring them for slime making session where they get to make slime instead of our staff. Hands-on learning experience!
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-purple-100 rounded-2xl p-8 border-l-4 border-green-400 hover:scale-105 transition-transform">
              <h4 className="text-xl font-bold text-red-600 mb-3">Parent Supervision</h4>
              <p className="text-gray-700">
                One parent allowed with 1 kid (below 12yrs). We ensure a safe and supervised environment for all activities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-purple-100 rounded-2xl p-8 border-l-4 border-green-400 hover:scale-105 transition-transform">
              <h4 className="text-xl font-bold text-red-600 mb-3">Age Requirement</h4>
              <p className="text-gray-700">
                3+ years only. Perfect for toddlers, preschoolers, and school-age children to explore and learn.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-purple-100 rounded-2xl p-8 border-l-4 border-green-400 hover:scale-105 transition-transform">
              <h4 className="text-xl font-bold text-red-600 mb-3">Booking Required</h4>
              <p className="text-gray-700">
                By booking only, Limited slots. Advance booking essential to secure your spot for this popular experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Slime Experience Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://res.cloudinary.com/df2mieky2/image/upload/v1754831671/HAR05994_de7kjp.jpg',
              'https://res.cloudinary.com/df2mieky2/image/upload/v1754831665/HAR05956_cwxrxr.jpg',
              'https://res.cloudinary.com/df2mieky2/image/upload/v1754831664/IMG_5291.JPEG_fjpdme.jpg',
              'https://res.cloudinary.com/df2mieky2/image/upload/v1754831662/IMG_4561_axaohh.jpg',
              'https://res.cloudinary.com/df2mieky2/image/upload/v1754831660/IMG_3352_nsdiar.jpg',
              'https://res.cloudinary.com/df2mieky2/image/upload/v1754831672/DSC07792_xxy5w1.jpg'
            ].map((src, index) => (
              <div key={index} className="bg-white rounded-2xl p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-purple-500 to-pink-500"></div>
                <img 
                  src={src || "/placeholder.svg"} 
                  alt={`Slime activity ${index + 1}`} 
                  className="w-full h-48 object-cover rounded-2xl hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-white/95 rounded-3xl p-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-center text-red-600 mb-8">Book Your Slime Experience</h2>
            <p className="text-center text-xl text-gray-600 mb-10">
              Secure your spot for the ultimate slime adventure! Limited slots available.
            </p>

            {/* Step 1: Select Date - FIXED */}
            {currentStep === 1 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-5">
                <div className="flex justify-between items-center border-b-2 border-gray-100 pb-4 mb-5">
                  <h3 className="text-2xl font-bold text-red-600">Step 1: Select Your Date</h3>
                </div>
                <div className="flex gap-4 flex-wrap justify-center mb-5">
                  {[
                    { day: 'MON', date: '11', month: 'AUG', value: '2025-08-11' },
                    { day: 'TUE', date: '12', month: 'AUG', value: '2025-08-12' },
                    { day: 'WED', date: '13', month: 'AUG', value: '2025-08-13' },
                    { day: 'THU', date: '14', month: 'AUG', value: '2025-08-14' },
                    { day: 'FRI', date: '15', month: 'AUG', value: '2025-08-15' },
                    { day: 'SAT', date: '16', month: 'AUG', value: '2025-08-16' },
                    { day: 'SUN', date: '17', month: 'AUG', value: '2025-08-17' }
                  ].map((dateItem) => (
                    <div 
                      key={dateItem.value}
                      className={`bg-white border-2 rounded-lg p-4 text-center cursor-pointer transition-all min-w-24 ${
                        bookingData.date === dateItem.value 
                          ? 'border-green-400 bg-green-400 text-black -translate-y-1 shadow-lg' 
                          : 'border-gray-200 hover:border-green-400 hover:bg-green-50 hover:text-black hover:-translate-y-1'
                      }`}
                      onClick={() => selectDate(dateItem.value)}
                    >
                      <div className="text-sm font-semibold">{dateItem.day}</div>
                      <div className="text-xl font-bold my-1">{dateItem.date}</div>
                      <div className="text-xs">{dateItem.month}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button 
                    className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={() => nextStep(2)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Select Location - FIXED */}
            {currentStep === 2 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-5">
                <div className="flex justify-between items-center border-b-2 border-gray-100 pb-4 mb-5">
                  <h3 className="text-2xl font-bold text-red-600">Step 2: Choose Location</h3>
                </div>
                <div className="flex gap-5 flex-wrap justify-center mb-5">
                  {[
                    { id: 'downtown', name: 'Downtown Center', detail: 'Main Street, City Center' },
                    { id: 'mall', name: 'Shopping Mall', detail: 'Level 2, Kids Zone' },
                    { id: 'park', name: 'Adventure Park', detail: 'Activity Center' }
                  ].map((location) => (
                    <div 
                      key={location.id}
                      className={`bg-white border-2 rounded-xl p-6 text-center cursor-pointer transition-all min-w-48 ${
                        bookingData.location === location.id 
                          ? 'border-green-400 bg-green-400 text-black -translate-y-2 shadow-xl' 
                          : 'border-gray-200 hover:border-green-400 hover:bg-green-50 hover:text-black hover:-translate-y-2 hover:shadow-xl'
                      }`}
                      onClick={() => selectLocation(location.id)}
                    >
                      <div className="font-bold text-lg mb-1">{location.name}</div>
                      <div className="text-sm opacity-80">{location.detail}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button 
                    className="border-2 border-gray-500 text-gray-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-500 hover:text-white transition-colors"
                    onClick={() => prevStep(1)}
                  >
                    Back
                  </button>
                  <button 
                    className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={() => nextStep(3)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Select Session - Already correct with text-black */}
            {currentStep === 3 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-5">
                <div className="flex justify-between items-center border-b-2 border-gray-100 pb-4 mb-5">
                  <h3 className="text-2xl font-bold text-red-600">Step 3: Choose Your Session</h3>
                </div>
                <div className="flex gap-5 flex-wrap justify-center mb-5">
                  <div 
                    className={`bg-white border-2 rounded-2xl p-6 text-center cursor-pointer transition-all min-w-48 ${
                      bookingData.session === 'complete' 
                        ? 'border-green-400 bg-green-400 text-black -translate-y-2 shadow-xl' 
                        : 'border-gray-200 hover:border-green-400 hover:bg-green-50 hover:text-black hover:-translate-y-2 hover:shadow-xl'
                    }`}
                    onClick={() => selectSession('complete', '850')}
                  >
                    <div className="text-3xl mb-2">🎨</div>
                    <div className="font-bold text-lg mb-1">Complete Experience</div>
                    <div className="text-sm opacity-80 mb-2">1 Hr 15 min</div>
                    <div className="text-2xl font-bold text-red-500 mb-2">Rs 850/-</div>
                    <small>All activities included</small>
                  </div>
                  <div 
                    className={`bg-white border-2 rounded-2xl p-6 text-center cursor-pointer transition-all min-w-48 ${
                      bookingData.session === 'basic' 
                        ? 'border-green-400 bg-green-400 text-black -translate-y-2 shadow-xl' 
                        : 'border-gray-200 hover:border-green-400 hover:bg-green-50 hover:text-black hover:-translate-y-2 hover:shadow-xl'
                    }`}
                    onClick={() => selectSession('basic', '750')}
                  >
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="font-bold text-lg mb-1">Basic Package</div>
                    <div className="text-sm opacity-80 mb-2">1 Hr 15 min</div>
                    <div className="text-2xl font-bold text-red-500 mb-2">Rs 750/-</div>
                    <small>Play + Demo + Glow</small>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button 
                    className="border-2 border-gray-500 text-gray-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-500 hover:text-white transition-colors"
                    onClick={() => prevStep(2)}
                  >
                    Back
                  </button>
                  <button 
                    className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={() => nextStep(4)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Select Time - Already correct with text-black */}
            {currentStep === 4 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-5">
                <div className="flex justify-between items-center border-b-2 border-gray-100 pb-4 mb-5">
                  <h3 className="text-2xl font-bold text-red-600">Step 4: Select Time Slot</h3>
                </div>
                <div className="flex gap-4 flex-wrap justify-center mb-5">
                  {[
                    { time: '10:00', label: '10:00 AM', status: 'available' },
                    { time: '11:30', label: '11:30 AM', status: 'available' },
                    { time: '1:00', label: '1:00 PM', status: 'filling-fast' },
                    { time: '2:30', label: '2:30 PM', status: 'available' },
                    { time: '4:00', label: '4:00 PM', status: 'filling-fast' },
                    { time: '5:30', label: '5:30 PM', status: 'sold-out' }
                  ].map((slot) => (
                    <div 
                      key={slot.time}
                      className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-all min-w-28 ${
                        slot.status === 'sold-out' 
                          ? 'border-red-300 bg-gray-100 cursor-not-allowed opacity-60 text-gray-500' 
                          : bookingData.time === slot.time 
                            ? 'border-green-400 bg-green-400 text-black -translate-y-1 shadow-lg' 
                            : slot.status === 'filling-fast'
                              ? 'border-yellow-400 bg-yellow-50 text-black hover:border-green-400 hover:bg-green-50 hover:-translate-y-1'
                              : 'border-green-300 bg-white text-black hover:border-green-400 hover:bg-green-50 hover:-translate-y-1'
                      }`}
                      onClick={() => slot.status !== 'sold-out' && selectTime(slot.time)}
                    >
                      <div className="font-bold mb-1">{slot.label}</div>
                      <div className="text-xs opacity-80">
                        {slot.status === 'available' && 'Available'}
                        {slot.status === 'filling-fast' && 'Filling Fast'}
                        {slot.status === 'sold-out' && 'Sold Out'}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button 
                    className="border-2 border-gray-500 text-gray-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-500 hover:text-white transition-colors"
                    onClick={() => prevStep(3)}
                  >
                    Back
                  </button>
                  <button 
                    className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={() => nextStep(5)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Contact Details & Summary */}
            {currentStep === 5 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-5">
                <div className="flex justify-between items-center border-b-2 border-gray-100 pb-4 mb-5">
                  <h3 className="text-2xl font-bold text-red-600">Step 5: Contact Details & Summary</h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Contact Form */}
                  <div>
                    <h4 className="text-xl font-semibold mb-5">Contact Information</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Parent/Guardian Name *</label>
                        <input 
                          type="text" 
                          className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-green-400 focus:outline-none transition-colors" 
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Child's Name *</label>
                        <input 
                          type="text" 
                          className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-green-400 focus:outline-none transition-colors" 
                          placeholder="Enter child's name"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Child's Age *</label>
                        <select className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-green-400 focus:outline-none transition-colors">
                          <option value="">Select age</option>
                          {[3,4,5,6,7,8,9,10,11].map(age => (
                            <option key={age} value={age}>{age} years</option>
                          ))}
                          <option value="12">12+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-green-400 focus:outline-none transition-colors" 
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-green-400 focus:outline-none transition-colors" 
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Slime Preference (for take-home kit)</label>
                        <select className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-green-400 focus:outline-none transition-colors">
                          <option value="">Any color</option>
                          <option value="pink">Pink Glitter</option>
                          <option value="blue">Ocean Blue</option>
                          <option value="green">Lime Green</option>
                          <option value="purple">Galaxy Purple</option>
                          <option value="rainbow">Rainbow Mix</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-2">Special Requirements</label>
                        <textarea 
                          className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-green-400 focus:outline-none transition-colors" 
                          rows="3" 
                          placeholder="Any allergies, special needs, or requests..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Booking Summary */}
                  <div>
                    <h4 className="text-xl font-semibold mb-5">Booking Summary</h4>
                    <div className="bg-gray-50 rounded-xl p-6 mb-5">
                      <div className="space-y-3 text-sm">
                        <div><strong>Date:</strong> <span>{formatDate(bookingData.date)}</span></div>
                        <div><strong>Time:</strong> <span>{bookingData.time || 'Not selected'}</span></div>
                        <div><strong>Location:</strong> <span>{getLocationName(bookingData.location)}</span></div>
                        <div><strong>Session:</strong> <span>{bookingData.session === 'complete' ? 'Complete Experience' : 'Basic Package'}</span></div>
                        <div><strong>Duration:</strong> 1 Hr 15 min</div>
                        <div><strong>Includes:</strong></div>
                        <ul className="ml-5 space-y-1">
                          <li>• Slime Play (45 min)</li>
                          <li>• Live Slime Demo (15 min)</li>
                          <li>• Glow in Dark Experience (15 min)</li>
                          <li>• 200ml Take-home Slime Kit</li>
                        </ul>
                      </div>
                      <div className="text-2xl font-bold text-green-400 mt-4 pt-4 border-t border-gray-200">
                        Total: Rs {bookingData.price}/-
                      </div>
                    </div>
                    <button 
                      className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-black py-4 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-green-400 transition-all"
                      onClick={confirmBooking}
                    >
                      Confirm Booking
                    </button>
                    <p className="text-sm text-center text-gray-600 mt-4">
                      Payment can be made at the venue. Cancellation allowed up to 2 hours before session.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button 
                    className="border-2 border-gray-500 text-gray-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-500 hover:text-white transition-colors"
                    onClick={() => prevStep(4)}
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <p className="mb-2">&copy; 2025 Slime Play Experience. All rights reserved.</p>
          <p>Contact us: +91 XXXXX XXXXX | info@slimeplay.com</p>
        </div>
      </footer>
    </div>
  )
}
