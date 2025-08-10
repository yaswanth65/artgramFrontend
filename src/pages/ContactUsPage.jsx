"use client"

const ContactUsPage = () => {
  function openGmail(email) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      const gmailAppUrl = `googlegmail://co?to=${email}`
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
      const a = document.createElement("a")
      a.href = gmailAppUrl
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(() => {
        window.open(gmailWebUrl, "_blank")
      }, 1500)
    } else {
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
      window.open(gmailWebUrl, "_blank")
    }
  }

  function openWhatsApp(phoneNumber, message) {
    const encodedMessage = encodeURIComponent(message)
    const whatsappWeb = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    const whatsappMobile = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      const a = document.createElement("a")
      a.href = whatsappMobile
      a.target = "_blank"
      a.rel = "noopener noreferrer"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(() => {
        const b = document.createElement("a")
        b.href = whatsappWeb
        b.target = "_blank"
        b.rel = "noopener noreferrer"
        document.body.appendChild(b)
        b.click()
        document.body.removeChild(b)
      }, 2000)
    } else {
      const webLink = document.createElement("a")
      webLink.href = whatsappWeb
      webLink.target = "_blank"
      webLink.rel = "noopener noreferrer"
      document.body.appendChild(webLink)
      webLink.click()
      document.body.removeChild(webLink)
    }
  }

  function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.elements.namedItem("name").value
    alert(`Thank you for contacting us, ${name}! We'll get back to you shortly.`)
    form.reset()
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-700 text-white py-20 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-lg">
            We'd love to hear from you! Whether it's a question, feedback, or collaboration idea—drop us a message.
          </p>
        </div>
      </section>

      {/* Contact/Form */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
            <form id="contactForm" onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold text-slate-900 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/25 focus:border-rose-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold text-slate-900 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/25 focus:border-rose-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Type your message here..."
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/25 focus:border-rose-600"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-rose-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-rose-700 transition-colors"
              >
                Submit Message
              </button>
            </form>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Reach Us</h3>
            <div className="space-y-3 text-slate-900">
              <div>
                <strong>Email:</strong>{" "}
                <button
                  onClick={() => openGmail("artgram.yourhobbylobby@gmail.com")}
                  className="underline hover:text-rose-600"
                >
                  artgram.yourhobbylobby@gmail.com
                </button>
              </div>
              <div>
                <strong>Phone:</strong>{" "}
                <a href="tel:+917358484266" className="hover:underline">
                  +91 7358484266
                </a>
              </div>
              <div>
                <strong>Instagram:</strong>{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/artgram_yourhobbylobby/?hl=en"
                  className="underline hover:text-rose-600"
                >
                  @artgram_yourhobbylobby
                </a>
              </div>
              <div>
                <strong>Business Hours:</strong>
              </div>
              <ul className="list-disc ml-5 opacity-80">
                <li>🕒 Monday - Saturday: 10:00 AM - 8:00 PM</li>
                <li>🕒 Sunday: 10:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-12 bg-slate-100">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold mb-12">Our Branches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BranchCard
              img="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              tag="📍 Near Charminar"
              name="Hyderabad Branch"
              address={
                <>
                  <strong>Address:</strong>
                  <br />
                  123 Art Street, Old City
                  <br />
                  Hyderabad, Telangana 500002
                </>
              }
              phone="+91 7358484266"
              spec="Specialties: Slime Making, Traditional Art"
              onWhatsApp={() => openWhatsApp("917358484266", "Hi, I am interested in ArtGram activities in Hyderabad!")}
            />
            <BranchCard
              img="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              tag="📍 Near Bangalore Palace"
              name="Bangalore Branch"
              address={
                <>
                  <strong>Address:</strong>
                  <br />
                  456 Creative Hub, Palace Road
                  <br />
                  Bangalore, Karnataka 560052
                </>
              }
              phone="+91 7358484266"
              spec="Specialties: Digital Art, Tufting"
              onWhatsApp={() => openWhatsApp("917358484266", "Hi, I am interested in ArtGram activities in Bangalore!")}
            />
            <BranchCard
              img="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              tag="📍 Near Prakasam Barrage"
              name="Vijayawada Branch"
              address={
                <>
                  <strong>Address:</strong>
                  <br />
                  789 River View Complex
                  <br />
                  Vijayawada, Andhra Pradesh 520001
                </>
              }
              phone="+91 7358484266"
              spec="Specialties: Clay Modeling, Neon Art"
              onWhatsApp={() =>
                openWhatsApp("917358484266", "Hi, I am interested in ArtGram activities in Vijayawada!")
              }
            />
          </div>
        </div>
      </section>

      {/* Studios */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold mb-12">Our Studios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StudioCard
              icon="🌈"
              title="Slime Lab"
              text="Dedicated space for slime experiments with safety equipment and colorful materials."
            />
            <StudioCard
              icon="🎨"
              title="Art Studio"
              text="Professional easels, canvases, and premium art supplies for painting and drawing."
            />
            <StudioCard
              icon="🧶"
              title="Tufting Workshop"
              text="Modern tufting guns and frames for creating beautiful rugs and wall hangings."
            />
            <StudioCard
              icon="🏺"
              title="Clay Corner"
              text="Pottery wheels, kilns, and premium clay for sculpting and ceramic projects."
            />
            <StudioCard
              icon="💡"
              title="Neon Studio"
              text="LED strips, acrylic boards, and design tools for creating stunning neon artwork."
            />
            <StudioCard
              icon="💻"
              title="Digital Lab"
              text="Latest tablets, styluses, and software for digital art and animation projects."
            />
            <StudioCard
              icon="📚"
              title="Learning Lounge"
              text="Comfortable seating area with art books, inspiration boards, and planning space."
            />
            <StudioCard
              icon="🎪"
              title="Event Space"
              text="Flexible area for birthday parties, group workshops, and special celebrations."
            />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-slate-100 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h4 className="text-xl font-semibold mb-4">Visit Our Hyderabad Studio</h4>
          <div className="w-full aspect-video rounded-lg shadow overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=hyderabad,india&z=14&output=embed"
              title="Hyderabad Location"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const BranchCard = ({ img, tag, name, address, phone, spec, onWhatsApp }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all">
      <img src={img || "/placeholder.svg"} alt={name} className="w-full h-52 object-cover border-b-4 border-rose-600" />
      <div className="p-6">
        <span className="inline-block bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
          {tag}
        </span>
        <h4 className="text-lg font-bold mb-2">{name}</h4>
        <p className="text-slate-600 mb-2">{address}</p>
        <p className="text-slate-600 mb-2">
          <strong>Phone:</strong> {phone}
        </p>
        <p className="text-slate-600 mb-3">{spec}</p>
        <div className="flex gap-2 flex-wrap">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="flex-1 min-w-[120px] text-center bg-rose-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-rose-700 transition-colors no-underline"
          >
            📞 Call Now
          </a>
          <button
            onClick={onWhatsApp}
            className="flex-1 min-w-[120px] text-center bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            💬 WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}

const StudioCard = ({ icon, title, text }) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-200 rounded-xl p-8 text-center shadow hover:-translate-y-1 hover:shadow-lg transition-all">
      <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-rose-600 text-white flex items-center justify-center text-xl">
        {icon}
      </div>
      <h5 className="text-slate-900 font-semibold mb-2">{title}</h5>
      <p className="text-slate-600 text-sm">{text}</p>
    </div>
  )
}

export default ContactUsPage
