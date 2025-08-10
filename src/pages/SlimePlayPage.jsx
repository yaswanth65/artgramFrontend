"use client"

import { useEffect, useMemo, useState } from "react"

const SlimePlayPage = () => {
  const [step, setStep] = useState("date")
  const [dates, setDates] = useState([])
  const [booking, setBooking] = useState({})

  // generate 7-day rolling window
  useEffect(() => {
    const today = new Date()
    const arr = []
    for (let i = 0; i < 7; i++) {
      const d = new Date(today)
      d.setDate(today.getDate() + i)
      arr.push(d)
    }
    setDates(arr)
  }, [])

  const total = useMemo(
    () => (booking.session && booking.quantity ? booking.session.price * booking.quantity : 0),
    [booking.session, booking.quantity],
  )

  const sessions = [
    { id: "quick", price: 299, label: "Quick Slime" },
    { id: "ultimate", price: 499, label: "Ultimate Slime" },
    { id: "premium", price: 799, label: "Premium Slime" },
  ]

  return (
    <div>
      {/* Hero */}
      <header className="relative h-[100vh] text-white flex items-center justify-center text-center mt-[0]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #32CD32, #9932CC, #FF69B4), url('https://images.unsplash.com/photo-1587673486475-d72388eb1c82?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(50,205,50,0.8)] to-[rgba(153,50,204,0.8)]" />
        <div className="relative z-[1] max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow animate-bounce">
            🌈 INDIA'S FIRST SLIME STUDIO 🌈
          </h1>
          <p className="text-lg mb-6">
            We're proud to host India's first slime studio, where guests can indulge in the fun and therapeutic process
            of slime play.
          </p>
          <a
            href="#slime-booking"
            className="inline-block rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 text-white px-6 py-3 font-bold shadow-[0_10px_30px_rgba(255,165,0,0.3)] animate-pulse no-underline"
          >
            🎯 BOOK YOUR SLIME ADVENTURE NOW!
          </a>
        </div>
      </header>

      {/* Booking Section */}
      <section
        id="slime-booking"
        className="py-16"
        style={{ backgroundImage: "linear-gradient(135deg, #32CD32, #1E90FF)" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="bg-white/95 rounded-3xl p-8 shadow-2xl backdrop-blur">
            <h2 className="text-2xl font-extrabold text-center mb-8" style={{ color: "rgb(21, 161, 6)" }}>
              🎯 BOOK YOUR SLIME EXPERIENCE NOW!
            </h2>

            {/* Step: Date */}
            <BookingStep
              title="📅 Select Date"
              accent="#32CD32"
              isVisible={step === "date"}
              onBack={undefined}
              onNext={() => setStep("location")}
              canNext={Boolean(booking.date)}
            >
              <div className="flex flex-wrap gap-2">
                {dates.map((d, i) => {
                  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
                  const monthNames = [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC",
                  ]
                  const label = i === 0 ? "TODAY" : i === 1 ? "TOM" : dayNames[d.getDay()]
                  const iso = d.toISOString().split("T")[0]
                  const selected = booking.date === iso
                  return (
                    <button
                      key={iso}
                      onClick={() => setBooking((b) => ({ ...b, date: iso }))}
                      className={`min-w-[100px] text-center rounded-lg border-2 px-4 py-3 transition-all ${
                        selected
                          ? "border-[#32CD32] bg-[#32CD32] text-white -translate-y-0.5"
                          : "border-[#e0e0e0] bg-white hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="text-xs font-semibold">{label}</div>
                      <div className="text-xl font-extrabold">{d.getDate()}</div>
                      <div className="text-xs">{monthNames[d.getMonth()]}</div>
                    </button>
                  )
                })}
              </div>
            </BookingStep>

            {/* Step: Location */}
            <BookingStep
              title="📍 Select Location"
              accent="#32CD32"
              isVisible={step === "location"}
              onBack={() => setStep("date")}
              onNext={() => setStep("session")}
              canNext={Boolean(booking.location)}
            >
              <div className="flex flex-wrap gap-3">
                {[
                  { id: "hyderabad", name: "🏛️ Hyderabad", detail: "HITEC City Hub" },
                  { id: "bangalore", name: "🌟 Bangalore", detail: "Brigade Gateway" },
                  { id: "vijayawada", name: "🏞️ Vijayawada", detail: "PVP Square Mall" },
                ].map((l) => {
                  const selected = booking.location === l.id
                  return (
                    <button
                      key={l.id}
                      onClick={() => setBooking((b) => ({ ...b, location: l.id }))}
                      className={`min-w-[200px] text-center rounded-xl border-2 px-6 py-5 transition-all ${
                        selected
                          ? "border-[#32CD32] bg-[#32CD32] text-white -translate-y-0.5 shadow"
                          : "border-[#e0e0e0] bg-white hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="font-bold">{l.name}</div>
                      <div className="text-sm opacity-80">{l.detail}</div>
                    </button>
                  )
                })}
              </div>
            </BookingStep>

            {/* Step: Session */}
            <BookingStep
              title="🎭 Select Session Type"
              accent="#32CD32"
              isVisible={step === "session"}
              onBack={() => setStep("location")}
              onNext={() => setStep("time")}
              canNext={Boolean(booking.session)}
            >
              <div className="flex flex-wrap gap-3">
                {sessions.map((s) => {
                  const selected = booking.session?.id === s.id
                  return (
                    <div
                      key={s.id}
                      onClick={() => setBooking((b) => ({ ...b, session: s }))}
                      className={`min-w-[200px] cursor-pointer rounded-xl border-2 px-6 py-6 text-center transition-all ${
                        selected
                          ? "border-[#32CD32] bg-[#32CD32] text-white -translate-y-1 shadow-xl"
                          : "border-[#e0e0e0] bg-white hover:-translate-y-1"
                      }`}
                    >
                      <div className="text-2xl mb-1">{s.id === "quick" ? "🚀" : s.id === "ultimate" ? "🌟" : "💎"}</div>
                      <div className="font-bold">{s.label}</div>
                      <div className="text-sm opacity-80">
                        {s.id === "quick" ? "30 minutes" : s.id === "ultimate" ? "60 minutes" : "90 minutes"}
                      </div>
                      <div className={`mt-2 font-bold ${selected ? "text-white" : "text-orange-600"}`}>₹{s.price}</div>
                    </div>
                  )
                })}
              </div>
            </BookingStep>

            {/* Step: Time */}
            <BookingStep
              title="⏰ Select Time Slot"
              accent="#32CD32"
              isVisible={step === "time"}
              onBack={() => setStep("session")}
              onNext={() => setStep("details")}
              canNext={Boolean(booking.time)}
            >
              <div className="flex flex-wrap gap-2">
                {[
                  { t: "10:00", label: "10:00 AM", cls: "available" },
                  { t: "12:00", label: "12:00 PM", cls: "available" },
                  { t: "14:00", label: "2:00 PM", cls: "available" },
                  { t: "16:00", label: "4:00 PM", cls: "available" },
                  { t: "18:00", label: "6:00 PM", cls: "filling-fast" },
                ].map((slot) => {
                  const selected = booking.time === slot.t
                  return (
                    <div
                      key={slot.t}
                      onClick={() => setBooking((b) => ({ ...b, time: slot.t }))}
                      className={`min-w-[120px] text-center rounded-lg border-2 px-4 py-3 transition-all cursor-pointer ${
                        selected
                          ? "border-[#32CD32] bg-[#32CD32] text-white -translate-y-0.5"
                          : slot.cls === "filling-fast"
                            ? "border-yellow-500 bg-yellow-50"
                            : "border-[#e0e0e0] bg-white hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="font-bold">{slot.label}</div>
                      <div className="text-xs opacity-80">
                        {slot.cls === "filling-fast" ? "Filling Fast" : "Available"}
                      </div>
                    </div>
                  )
                })}
              </div>
            </BookingStep>

            {/* Step: Details */}
            <BookingStep
              title="👤 Your Details"
              accent="#32CD32"
              isVisible={step === "details"}
              onBack={() => setStep("time")}
              onNext={undefined}
              canNext={false}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Full Name *</label>
                  <input
                    id="customerName"
                    type="text"
                    className="w-full border-2 border-[#e0e0e0] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#32CD32]/30 focus:border-[#32CD32]"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Phone Number *</label>
                  <input
                    id="customerPhone"
                    type="tel"
                    className="w-full border-2 border-[#e0e0e0] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#32CD32]/30 focus:border-[#32CD32]"
                    placeholder="+91 12345 67890"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Email Address *</label>
                  <input
                    id="customerEmail"
                    type="email"
                    className="w-full border-2 border-[#e0e0e0] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#32CD32]/30 focus:border-[#32CD32]"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Number of Participants *</label>
                  <select
                    id="quantity"
                    onChange={(e) =>
                      setBooking((b) => ({
                        ...b,
                        quantity: e.target.value ? Number.parseInt(e.target.value) : undefined,
                      }))
                    }
                    className="w-full border-2 border-[#e0e0e0] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#32CD32]/30 focus:border-[#32CD32]"
                    defaultValue=""
                  >
                    <option value="">Select quantity</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6+ People (Group Booking)</option>
                  </select>
                </div>
              </div>

              {/* Summary */}
              {booking.quantity && booking.session && (
                <div className="mt-6 bg-white rounded-xl border-2 border-[#32CD32] p-4">
                  <h5 className="font-bold mb-2 text-[#32CD32]">📋 Booking Summary</h5>
                  <div className="text-sm space-y-1">
                    <div>
                      <strong>Date:</strong> {booking.date ? new Date(booking.date).toLocaleDateString() : ""}
                    </div>
                    <div>
                      <strong>Location:</strong> {booking.location}
                    </div>
                    <div>
                      <strong>Session:</strong> {booking.session.label}
                    </div>
                    <div>
                      <strong>Time:</strong> {booking.time}
                    </div>
                    <div>
                      <strong>Participants:</strong> {booking.quantity}
                    </div>
                  </div>
                  <div className="mt-3 text-center text-[#32CD32] font-extrabold text-xl">Total Amount: ₹{total}</div>
                  <button
                    className="mt-3 w-full rounded-full bg-gradient-to-tr from-[#32CD32] to-[#1E90FF] text-white font-bold py-3 hover:-translate-y-0.5 transition-all"
                    onClick={() => {
                      const name = document.getElementById("customerName")?.value
                      const phone = document.getElementById("customerPhone")?.value
                      const email = document.getElementById("customerEmail")?.value
                      if (name && phone && email) {
                        alert("Booking confirmed! We will contact you within 2 hours.")
                      } else {
                        alert("Please fill in all required fields.")
                      }
                    }}
                  >
                    🎯 PROCEED TO BOOK
                  </button>
                </div>
              )}
            </BookingStep>
          </div>
        </div>
      </section>
    </div>
  )
}

const BookingStep = ({ title, accent, isVisible, children, onBack, onNext, canNext }) => {
  if (!isVisible) return null
  return (
    <div className="mb-6 bg-white rounded-2xl p-5 shadow">
      <div className="flex items-center justify-between gap-3 border-b pb-3 mb-4">
        <h4 className="text-lg font-bold" style={{ color: accent }}>
          {title}
        </h4>
        <div className="flex gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="px-4 py-1.5 rounded-full border-2 border-gray-400 text-gray-600 font-semibold hover:bg-gray-100"
            >
              ← Back
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              disabled={!canNext}
              className={`px-4 py-1.5 rounded-full font-semibold ${
                canNext ? "text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              style={{ backgroundColor: canNext ? accent : undefined }}
            >
              Next →
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

export default SlimePlayPage
