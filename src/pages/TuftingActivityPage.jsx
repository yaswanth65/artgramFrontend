"use client";

import { useEffect, useMemo, useState } from "react";

// Define gallery images to be used in the carousel and the gallery section
const galleryImages = [
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651196/DSC07703_y0ykmy.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651200/HAR05892_zs7cre.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651194/IMG_0168_kqn6hv.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651192/HAR05922_vmmr5p.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651195/DSC07659_zj2pcc.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651197/HAR05826_iefkzg.jpg",
];

const TuftingActivityPage = () => {
  // State for managing the current step in the booking process
  const [step, setStep] = useState("date");
  // State for storing available dates
  const [dates, setDates] = useState([]);
  // State for storing all booking details
  const [booking, setBooking] = useState({
    date: "",
    location: "",
    session: null,
    time: "",
    quantity: "",
    customerName: "",
    customerPhone: "",
    customerEmail: "",
  });
  // State for the image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to generate the next 7 days for date selection
  useEffect(() => {
    const today = new Date();
    const arr = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      arr.push(d);
    }
    setDates(arr);
  }, []);

  // Effect for the auto-playing image carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);


  // Available tufting session options
  const sessions = [
    { id: "beginner", price: 2000, label: "Small - 8x8 (Inches)" },
    { id: "advanced", price: 3500, label: "Medium - 12x12 (Inches)" },
    { id: "master", price: 4500, label: "Big - 14x14 (Inches)" },
  ];

  // Memoized calculation for the total booking cost
  const total = useMemo(
    () =>
      booking.session && booking.quantity
        ? booking.session.price * Number(booking.quantity)
        : 0,
    [booking.session, booking.quantity]
  );

  // Handler for input changes to keep state updated
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBooking((prev) => ({ ...prev, [id]: value }));
  };

  // Check if all required fields for the final step are filled
  const canProceedToBook =
    booking.customerName && booking.customerPhone && booking.customerEmail && booking.quantity;

  return (
    <div>
      {/* Hero Section with Video Background */}
      <header className="relative text-white text-center py-28 overflow-hidden h-screen flex items-center justify-center">
        <video
          src="https://res.cloudinary.com/df2mieky2/video/upload/v1754651184/IMG_0327_djuhsr.mov"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">
            🎨 India's Premiere Art Studio 🎨
          </h1>
          <a
            href="#tufting-booking"
            className="inline-block rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 text-slate-800 font-bold px-6 py-3 shadow-lg hover:-translate-y-0.5 transition-all no-underline"
          >
            🎯 BOOK YOUR TUFTING ADVENTURE NOW!
          </a>
        </div>
      </header>

      {/* What is Tufting Section with Mini Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-rose-600 mb-2">
              🤔 What is Tufting?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A modern take on the traditional craft of rug making. Using a special tufting gun,
              you'll punch yarn into a stretched fabric canvas to create your own vibrant,
              textured masterpiece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mini Carousel Component */}
            <div className="relative w-full h-auto aspect-[4/3] bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
              <img
                key={currentImageIndex} // Key helps React trigger the animation
                src={galleryImages[currentImageIndex]}
                alt="A student's tufting creation"
                className="w-full h-full object-cover animate-fade-in"
              />
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Tufting Fun & Creativity
                </h3>
                <p className="text-gray-600">
                  Tufting is an exciting and creative process where you can craft beautiful wall hangings,
                  rugs, coasters, or even charms for your bags and jackets using woolen yarn and a tufting gun.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-3">🧵</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Guided by Experts
                </h3>
                <p className="text-gray-600">
                  With a wide range of vibrant color options and step-by-step guidance from our expert
                  instructors, you'll enjoy a unique, hands-on experience tailored for adults exploring new skills.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Take Your Art Home
                </h3>
                <p className="text-gray-600">
                  Whether it's a bold rug, a cozy coaster, or a charming wall piece, you'll leave with a
                  functional work of art that reflects your personality and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-rose-600">25,000+</p>
              <p className="text-gray-600 font-medium">Happy Tufters</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-rose-600">500+</p>
              <p className="text-gray-600 font-medium">Unique Designs</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-rose-600">100%</p>
              <p className="text-gray-600 font-medium">Premium Materials</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-rose-600">3</p>
              <p className="text-gray-600 font-medium">Studio Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-pink-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-rose-600">
            🖼️ Tufting Gallery - Student Creations
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src) => (
              <div key={src} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={src}
                  alt="Tufting creation by a student"
                  className="w-full h-[250px] object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/f9699c/white?text=Art' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="tufting-booking"
        className="py-16"
        style={{ backgroundImage: "linear-gradient(135deg, #f9699c, #3f51b5)" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="backdrop-blur bg-white/95 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-extrabold text-center mb-8 text-purple-600">
              🎯 BOOK YOUR TUFTING EXPERIENCE NOW!
            </h2>

            {/* Step 1: Date Selection */}
            <TuftStep
              title="📅 Select Date"
              color="#9b59b6"
              isVisible={step === "date"}
              onNext={() => setStep("location")}
              canNext={Boolean(booking.date)}
            >
              <div className="flex flex-wrap gap-2">
                {dates.map((d, i) => {
                  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
                  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                  const label = i === 0 ? "TODAY" : i === 1 ? "TOM" : dayNames[d.getDay()];
                  const iso = d.toISOString().split("T")[0];
                  const selected = booking.date === iso;
                  return (
                    <button
                      key={iso}
                      onClick={() => setBooking((b) => ({ ...b, date: iso }))}
                      className={`min-w-[100px] text-center rounded-lg border-2 px-4 py-3 transition-all ${selected
                        ? "border-purple-600 bg-purple-600 text-white -translate-y-0.5"
                        : "border-gray-300 bg-white hover:-translate-y-0.5"
                        }`}
                    >
                      <div className="text-xs font-semibold">{label}</div>
                      <div className="text-xl font-extrabold">{d.getDate()}</div>
                      <div className="text-xs">{monthNames[d.getMonth()]}</div>
                    </button>
                  );
                })}
              </div>
            </TuftStep>

            {/* Step 2: Location Selection */}
            <TuftStep
              title="📍 Select Location"
              color="#9b59b6"
              isVisible={step === "location"}
              onBack={() => setStep("date")}
              onNext={() => setStep("session")}
              canNext={Boolean(booking.location)}
            >
              <div className="flex flex-wrap gap-3">
                {[
                  { id: "hyderabad", name: "🏛️ Hyderabad", detail: "HITEC City Studio" },
                  { id: "bangalore", name: "🌟 Bangalore", detail: "Brigade Gateway" },
                  { id: "vijayawada", name: "🏞️ Vijayawada", detail: "PVP Square Mall" },
                ].map((l) => {
                  const selected = booking.location === l.id;
                  return (
                    <button
                      key={l.id}
                      onClick={() => setBooking((b) => ({ ...b, location: l.id }))}
                      className={`min-w-[200px] text-center rounded-xl border-2 px-6 py-5 transition-all ${selected
                        ? "border-purple-600 bg-purple-600 text-white -translate-y-0.5 shadow"
                        : "border-gray-300 bg-white hover:-translate-y-0.5"
                        }`}
                    >
                      <div className="font-bold">{l.name}</div>
                      <div className="text-sm opacity-80">{l.detail}</div>
                    </button>
                  );
                })}
              </div>
            </TuftStep>

            {/* Step 3: Session Selection */}
            <TuftStep
              title="🧶 Select Tufting Session (Per 2 Persons) ONLY 15+ YEARS"
              color="#9b59b6"
              isVisible={step === "session"}
              onBack={() => setStep("location")}
              onNext={() => setStep("time")}
              canNext={Boolean(booking.session)}
            >
              <div className="flex flex-wrap gap-3">
                {sessions.map((s) => {
                  const selected = booking.session?.id === s.id;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setBooking((b) => ({ ...b, session: s }))}
                      className={`min-w-[200px] cursor-pointer rounded-xl border-2 px-6 py-6 text-center transition-all ${selected
                        ? "border-purple-600 bg-purple-600 text-white -translate-y-1 shadow-xl"
                        : "border-gray-300 bg-white hover:-translate-y-1"
                        }`}
                    >
                      <div className="text-2xl mb-1">
                        {s.id === "beginner" ? "🌟" : s.id === "advanced" ? "🎨" : "👑"}
                      </div>
                      <div className="font-bold">{s.label}</div>
                      <div className="text-sm opacity-80">
                        02 - 04 Hr (Depending on Size)
                      </div>
                      <div className={`mt-2 font-bold ${selected ? "text-white" : "text-red-600"}`}>
                        ₹ {s.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TuftStep>

            {/* Step 4: Time Slot Selection */}
            <TuftStep
              title="⏰ Select Time Slot"
              color="#9b59b6"
              isVisible={step === "time"}
              onBack={() => setStep("session")}
              onNext={() => setStep("details")}
              canNext={Boolean(booking.time)}
            >
              <div className="flex flex-wrap gap-2">
                {[
                  { t: "09:00", label: "9:00 AM", cls: "available" },
                  { t: "11:30", label: "11:30 AM", cls: "available" },
                  { t: "14:00", label: "2:00 PM", cls: "available" },
                  { t: "16:30", label: "4:30 PM", cls: "available" },
                  { t: "19:00", label: "7:00 PM", cls: "filling-fast" },
                ].map((slot) => {
                  const selected = booking.time === slot.t;
                  return (
                    <div
                      key={slot.t}
                      onClick={() => setBooking((b) => ({ ...b, time: slot.t }))}
                      className={`min-w-[120px] text-center rounded-lg border-2 px-4 py-3 transition-all cursor-pointer ${selected
                        ? "border-purple-600 bg-purple-600 text-white -translate-y-0.5"
                        : slot.cls === "filling-fast"
                          ? "border-orange-400"
                          : "border-gray-300 bg-white hover:-translate-y-0.5"
                        }`}
                    >
                      <div className="font-bold">{slot.label}</div>
                      <div className="text-xs opacity-80">
                        {slot.cls === "filling-fast" ? "Filling Fast" : "Available"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TuftStep>

            {/* Step 5: Your Details */}
            <TuftStep
              title="👤 Your Details"
              color="#9b59b6"
              isVisible={step === "details"}
              onBack={() => setStep("time")}
              canNext={false}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Full Name *</label>
                  <input
                    id="customerName"
                    type="text"
                    value={booking.customerName}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Phone Number *</label>
                  <input
                    id="customerPhone"
                    type="tel"
                    value={booking.customerPhone}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"
                    placeholder="+91 12345 67890"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Email Address *</label>
                  <input
                    id="customerEmail"
                    type="email"
                    value={booking.customerEmail}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Number of Participants *</label>
                  <select
                    id="quantity"
                    value={booking.quantity}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"
                    required
                  >
                    <option value="" disabled>Select quantity</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6+ People (Group Booking)</option>
                  </select>
                </div>
              </div>

              {booking.quantity && booking.session && (
                <div
                  className="mt-6 rounded-2xl p-6 text-white"
                  style={{ background: "linear-gradient(135deg, #9b59b6, #e91e63)" }}
                >
                  <h5 className="font-bold mb-2">📋 Tufting Booking Summary</h5>
                  <div className="text-sm space-y-1">
                    <div><strong>Date:</strong> {booking.date ? new Date(booking.date).toLocaleDateString('en-GB') : ""}</div>
                    <div><strong>Location:</strong> <span className="capitalize">{booking.location}</span></div>
                    <div><strong>Session:</strong> {booking.session.label}</div>
                    <div><strong>Time:</strong> {booking.time}</div>
                    <div><strong>Participants:</strong> {booking.quantity}</div>
                  </div>
                  <div className="mt-3 text-center font-extrabold text-xl">
                    Total Amount: ₹{total.toLocaleString()}
                  </div>
                  <button
                    className={`mt-3 w-full rounded-full font-bold py-3 transition-all ${canProceedToBook
                      ? 'bg-yellow-400 text-slate-800 hover:-translate-y-0.5'
                      : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                      }`}
                    onClick={() => {
                      if (canProceedToBook) {
                        alert("🧶 Tufting session booked successfully! We will contact you within 2 hours to confirm your creative adventure.");
                      } else {
                        alert("Please fill in all required fields.");
                      }
                    }}
                    disabled={!canProceedToBook}
                  >
                    🧶 PROCEED TO BOOK TUFTING SESSION
                  </button>
                </div>
              )}
            </TuftStep>
          </div>
        </div>
      </section>
    </div>
  );
};

const TuftStep = ({ title, color, isVisible, onBack, onNext, canNext, children }) => {
  if (!isVisible) return null;
  return (
    <div className="mb-6 bg-white rounded-2xl p-5 shadow">
      <div className="flex items-center justify-between gap-3 border-b pb-3 mb-4">
        <h4 className="text-lg font-bold" style={{ color }}>
          {title}
        </h4>
        <div className="flex gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="px-4 py-1.5 rounded-full bg-gray-600 text-white font-semibold hover:bg-gray-500 transition-colors"
            >
              ← Back
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              disabled={!canNext}
              className={`px-4 py-1.5 rounded-full font-semibold transition-all ${canNext
                ? "text-white hover:-translate-y-px"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              style={{ backgroundColor: canNext ? color : undefined }}
            >
              Next →
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default TuftingActivityPage;