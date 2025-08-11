"use client";

import { useEffect, useMemo, useState } from "react";

const TuftingActivityPage = () => {
  const [step, setStep] = useState("date");
  const [dates, setDates] = useState([]);
  const [booking, setBooking] = useState({});

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

  const sessions = [
    { id: "beginner", price: 2000, label: "Small - 8x8 (Inches)" },
    { id: "advanced", price: 3500, label: "Medium - 12x12 (Inches)" },
    { id: "master", price: 4500, label: "Big - 14x14 (Inches)" },
  ];

  const total = useMemo(
    () =>
      booking.session && booking.quantity
        ? booking.session.price * booking.quantity
        : 0,
    [booking.session, booking.quantity]
  );

  return (
    <div>
      {/* Hero */}
      <header className="relative text-black text-center py-28 bg-gradient-to-tr from-purple-600 to-pink-600 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-6 drop-shadow">
            🧶 INDIA'S PREMIER TUFTING STUDIO 🧶
          </h1>
          <a
            href="#tufting-booking"
            className="inline-block rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 text-slate-800 font-bold px-6 py-3 shadow hover:-translate-y-0.5 transition-all no-underline"
          >
            🎯 BOOK YOUR TUFTING ADVENTURE NOW!
          </a>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-10">
            🤔 What is Tufting?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <video
                src="https://res.cloudinary.com/df2mieky2/video/upload/v1754651184/IMG_0327_djuhsr.mov"
                controls
                autoPlay
                loop
                muted
                className="rounded-xl w-full h-full object-contain"
                style={{ maxHeight: "500px", background: "#fff" }}
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="p-4 bg-white rounded-xl shadow-md">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="text-xl font-bold mb-2">Creative Expression</h3>
                <p>
                  Design your own patterns, choose from premium yarns, and bring
                  your artistic vision to life through the ancient art of
                  tufting.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md">
                <div className="text-3xl mb-2">🧘‍♀️</div>
                <h3 className="text-xl font-bold mb-2">Mindful Crafting</h3>
                <p>
                  Experience the meditative rhythm of tufting. Perfect for
                  stress relief, focus building, and mindful creativity.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md">
                <div className="text-3xl mb-2">🏠</div>
                <h3 className="text-xl font-bold mb-2">
                  Take Home Masterpieces
                </h3>
                <p>
                  Create functional art! Every session produces beautiful rugs,
                  coasters, wall hangings, or decorative pieces you'll treasure
                  forever.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
            <div className="p-4 bg-white rounded-xl shadow-md">
              <p className="text-3xl font-bold">25,000+</p>
              <p>Happy Tufters</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md">
              <p className="text-3xl font-bold">500+</p>
              <p>Unique Designs</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md">
              <p className="text-3xl font-bold">100%</p>
              <p>Premium Materials</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md">
              <p className="text-3xl font-bold">3</p>
              <p>Studio Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-pink-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            🖼️ Tufting Gallery - Student Creations
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://res.cloudinary.com/df2mieky2/image/upload/f_auto,q_40,w_400/v1754651196/DSC07703_y0ykmy.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/f_auto,q_40,w_400/v1754651200/HAR05892_zs7cre.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/f_auto,q_40,w_400/v1754651194/IMG_0168_kqn6hv.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/f_auto,q_40,w_400/v1754651192/HAR05922_vmmr5p.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/f_auto,q_40,w_400/v1754651195/DSC07659_zj2pcc.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/f_auto,q_40,w_400/v1754651197/HAR05826_iefkzg.jpg",
            ].map((src) => (
              <div key={src} className="rounded-xl overflow-hidden shadow">
                <img
                  src={src || "/placeholder.svg"}
                  alt="Tufting creation"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
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

            {/* STEP 1: SELECT DATE */}
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
                      className={`min-w-[100px] text-center rounded-lg border-2 px-4 py-3 transition-all duration-200 ${
                        selected
                          ? "border-purple-600 bg-purple-100 shadow-lg text-purple-800 transform scale-105" 
                          : "border-gray-300 bg-white hover:border-purple-400 hover:bg-purple-50 hover:shadow-md"
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

            {/* STEP 2: SELECT LOCATION */}
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
                      className={`min-w-[200px] text-center rounded-xl border-2 px-6 py-5 transition-all duration-200 ${
                        selected
                          ? "border-purple-600 bg-purple-100 shadow-lg text-purple-800 transform scale-105" 
                          : "border-gray-300 bg-white hover:border-purple-400 hover:bg-purple-50 hover:shadow-md hover:-translate-y-1"
                      }`}
                    >
                      <div className="font-bold">{l.name}</div>
                      <div className="text-sm opacity-80">{l.detail}</div>
                    </button>
                  );
                })}
              </div>
            </TuftStep>

            {/* STEP 3: SELECT SESSION */}
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
                      className={`min-w-[200px] cursor-pointer rounded-xl border-2 px-6 py-6 text-center transition-all duration-200 ${
                        selected
                          ? "border-purple-600 bg-purple-600 text-black shadow-xl transform scale-105"
                          : "border-gray-300 bg-white hover:border-purple-400 hover:bg-purple-50 hover:shadow-lg hover:-translate-y-1"
                      }`}
                    >
                      <div className="text-2xl mb-1">
                        {s.id === "beginner" ? "🌟" : s.id === "advanced" ? "🎨" : "👑"}
                      </div>
                      <div className="font-bold">{s.label}</div>
                      <div className="text-sm opacity-80">
                        02 - 04 Hr (Depending on Size)
                      </div>
                      <div className={`mt-2 font-bold ${selected ? "text-black" : "text-red-600"}`}>
                        ₹ {s.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TuftStep>

            {/* Add your remaining steps (time, quantity, etc.) here following the same pattern */}
          </div>
        </div>
      </section>
    </div>
  );
};

const TuftStep = ({
  title,
  color,
  isVisible,
  onBack,
  onNext,
  canNext,
  children,
}) => {
  if (!isVisible) return null;
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between gap-3 border-b pb-3 mb-4">
        <h4 className="text-lg font-bold" style={{ color }}>
          {title}
        </h4>
        <div className="flex gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="px-4 py-1.5 rounded-full bg-gray-600 text-black font-semibold hover:bg-gray-500 transition-colors duration-200"
            >
              ← Back
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              disabled={!canNext}
              className={`px-4 py-1.5 rounded-full font-semibold transition-all duration-200 ${
                canNext
                  ? "text-black hover:opacity-90"
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
