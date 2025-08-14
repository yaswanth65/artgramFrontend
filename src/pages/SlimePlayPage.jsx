"use client";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SlimePlayPage() {
  const location = useLocation();

  useEffect(() => {
    // Check if a hash exists in the URL
    if (location.hash) {
      // Use a timeout to ensure the DOM has fully updated before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(location.hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // Increased delay to ensure DOM is fully rendered

      // Clean up the timer to prevent memory leaks
      return () => clearTimeout(timer);
    }
  }, [location.hash, location.pathname]); // Also trigger on pathname change to handle direct navigation

  // Reordering booking flow. Step 1 is now Location.
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    location: null,
    date: null,
    session: "complete", // Default to premium
    price: 850,
    time: null,
    quantity: 1, // Added quantity state
  });

  // State for available slots data - could be fetched from an API
  // Added total and available slots
  const [timeSlots, setTimeSlots] = useState([
    {
      time: "10:00",
      label: "10:00 AM",
      status: "available",
      type: "Slime Play & Demo",
      age: "3+ years",
      available: 12,
      total: 15,
    },
    {
      time: "11:30",
      label: "11:30 AM",
      status: "available",
      type: "Slime Play & Making",
      age: "8+ years",
      available: 8,
      total: 15,
    },
    {
      time: "1:00",
      label: "1:00 PM",
      status: "filling-fast",
      type: "Slime Play & Demo",
      age: "3+ years",
      available: 4,
      total: 15,
    },
    {
      time: "2:30",
      label: "2:30 PM",
      status: "available",
      type: "Slime Play & Demo",
      age: "3+ years",
      available: 15,
      total: 15,
    },
    {
      time: "4:00",
      label: "4:00 PM",
      status: "filling-fast",
      type: "Slime Play & Making",
      age: "8+ years",
      available: 3,
      total: 15,
    },
    {
      time: "5:30",
      label: "5:30 PM",
      status: "sold-out",
      type: "Slime Play & Demo",
      age: "3+ years",
      available: 0,
      total: 15,
    },
  ]);

  const nextStep = (step) => {
    setCurrentStep(step);
  };
  const prevStep = (step) => {
    setCurrentStep(step);
  };

  const selectLocation = (location) => {
    setBookingData((prev) => ({ ...prev, location }));
  };
  const selectDate = (date) => {
    setBookingData((prev) => ({ ...prev, date }));
  };
  const selectSession = (session, price) => {
    setBookingData((prev) => ({ ...prev, session, price: parseInt(price) }));
  };
  const selectTime = (time) => {
    setBookingData((prev) => ({ ...prev, time }));
  };
  const setQuantity = (qty) => {
    setBookingData((prev) => ({ ...prev, quantity: parseInt(qty) }));
  };

  const confirmBooking = () => {
    alert(
      `Booking confirmed for ${bookingData.quantity} ticket(s)! You will receive a confirmation call within 2 hours.`
    );
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "Not selected";
    return new Date(dateStr).toDateString();
  };

  const getLocationName = (location) => {
    const locationNames = {
      downtown: "Vijayawada",
      mall: "Hyderabad",
      park: "Bangalore",
    };
    return locationNames[location] || "Not selected";
  };

  const getTotalPrice = () => bookingData.price * bookingData.quantity;
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-purple-100">
      {/* Hero Section - Video Updated */}
      <section className="relative h-[70vh] bg-black flex items-center justify-center text-center text-white overflow-hidden">
        {/* Video background updated */}
        <video
          src="https://res.cloudinary.com/df2mieky2/video/upload/v1755029444/HYDERABAD_Slime_xa1l3x.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-50"
        ></video>
        <div className="relative z-20 max-w-4xl px-5">
          <h1 className="text-6xl font-black mb-5 text-white drop-shadow-lg animate-bounce">
            EXPERIENCE SLIME!!
          </h1>
          <p className="text-2xl mb-8 drop-shadow-md">
            1 Hr & 1 Hr 15 min sessions
          </p>
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
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-2xl border-4 border-green-400">
              <h3 className="text-3xl font-black text-center text-red-600 mb-4">
                Rs 750/- Base Package
              </h3>
              <div className="space-y-4 mb-6">
                {/* Slime Play */}
                <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
                  <img
                    src="https://res.cloudinary.com/df2mieky2/image/upload/v1754831671/HAR05994_de7kjp.jpg"
                    alt="Slime Play"
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-red-600">
                      Slime Making{" "}
                      <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        45 min
                      </span>
                    </h4>
                    <p className="text-sm text-gray-600 leading-tight mt-1">
                      Touch different colours and textures, slime throwing,
                      jumping, magnetic slime and much more!
                    </p>
                  </div>
                </div>

                {/* Slime Demo */}
                <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
                  <img
                    src="https://res.cloudinary.com/df2mieky2/image/upload/v1754831672/DSC07792_xxy5w1.jpg"
                    alt="Slime Demo"
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-red-600">
                      Slime Demo{" "}
                      <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        15 min
                      </span>
                    </h4>
                    <p className="text-sm text-gray-600 leading-tight mt-1">
                      Hands - on experience for 8+ years, In some sessions, 
                      8+ kits/ adults can make their own slime. 
                      Not available in all the and please pay attention while booking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center border-t-2 border-gray-100 pt-5">
                <div className="text-lg font-semibold text-green-400 mb-4">
                  ⏱️ Total: 1 Hour
                </div>
                <a
                  href="#booking"
                  onClick={() => selectSession("basic", "750")}
                  className="bg-green-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors"
                >
                  Choose Base Package
                </a>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white rounded-3xl p-8 shadow-2xl border-4 border-purple-500">
              <h3 className="text-3xl font-black text-center text-red-600 mb-2">
                Rs 850/- Premium Experience
              </h3>
              <p className="text-gray-600 text-lg font-medium text-center mb-4">
                Ultimate Slime Adventure
              </p>
              <div className="mb-6">
                <div className="text-center font-semibold text-gray-600 mb-4 p-3 bg-purple-100 rounded-lg">
                  Everything in Base Package +
                </div>
                <div className="bg-white rounded-2xl p-6 border-2 border-pink-400 flex items-start gap-4">
                  <img
                    src="https://res.cloudinary.com/df2mieky2/image/upload/v1754831818/Screenshot_2025-08-10_184600_dugdpm.png"
                    alt="Glow in Dark"
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-red-600">
                      ✨ Glow in Dark Experience{" "}
                      <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        +15 min
                      </span>
                    </h4>
                    <p className="text-sm text-gray-600 leading-tight mt-1">
                      15 minutes of magical glowing slime in our special dark
                      room. Watch your slime transform!
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center border-t-2 border-purple-100 pt-5">
                <div className="text-lg font-semibold text-purple-600 mb-4">
                  ⏱️ Total: 1 Hour 15 Minutes
                </div>
                <a
                  href="#booking"
                  onClick={() => selectSession("complete", "850")}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-500 hover:to-purple-500 transition-all"
                >
                  Choose Premium Pack
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section -*/}
      <section className="py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-5">
          {/* Title Changed */}
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
            Additional Information
          </h2>
          {/* Order changed and content updated */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-400">
              <h4 className="text-xl font-bold text-red-600 mb-3">
                Booking Required
              </h4>
              <p className="text-gray-700">
                By booking only, Limited slots. Advance booking essential to
                secure your spot for this popular experience.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-400">
              <h4 className="text-xl font-bold text-red-600 mb-3">
                Parent Supervision
              </h4>
              <p className="text-gray-700">
                One parent allowed with 1 kid (below 12yrs). We ensure a safe
                and supervised environment for all activities.
              </p>
            </div>
            {/* Age Requirement section updated and "For Kids 8+" removed */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-400">
              <h4 className="text-xl font-bold text-red-600 mb-3">
                Age Requirement
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  For <strong>Slime Play & Demo</strong> sessions: anyone above{" "}
                  <strong>3+ years</strong> is welcome.
                </li>
                <li>
                  For <strong>Slime Play & Making</strong> sessions: anyone
                  above <strong>8+ years</strong> is welcome.
                </li>
              </ul>
            </div>
            {/* Group Session point added */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-400">
              <h4 className="text-xl font-bold text-red-600 mb-3">
                Group & Private Sessions
              </h4>
              <p className="text-gray-700">
                All our Slime sessions are group sessions. Private sessions are
                available for an additional cost. Please contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
            Slime Experience Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831671/HAR05994_de7kjp.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831665/HAR05956_cwxrxr.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831664/IMG_5291.JPEG_fjpdme.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831662/IMG_4561_axaohh.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831660/IMG_3352_nsdiar.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831672/DSC07792_xxy5w1.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-xl relative overflow-hidden"
              >
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
     <section id="booking" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-4xl font-bold text-center text-red-600 mb-8">Book Your Slime Experience</h2>
            
            {/* Step 1: Select Location */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 1: Choose Location</h3>
                <div className="flex gap-5 flex-wrap justify-center mb-5">
                  {['downtown', 'mall', 'park'].map(id => (
                    <div key={id} onClick={() => selectLocation(id)} className={`border-2 rounded-xl p-6 text-center cursor-pointer transition-all min-w-48 ${bookingData.location === id ? 'border-green-400 bg-green-100 -translate-y-1 shadow-lg' : 'border-gray-200 hover:border-green-400 hover:bg-green-50'}`}>
                      <div className="font-bold text-lg mb-1">{getLocationName(id)}</div>
                      {id === 'mall' && <div className="text-xs text-red-500">Closed on Mondays</div>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <button disabled={!bookingData.location} onClick={() => nextStep(2)} className="bg-green-400 text-black px-8 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors disabled:bg-gray-300">Next</button>
                </div>
              </div>
            )}

            {/* Step 2: Select Date */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 2: Select Your Date</h3>
                <div className="flex gap-4 flex-wrap justify-center mb-5">
                  {[...Array(7)].map((_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    const value = date.toISOString().split('T')[0];
                    const isMonday = date.getDay() === 1; // 1 is Monday
                    const isHyderabad = bookingData.location === 'mall';
                    const isDisabled = isMonday && isHyderabad;
                    
                    return (
                      <div 
                        key={value} 
                        onClick={() => !isDisabled && selectDate(value)} 
                        className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all min-w-24 ${
                          isDisabled ? 'bg-gray-100 cursor-not-allowed opacity-50' :
                          bookingData.date === value ? 'border-green-400 bg-green-100 -translate-y-1 shadow-lg' : 
                          'border-gray-200 hover:border-green-400 hover:bg-green-50'
                        }`}
                      >
                        <div className="text-sm font-semibold">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                        <div className="text-xl font-bold my-1">{date.getDate()}</div>
                        <div className="text-xs">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                        {isDisabled && <div className="text-xs text-red-500 mt-1">No Sessions</div>}
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between mt-6">
                  <button onClick={() => prevStep(1)} className="border-2 border-gray-500 text-gray-500 px-8 py-2 rounded-full font-semibold">Back</button>
                  <button disabled={!bookingData.date} onClick={() => nextStep(3)} className="bg-green-400 text-black px-8 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white disabled:bg-gray-300">Next</button>
                </div>
              </div>
            )}
            
            {/* Step 3: Select Quantity */}
            {currentStep === 3 && (
                <div>
                    <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 3: How many tickets?</h3>
                    <div className="flex justify-center items-center gap-4 mb-5">
                        <button onClick={() => setQuantity(Math.max(1, bookingData.quantity - 1))} className="w-12 h-12 rounded-full bg-gray-200 text-2xl font-bold">-</button>
                        <span className="text-4xl font-bold w-20 text-center">{bookingData.quantity}</span>
                        <button onClick={() => setQuantity(bookingData.quantity + 1)} className="w-12 h-12 rounded-full bg-gray-200 text-2xl font-bold">+</button>
                    </div>
                     <div className="flex justify-between mt-6">
                        <button onClick={() => prevStep(2)} className="border-2 border-gray-500 text-gray-500 px-8 py-2 rounded-full font-semibold">Back</button>
                        <button onClick={() => nextStep(4)} className="bg-green-400 text-black px-8 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white">Next</button>
                    </div>
                </div>
            )}


            {/* Step 4: Select Session & Time */}
            {currentStep === 4 && (
              <div>
                {/* Session Selection Updated */}
                 <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 4: Choose Session</h3>
                 <div className="flex gap-5 flex-wrap justify-center mb-10">
                    <div onClick={() => selectSession('complete', '850')} className={`border-2 rounded-2xl p-6 text-center cursor-pointer min-w-48 ${bookingData.session === 'complete' ? 'border-purple-400 bg-purple-100' : 'hover:border-purple-400'}`}>
                        <div className="font-bold text-lg mb-1">Premium Experience</div>
                        <div className="text-sm opacity-80 mb-2">Play + Demo + Glow (1 Hr 15 min)</div>
                        <div className="text-2xl font-bold text-red-500">Rs 850/-</div>
                    </div>
                    <div onClick={() => selectSession('basic', '750')} className={`border-2 rounded-2xl p-6 text-center cursor-pointer min-w-48 ${bookingData.session === 'basic' ? 'border-green-400 bg-green-100' : 'hover:border-green-400'}`}>
                        <div className="font-bold text-lg mb-1">Base Package</div>
                        <div className="text-sm opacity-80 mb-2">Play + Demo (1 Hour)</div>
                        <div className="text-2xl font-bold text-red-500">Rs 750/-</div>
                    </div>
                 </div>

                <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 5: Select Time Slot</h3>
                {/* Time Slot selection updated */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                  {timeSlots.map((slot) => (
                    <div key={slot.time} onClick={() => slot.status !== 'sold-out' && selectTime(slot.time)} 
                    className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-all ${ slot.status === 'sold-out' ? 'bg-gray-100 cursor-not-allowed opacity-60' : bookingData.time === slot.time ? 'border-green-400 bg-green-100 -translate-y-1 shadow-lg' : 'hover:border-green-400'}`}>
                      <div className="font-bold mb-1 text-lg">{slot.label}</div>
                      <div className="text-xs font-semibold text-blue-600">{slot.type}</div>
                       <div className="text-xs font-semibold text-purple-600 mb-2">({slot.age})</div>
                      <div className={`text-xs font-bold ${slot.status === 'sold-out' ? 'text-red-500' : slot.status === 'filling-fast' ? 'text-orange-500' : 'text-green-600'}`}>
                        {slot.status === 'sold-out' ? 'Sold Out' : `${slot.available}/${slot.total} available`}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-8">
                  <button onClick={() => prevStep(3)} className="border-2 border-gray-500 text-gray-500 px-8 py-2 rounded-full font-semibold">Back</button>
                  <button disabled={!bookingData.time} onClick={() => nextStep(5)} className="bg-green-400 text-black px-8 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white disabled:bg-gray-300">Next</button>
                </div>
              </div>
            )}

            {/* Step 6: Contact Details & Summary */}
            {currentStep === 5 && (
              <div>
                <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 6: Contact & Summary</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Contact Form fields updated */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                    <div className="space-y-4">
                       <div>
                        <label className="block font-semibold text-gray-700 mb-1">Parent/Guardian Name *</label>
                        <input type="text" className="w-full border-2 border-gray-200 rounded-lg p-3" placeholder="Enter your name" />
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-1">Phone Number *</label>
                        <input type="tel" className="w-full border-2 border-gray-200 rounded-lg p-3" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full border-2 border-gray-200 rounded-lg p-3" placeholder="your.email@example.com" />
                      </div>
                    </div>
                  </div>

                  {/* Booking Summary */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Booking Summary</h4>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> <span>{getLocationName(bookingData.location)}</span></div>
                        <div><strong>Date:</strong> <span>{formatDate(bookingData.date)}</span></div>
                        <div><strong>Time:</strong> <span>{bookingData.time || 'Not selected'}</span></div>
                        <div><strong>Tickets:</strong> <span>{bookingData.quantity}</span></div>
                        {/* "Glow in Dark" logic corrected in summary */}
                        <div><strong>Session:</strong> <span>{bookingData.session === 'complete' ? 'Premium Experience' : 'Base Package'}</span></div>
                        <ul className="list-disc list-inside ml-4 pt-1">
                          <li>Slime Play (45 min)</li>
                          <li>Slime Demo/Making (15 min)</li>
                          {bookingData.session === 'complete' && <li>Glow in Dark Experience (15 min)</li>}
                        </ul>
                      </div>
                      <div className="text-3xl font-bold text-green-500 mt-4 pt-4 border-t border-gray-200">
                        Total: Rs {getTotalPrice()}/-
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <button onClick={() => prevStep(4)} className="border-2 border-gray-500 text-gray-500 px-8 py-2 rounded-full font-semibold">Back</button>
                  <button onClick={confirmBooking} className="w-full max-w-xs bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-xl font-bold text-lg">
                      Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
