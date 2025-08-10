"use client"

import { useEffect, useRef, useState } from "react"

const BookSessionPage = () => {
  // Booking ticket availability
  const [availability, setAvailability] = useState({
    painting: 12,
    clay: 8,
    sketching: 15,
    resin: 5,
  })
  const [activity, setActivity] = useState("")
  const ticketsLeft = activity && availability[activity] !== undefined ? availability[activity] : undefined
  const bookingSectionRef = useRef(null)
  const [highlight, setHighlight] = useState(false)

  function submitContact(e) {
    e.preventDefault()
    alert("Thank you for contacting us! We'll get back to you within 24 hours.")
    e.currentTarget.reset()
  }

  function submitBooking(e) {
    e.preventDefault()
    if (!activity) {
      alert("Please select an activity to proceed with booking.")
      return
    }
    if (availability[activity] > 0) {
      alert("Thank you for your booking request! We'll confirm your session within 24 hours.")
      setAvailability((prev) => ({ ...prev, [activity]: prev[activity] - 1 }))
      e.currentTarget.reset()
      setActivity("")
    } else {
      alert(
        "Sorry, this activity is currently sold out. Please choose another activity or contact us for alternatives.",
      )
    }
  }

  function scrollToBooking() {
    if (!bookingSectionRef.current) return
    setHighlight(true)
    bookingSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    setTimeout(() => setHighlight(false), 2000)
    setTimeout(() => {
      const input = document.getElementById("bookingName")
      input?.focus()
    }, 800)
  }

  // Used by "Book Now" button in header if added
  useEffect(() => {
    const btn = document.getElementById("bookSessionBtn")
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        scrollToBooking()
      })
    }
    return () => {
      if (btn) btn.removeEventListener("click", (e) => e)
    }
  }, [])

  return (
    <div>
      {/* Hero */}
      <header className="relative h-[70vh] text-white flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="relative z-[1] px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black text-yellow-400 mb-3">Get in Touch</h1>
          <p className="text-lg">
            We'd love to hear from you! Whether it's a question, feedback, or collaboration idea—drop us a message.
          </p>
        </div>
      </header>

      {/* Quick Contact Cards */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
          <ContactCard
            icon="📞"
            title="Call Us"
            text={
              <span>
                <strong>+91 7358484266</strong>
                <br />
                Mon-Sat 10AM-8PM
                <br />
                Sun 11AM-6PM
              </span>
            }
          />
          <div className="bg-white rounded-2xl p-8 text-center shadow hover:-translate-y-1 transition-all">
            <div className="text-5xl mb-4 text-rose-600">💬</div>
            <h5 className="text-rose-600 font-bold mb-2">WhatsApp</h5>
            <p>
              <a
                href="https://wa.me/7358484266?text=Hi, I have a question about ArtGram!"
                target="_blank"
                className="inline-block rounded-full bg-rose-600 text-white px-4 py-2 font-semibold hover:bg-rose-700 transition-colors no-underline"
                rel="noreferrer"
              >
                Chat Now
              </a>
            </p>
          </div>
          <ContactCard
            icon="✉️"
            title="Email Us"
            text={
              <span>
                <strong>artgram.yourhobbylobby@gmail.com</strong>
                <br />
                We reply within 24 hours
              </span>
            }
          />
        </div>
      </section>

      {/* Quick Session Booking */}
      <section
        id="booking"
        ref={bookingSectionRef}
        className={`py-20 ${highlight ? "animate-pulse" : ""} bg-slate-100`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-rose-600 mb-10">Quick Session Booking</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow hover:-translate-y-1 transition-all">
            <h3 className="text-2xl font-bold mb-4">🎨 Book Your Art Session</h3>
            <form id="bookingForm" onSubmit={submitBooking} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bookingName" className="font-semibold mb-1 block">
                    Full Name *
                  </label>
                  <input
                    id="bookingName"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
                <div>
                  <label htmlFor="bookingPhone" className="font-semibold mb-1 block">
                    Phone Number *
                  </label>
                  <input
                    id="bookingPhone"
                    type="tel"
                    required
                    placeholder="+91 12345 67890"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bookingDate" className="font-semibold mb-1 block">
                    Preferred Date *
                  </label>
                  <input
                    id="bookingDate"
                    type="date"
                    required
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
                <div>
                  <label htmlFor="bookingTime" className="font-semibold mb-1 block">
                    Preferred Time *
                  </label>
                  <input
                    id="bookingTime"
                    type="time"
                    required
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bookingActivity" className="font-semibold mb-1 block">
                    Choose Activity *
                  </label>
                  <select
                    id="bookingActivity"
                    required
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  >
                    <option value="">Select an activity</option>
                    <option value="painting">🎨 Art Making - ₹399</option>
                    <option value="clay">🏺 Clay Modeling - ₹449</option>
                    <option value="sketching">✏️ Sketching - ₹299</option>
                    <option value="resin">💎 Resin Art - ₹599</option>
                  </select>
                  <div className="mt-2 font-semibold text-rose-600 text-sm" id="ticketsLeftDisplay">
                    {ticketsLeft !== undefined
                      ? ticketsLeft > 0
                        ? `${ticketsLeft} tickets available`
                        : "No tickets available"
                      : ""}
                  </div>
                </div>
                <div>
                  <label htmlFor="participants" className="font-semibold mb-1 block">
                    Number of Participants
                  </label>
                  <select
                    id="participants"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People (Group Booking)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="bookingNotes" className="font-semibold mb-1 block">
                  Additional Notes
                </label>
                <textarea
                  id="bookingNotes"
                  rows={3}
                  placeholder="Any special requests or questions..."
                  className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="rounded-full bg-rose-600 text-white px-6 py-2 font-semibold hover:bg-rose-700 transition-colors"
                >
                  🎨 Book Now
                </button>
                <p className="mt-3 text-slate-500 text-sm">
                  * We'll confirm your booking within 24 hours via call or WhatsApp
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            <form id="contactForm" onSubmit={submitContact} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="font-semibold mb-1 block">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-semibold mb-1 block">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="artgram.yourhobbylobby@gmail.com"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="font-semibold mb-1 block">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 12345 67890"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="font-semibold mb-1 block">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Question</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-semibold mb-1 block">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-rose-600 text-white px-6 py-2 font-semibold hover:bg-rose-700 transition-colors"
              >
                📧 Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Studios and Map */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-rose-600 mb-10">Visit Our Studios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StudioCard
              title="🏛️ Hyderabad"
              img="https://wallpapercave.com/wp/wp6539521.jpg"
              address={["2nd Floor, HITEC City Hub", "Cyber Towers, Madhapur", "Hyderabad - 500081, Telangana"]}
            />
            <StudioCard
              title="🌟 Bangalore"
              img="https://images.unsplash.com/photo-1512034400317-42096a6901fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              address={["3rd Floor, Brigade Gateway", "Malleshwaram West", "Bangalore - 560055, Karnataka"]}
            />
            <StudioCard
              title="🏞️ Vijayawada"
              img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              address={[
                "1st Floor, PVP Square Mall",
                "Governorpet, Near Benz Circle",
                "Vijayawada - 520002, Andhra Pradesh",
              ]}
            />
          </div>

          <div className="text-center mt-10">
            <div className="inline-block bg-white rounded-xl p-6 shadow">
              <h5 className="text-rose-600 font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.instagram.com/artgram_yourhobbylobby/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border-2 border-rose-600 text-rose-600 font-semibold hover:bg-rose-600 hover:text-white transition-colors no-underline"
                >
                  📷 Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h4 className="text-xl font-semibold mb-4">Find Our Hyderabad Studio</h4>
          <div className="w-full aspect-video rounded-xl shadow overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=HITEC+City+Hyderabad&z=15&output=embed"
              title="ArtGram Hyderabad Location"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              style={{ borderRadius: 12 }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const ContactCard = ({ icon, title, text }) => {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow hover:-translate-y-1 transition-all">
      <div className="text-5xl mb-4 text-rose-600">{icon}</div>
      <h5 className="text-rose-600 font-bold mb-2">{title}</h5>
      <p className="text-slate-600 leading-relaxed m-0">{text}</p>
    </div>
  )
}

const StudioCard = ({ title, img, address }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-2 hover:shadow-2xl transition-all flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={img || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex items-end p-6">
          <h3 className="text-white text-2xl font-extrabold m-0">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="text-slate-600 leading-relaxed mb-4">
          📍 {address[0]}
          <br />
          {address[1]}
          <br />
          {address[2]}
        </div>
        <div className="flex gap-3">
          <a
            href="tel:+917358484266"
            className="flex-1 min-w-[120px] text-center bg-rose-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-rose-700 transition-colors no-underline"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/917358484266?text=Hi,%20I'm%20interested%20in%20ArtGram%20activities!"
            target="_blank"
            className="flex-1 min-w-[120px] text-center bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors no-underline"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default BookSessionPage
