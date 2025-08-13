"use client";

import { useState, useEffect } from "react";

export default function ArtMakingActivityPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const artFormsKids = [
    "Mosaic art",
    "Piggy banks",
    "Welcome boards",
    "Glass painting",
    "Rangoli stencils",
    "Letter arts",
    "Spin art",
    "Key holders",
    "Name boards",
    "Acrylic pour"
  ];

  const artFormsAdults = [
    "Block printing",
    "Clutch painting",
    "Glass painting",
    "Mandalas",
    "Couple boards",
    "Pichwai arts",
    "Madhubani",
    "Tissue art",
    "Home decor crafts",
    "Gods painting"
  ];

  const features = [
    {
      icon: "🎨",
      title: "30+ Art Varieties",
      description:
        "Discover endless creative possibilities with our diverse collection of art forms.",
      color: "from-rose-400 to-pink-400",
    },
    {
      icon: "👥",
      title: "Collaborative Creation",
      description:
        "Share the magical journey of creation with loved ones on a single masterpiece.",
      color: "from-violet-400 to-purple-400",
    },
    {
      icon: "🏠",
      title: "Cherish Forever",
      description:
        "Take home your unique creation as a beautiful memory of your artistic journey.",
      color: "from-blue-400 to-indigo-400",
    },
    {
      icon: "⏰",
      title: "Timeless Experience",
      description:
        "Create at your own pace without any time constraints or pressure.",
      color: "from-emerald-400 to-teal-400",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-rose-50 pt-[10px] pb-[10px]">
      {/* Artistic Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 overflow-hidden pb-6">
        {/* Background Video */}
        <video
          src="https://res.cloudinary.com/df2mieky2/video/upload/v1754831677/vecteezy_mixing-paint-in-palette_21422891_xS2W3sA_G_vcrrvy.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm animate-pulse"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div
          className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="text-5xl md:text-7xl font-extrabold pt-2 pb-5
                bg-gradient-to-r from-purple-300 via-pink-200 to-rose-300 
                bg-clip-text text-transparent"
          >
            Art Making Studio
          </h1>
          <div className="w-36 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto rounded-full mb-6" />

          <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            Where imagination meets creation. Design your own masterpieces with
            premium materials and bring your artistic vision to life in our
            serene creative sanctuary.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            
            <button className="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Experience Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-rose-600 bg-clip-text text-transparent mb-4">
                Your Artistic Journey
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Immerse yourself in a world of creativity where every stroke
                tells a story
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group relative bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100
                    ${activeCard === index ? "scale-105" : "hover:scale-102"}`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section with Artistic Design */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-white via-purple-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100">
              <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
                {/* Pricing Info */}
                
                <div className="lg:col-span-2 space-y-4 md:space-y-2">
  <h3 className="text-5xl p-8 font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent mb-4 md:mb-6">
    Art Making Experience
  </h3>

  <div className="pt-1">
    <div className="pt-1 flex items-baseline gap-2 md:gap-4 mb-4 md:mb-6">
      <span className="text-4xl md:text-6xl font-bold text-gray-800">
        ₹350
      </span>
      <span className="text-xl md:text-2xl text-gray-500">to</span>
      <span className="text-4xl md:text-6xl font-bold text-gray-800">
        ₹2000
      </span>
    </div>
    <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
      Choose your art form and pay accordingly - no hidden costs!
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
    {[
      "Choose your preferred art form",
      "All premium materials included",
      "Expert guidance available",
      "No booking required",
      "Walk-in anytime",
      "Take your creation home",
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 group">
        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
        <span className="text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          {item}
        </span>
      </div>
    ))}
  </div>

                </div>

                {/* Special Offer */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-6 md:p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="absolute -top-3 -right-3 w-12 h-12 md:-top-4 md:-right-4 md:w-16 md:h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg">
                      HOT!
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Special Combo</h4>
                    <div className="text-3xl md:text-4xl font-bold mb-2">10% OFF</div>
                    <p className="text-purple-100 text-sm md:text-base mb-4 md:mb-6">
                      Art + Slime making on the same day
                    </p>
                    <button className="bg-white text-purple-600 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 text-sm md:text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Art Forms Gallery - Kids Section */}
          <div className="mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                Art Forms for Kids 🧑‍🎨
              </h3>
              <p className="text-lg md:text-xl text-gray-600">
                Fun and creative projects for our young artists
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {artFormsKids.map((art, index) => (
                <div
                  key={art}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-base md:text-lg">🎨</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 text-sm md:text-base">
                      {art}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Art Forms Gallery - Adults Section */}
          <div className="mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                Art Forms for Adults 🧑‍🎨
              </h3>
              <p className="text-lg md:text-xl text-gray-600">
                Explore a range of sophisticated and intricate art techniques
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {artFormsAdults.map((art, index) => (
                <div
                  key={art}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-base md:text-lg">🎨</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 text-sm md:text-base">
                      {art}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Stats Section */}
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-rose-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "30+", label: "Art Varieties", icon: "🎨" },
                { value: "2+", label: "Years Min Age", icon: "👶" },
                { value: "₹350-₹2000", label: "Price Range", icon: "💰" },
                { value: "11AM-7PM", label: "Open Hours", icon: "🕐" },
              ].map((stat, i) => (
                <div key={i} className="group p-2 md:p-0">
                  <div className="text-3xl md:text-4xl mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-purple-100 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brochure Section */}
          <div className="mt-16 md:mt-20 text-center">
  <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Brochures</h3>
  <p className="text-base md:text-xl text-gray-600 mb-10">
    Get detailed information about all our art forms and pricing across different branches
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* Branch 1 */}
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-gray-100">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">Bangalore Branch</h4>
      <div style={{ position: 'relative', width: '100%', paddingTop: '141.4286%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(63,69,81,0.16)' }}>
        <iframe
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }}
          src="https://www.canva.com/design/DAGkzJWHL44/aCM0VggQIbL4QbK96MEopw/view?embed"
          allowFullScreen
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAGkzJWHL44/aCM0VggQIbL4QbK96MEopw/view"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        📋 View / Download
      </a>
    </div>

    {/* Branch 2 */}
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-gray-100">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">Hyderabad Branch</h4>
      <div style={{ position: 'relative', width: '100%', paddingTop: '141.4286%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(63,69,81,0.16)' }}>
        <iframe
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }}
          src="CANVA_EMBED_LINK_HERE"
          allowFullScreen
        ></iframe>
      </div>
      <a
        href="CANVA_SHARE_LINK_HERE"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        📋 View / Download
      </a>
    </div>

    {/* Branch 3 */}
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-gray-100">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">Vijayawada Branch</h4>
      <div style={{ position: 'relative', width: '100%', paddingTop: '141.4286%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(63,69,81,0.16)' }}>
        <iframe
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }}
          src="CANVA_EMBED_LINK_HERE"
          allowFullScreen
        ></iframe>
      </div>
      <a
        href="CANVA_SHARE_LINK_HERE"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        📋 View / Download
      </a>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  );
}