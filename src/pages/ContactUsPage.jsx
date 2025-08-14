"use client";
import React, { useState, useEffect } from 'react';


const ContactUsPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        setIsVisible(true)
      }, [])
  // Helper functions to open email and WhatsApp
  function openGmail(email) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  }

  function openWhatsApp(phoneNumber, message) {
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const url = isMobile 
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem("name")?.value || "there";
    alert(`Thank you for contacting us, ${name}! We'll get back to you shortly.`);
    form.reset();
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-rose-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 overflow-hidden">
      <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm animate-pulse"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="mb-6">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-rose-200 bg-clip-text text-transparent mb-4">Get in Touch</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto rounded-full mb-6" />
            </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">We'd love to hear from you! Whether it's a question, feedback, or collaboration idea—drop us a message.</p>
        </div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-5 gap-12">
          {/* Form on the left */}
          <div className="md:col-span-3">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-gray-100">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form id="contactForm" onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold text-slate-900 mb-2">Full Name *</label>
                <input id="name" name="name" type="text" placeholder="Your name" required className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"/>
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold text-slate-900 mb-2">Email Address *</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"/>
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold text-slate-900 mb-2">Message *</label>
                <textarea id="message" name="message" rows={5} placeholder="Type your message here..." required className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"/>
              </div>
              <button type="submit" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Submit Message
              </button>
            </form>
            </div>
          </div>

          {/* Contact info on the right */}
          <div className="md:col-span-2">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-gray-100 sticky top-32">
            <h3 className="text-2xl font-semibold mb-6">Reach Us Directly</h3>
            <div className="space-y-4 text-slate-900">
              <div className="flex items-start gap-3">
                <strong className="mt-1">📧</strong>
                <div>
                  <strong>Email:</strong><br />
                  <button onClick={() => openGmail("artgram.yourhobbylobby@gmail.com")} className="text-purple-600 hover:underline">
                    artgram.yourhobbylobby@gmail.com
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <strong className="mt-1">📞</strong>
                <div>
                  <strong>Phone:</strong><br />
                  <a href="tel:+919686846100" className="hover:text-purple-600">+91 9686846100</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                 <strong className="mt-1">📸</strong>
                 <div>
                    <strong>Instagram:</strong><br />
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/artgram_yourhobbylobby/?hl=en" className="text-purple-600 hover:underline">
                    @artgram_yourhobbylobby
                    </a>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <strong className="mt-1">🕒</strong>
                 <div>
                    <strong>Business Hours:</strong>
                    <ul className="list-disc list-inside mt-1 text-gray-700">
                        <li>Mon - Sat: 10:00 AM - 8:00 PM</li>
                        <li>Sun: 10:00 AM - 6:00 PM</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Branches Section (Updated with compact cards) */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold mb-12 text-gray-800">Our Branches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BranchCard
              img="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              name="Hyderabad"
              address="123 Art Street, Old City, Hyderabad, Telangana 500002"
              phone="+919686846100"
              onWhatsApp={() => openWhatsApp("919686846100", "Hi, I am interested in ArtGram activities in Hyderabad!")}
            />
            <BranchCard
              img="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              name="Bangalore"
              address="456 Creative Hub, Palace Road, Bangalore, Karnataka 560052"
              phone="+919686846100"
              onWhatsApp={() => openWhatsApp("919686846100", "Hi, I am interested in ArtGram activities in Bangalore!")}
            />
            <BranchCard
              img="https://res.cloudinary.com/dwb3vztcv/image/upload/v1755161824/prakasam-barrage_oiyvps.jpg"
              name="Vijayawada"
              address="789 River View Complex, Vijayawada, Andhra Pradesh 520001"
              phone="+919686846100"
              onWhatsApp={() => openWhatsApp("919686846100", "Hi, I am interested in ArtGram activities in Vijayawada!")}
            />
          </div>
        </div>
      </section>

      {/* "Our Studios" Section has been REMOVED as per request */}

      {/* Map Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h4 className="text-2xl font-semibold mb-6 text-gray-800">Find Our Hyderabad Studio</h4>
          <div className="w-full aspect-video rounded-2xl shadow-lg overflow-hidden border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.339232296122!2d78.47329271539249!3d17.39992398807083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daea360b37%3A0x36f29e4438f72a6b!2sCharminar!5e0!3m2!1sen!2sin!4v1678886 Charminar"
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
  );
};


/**
 * Branch Card Component
 * Updated to be more compact and use icons for buttons
 */
const BranchCard = ({ img, name, address, phone, onWhatsApp }) => {
    return (
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer transform hover:scale-105">
        <div className="relative h-52 overflow-hidden">
        <img src={img || "/placeholder.svg"} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h4 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600">{name}</h4>
          <p className="text-slate-600 text-sm mb-4 flex-grow">{address}</p>
          <div className="flex gap-3 mt-auto">
            <a href={`tel:${phone}`} className="flex-1 flex items-center justify-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200 transition-colors no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Call</span>
            </a>
            <button onClick={onWhatsApp} className="flex-1 flex items-center justify-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.434-9.889 9.891.001 2.23.855 4.34 2.379 5.965l-1.546 5.578 5.762-1.511z"></path></svg>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    );
  };


export default ContactUsPage;