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
                <svg className="w-6 h-6 mt-1 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <strong>Email:</strong><br />
                  <button onClick={() => openGmail("artgram.yourhobbylobby@gmail.com")} className="text-purple-600 hover:underline">
                    artgram.yourhobbylobby@gmail.com
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <div>
                  <strong>Phone:</strong><br />
                  <a href="tel:+919686846100" className="hover:text-purple-600">+91 9686846100</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <div>
                  <strong>Instagram:</strong><br />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/artgram_yourhobbylobby/?hl=en" className="text-purple-600 hover:underline">
                    @artgram_yourhobbylobby
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
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

      {/* Branches Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold mb-12 text-gray-800">Our Branches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BranchCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754637272/wp6539521_vvafqv.jpg"
              name="Hyderabad"
              address="#NO.8-2-686/K/1 AND 8-2686/K/2, 5TH FLOOR, KIMTEE SQUARE, ROAD NO-12, BANJARA HILLS, CIRCLE 37, HYDERABAD 500034"
              phone="+917766012299"
              onWhatsApp={() => openWhatsApp("917766012299", "Hi, I am interested in ArtGram activities in Hyderabad!")}
            />
            <BranchCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754637352/jayanth-muppaneni-y96JVdGu7XU-unsplash_1_kooajm.jpg"
              name="Bangalore"
              address="#418, 4TH FLOOR, JB ARCADE, 27TH MAIN ROAD, HSR LAYOUT, SECTOR 1, BENGALURU 560102"
              phone="+919216345672"
              onWhatsApp={() => openWhatsApp("919216345672", "Hi, I am interested in ArtGram activities in Bangalore!")}
            />
            <BranchCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754637135/durgamma_temple_vj_6472215382_l3h6wj.jpg"
              name="Vijayawada"
              address="#40-6-11, 2ND FLOOR, MEENAKSHI TOWERS HOTEL, MURALI FORTUNE ROAD, MOGALRAJPURAM, OPP. SUBWAY 520010"
              phone="+919686846100"
              onWhatsApp={() => openWhatsApp("919686846100", "Hi, I am interested in ArtGram activities in Vijayawada!")}
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Studio Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our vibrant studios across South India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hyderabad Location */}
            <a 
              href="https://www.google.com/maps/place/Artgram/@17.4114992,78.4323407,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb970038d64857:0x406d7a28320f2e9b!8m2!3d17.4114992!4d78.4349156!16s%2Fg%2F11ryf2z9v5?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="h-64 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0060108339585!2d78.43234067524435!3d17.411499183479815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb970038d64857%3A0x406d7a28320f2e9b!2sArtgram!5e0!3m2!1sen!2sin!4v1755189886825!5m2!1sen!2sin"
                  title="Artgram Hyderabad Location"
                  className="w-full h-full absolute inset-0 pointer-events-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-xl">Hyderabad</h3>
                </div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    📍
                  </div>
                  <p className="text-gray-700 font-medium">Banjara Hills, Road No. 12</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    🕒
                  </div>
                  <p className="text-gray-700">Mon-Sun: 9AM - 9PM</p>
                </div>
                <div className="mt-4 text-purple-600 font-medium flex items-center gap-2">
                  <span>View on Maps</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Vijayawada Location */}
            <a 
              href="https://www.google.com/maps/place/ARTGRAM/@16.5041061,80.6443325,17z/data=!3m1!4b1!4m6!3m5!1s0x3a35fbf061f36a01:0x57d79131087c8de4!8m2!3d16.5041061!4d80.6469074!16s%2Fg%2F11v0v3c8w4?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="h-64 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4353260109456!2d80.64433247522446!3d16.504106084240263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fbf061f36a01%3A0x57d79131087c8de4!2sARTGRAM!5e0!3m2!1sen!2sin!4v1755189043469!5m2!1sen!2sin"
                  title="Artgram Vijayawada Location"
                  className="w-full h-full absolute inset-0 pointer-events-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-xl">Vijayawada</h3>
                </div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    📍
                  </div>
                  <p className="text-gray-700 font-medium">MG Road, Near Prakasam Barrage</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    🕒
                  </div>
                  <p className="text-gray-700">Mon-Sun: 10AM - 8PM</p>
                </div>
                <div className="mt-4 text-purple-600 font-medium flex items-center gap-2">
                  <span>View on Maps</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Bengaluru Location */}
            <a 
              href="https://www.google.com/maps/place/Artgram/@12.9187316,77.6491285,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15ae8353d0dd:0x395df1674441651f!8m2!3d12.9187316!4d77.6517034!16s%2Fg%2F11s7j9wq5_?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="h-64 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8286590945104!2d77.64912847515608!3d12.918731587391807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ae8353d0dd%3A0x395df1674441651f!2sArtgram!5e0!3m2!1sen!2sin!4v1755189902986!5m2!1sen!2sin"
                  title="Artgram Bengaluru Location"
                  className="w-full h-full absolute inset-0 pointer-events-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-xl">Bengaluru</h3>
                </div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    📍
                  </div>
                  <p className="text-gray-700 font-medium">HSR Layout, Sector 2</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    🕒
                  </div>
                  <p className="text-gray-700">Mon-Sun: 9:30AM - 9:30PM</p>
                </div>
                <div className="mt-4 text-purple-600 font-medium flex items-center gap-2">
                  <span>View on Maps</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Branch Card Component with official logos
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
            {/* Official Phone Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            <span>Call</span>
          </a>
          <button onClick={onWhatsApp} className="flex-1 flex items-center justify-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 transition-colors">
            {/* Official WhatsApp Logo */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
