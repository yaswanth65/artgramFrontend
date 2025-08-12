import React, { useState, useEffect } from "react";

const OurStoryPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeEvent, setActiveEvent] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const timelineEvents = [
    {
      year: "May 2023",
      title: "Artgram's Inception",
      description: "Launched our first creative studio in Vijayawada.",
      icon: "🌱",
      color: "from-green-400 to-emerald-500"
    },
    {
      year: "Oct 2023", 
      title: "Hyderabad Branch",
      description: "Opened our first franchise branch in Gachibowli, Hyderabad.",
      icon: "🏢",
      color: "from-blue-400 to-cyan-500"
    },
    {
      year: "Mar 2024",
      title: "Hyderabad Relocation", 
      description: "Shifted from Gachibowli to a new, larger space in Banjara Hills.",
      icon: "📍",
      color: "from-purple-400 to-violet-500"
    },
    {
      year: "May 2024",
      title: "Summer Expansion",
      description: "Temporary summer branches opened in Mysore, Nellore, & Vizag.",
      icon: "☀️",
      color: "from-orange-400 to-red-500"
    },
    {
      year: "2024",
      title: "Bengaluru Calling",
      description: "Expanded to Bengaluru with a new, vibrant branch in HSR Layout.",
      icon: "🚀",
      color: "from-indigo-400 to-purple-500"
    },
    {
      year: "Oct 2024",
      title: "New Activities",
      description: "Introduced our highly popular Slime and Tufting workshops.",
      icon: "🎨",
      color: "from-pink-400 to-rose-500"
    },
    {
      year: "2025",
      title: "Future Vision", 
      description: "Planning to launch franchise branches in multiple cities across India.",
      icon: "✨",
      color: "from-yellow-400 to-amber-500"
    },
  ];

  const collaborationLogos = [
    { name: "KIDO farm", color: "bg-green-100 text-green-600" },
    { name: "Lim", color: "bg-blue-100 text-blue-600" },
    { name: "Cocoa Bakes", color: "bg-amber-100 text-amber-600" },
    { name: "LALA LAND", color: "bg-purple-100 text-purple-600" },
    { name: "KALI", color: "bg-rose-100 text-rose-600" },
    { name: "The Pop-Up Box", color: "bg-indigo-100 text-indigo-600" },
  ];

  const featuredLogos = [
    { name: "The Hindu", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/The_Hindu_Logo.svg/512px-The_Hindu_Logo.svg.png" },
    { name: "The New Indian Express", url: "https://upload.wikimedia.org/wikipedia/commons/9/90/The_New_Indian_Express_Logo.svg" },
    { name: "Eenadu", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Eenadu_logo.svg/512px-Eenadu_logo.svg.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-rose-50 ">
      
      {/* Hero Story Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm animate-pulse"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${10 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div>
                <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-rose-200 bg-clip-text text-transparent mb-4">
                  Our Story
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full mb-6" />
                <h2 className="text-3xl font-semibold text-white/90 leading-relaxed">
                  From a Spark of Passion to a Creative Community
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Artgram began with a simple dream: to make art accessible, joyful,
                  and a part of everyday life. What started as a small initiative
                  has blossomed into a vibrant community, nurturing creativity
                  across all ages and backgrounds.
                </p>
                <p>
                  We believe art is a powerful tool for communication, healing, and
                  personal growth. Through our diverse programs and events, we've
                  had the privilege of touching hundreds of lives, empowering
                  individuals to create fearlessly and express their unique stories.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-2xl">🎨</span>
                  <span className="text-white font-semibold">500+ Happy Artists</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-2xl">🏢</span>
                  <span className="text-white font-semibold">5+ Branches</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-rose-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                <img
                  src="https://res.cloudinary.com/df2mieky2/image/upload/q_auto,f_auto,w_800/v1754830108/Screenshot_2025-08-10_181702_urntu7.png"
                  alt="A vibrant Artgram studio space with people creating art"
                  className="relative w-full rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent mb-4">
              Our Journey Through the Years
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Every milestone tells a story of passion, growth, and the beautiful community we've built together
            </p>
          </div>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-200 via-indigo-200 to-rose-200 rounded-full transform -translate-y-1/2" />
            
            {/* Timeline Events */}
            <div className="relative flex justify-between items-center">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center w-40 group cursor-pointer"
                  onMouseEnter={() => setActiveEvent(index)}
                  onMouseLeave={() => setActiveEvent(null)}
                >
                  {/* Timeline Dot */}
                  <div className={`w-6 h-6 rounded-full bg-white border-4 border-purple-400 z-10 mb-4 transition-all duration-300
                    ${activeEvent === index ? 'scale-125 border-rose-500' : 'group-hover:scale-110'}`} />
                  
                  {/* Content Card */}
                  <div className={`bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 text-center
                    ${activeEvent === index ? 'scale-105 shadow-xl' : 'hover:scale-102'}`}>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${event.color} text-white text-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {event.icon}
                    </div>
                    
                    {/* Date */}
                    <div className="text-sm font-bold text-purple-600 mb-2">
                      {event.year}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                      {event.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="lg:hidden relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-purple-200 via-indigo-200 to-rose-200 rounded-full" />
            
            {/* Timeline Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className="relative flex items-start gap-6"
                  onMouseEnter={() => setActiveEvent(index)}
                  onMouseLeave={() => setActiveEvent(null)}
                >
                  {/* Timeline Dot */}
                  <div className={`w-6 h-6 rounded-full bg-white border-4 border-purple-400 z-10 transition-all duration-300 flex-shrink-0
                    ${activeEvent === index ? 'scale-125 border-rose-500' : ''}`} />
                  
                  {/* Content Card */}
                  <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex-1
                    ${activeEvent === index ? 'scale-105 shadow-xl' : ''}`}>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${event.color} text-white text-xl mb-4 transition-transform duration-300`}>
                      {event.icon}
                    </div>
                    
                    {/* Date */}
                    <div className="text-base font-bold text-purple-600 mb-2">
                      {event.year}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Partnerships Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Featured In */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured In</h2>
              <p className="text-lg md:text-xl text-gray-600">Recognized by leading media outlets</p>
            </div>
            
            <div className="flex justify-center items-center gap-16 flex-wrap">
              {featuredLogos.map((logo, index) => (
                <div 
                  key={logo.name}
                  className="group transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-12 md:h-16 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 filter drop-shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Collaborations */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Collaborations</h2>
              <p className="text-lg md:text-xl text-gray-600">Working together to spread creativity</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {collaborationLogos.map((logo, index) => (
                <div 
                  key={logo.name}
                  className="group text-center transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 mx-auto rounded-full ${logo.color} flex items-center justify-center text-2xl font-bold mb-3 group-hover:shadow-xl transition-all duration-300`}>
                    {logo.name.charAt(0)}
                  </div>
                  <p className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                    {logo.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Franchise CTA */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-rose-600 rounded-3xl p-12 text-white text-center overflow-hidden shadow-2xl">
              {/* Background Elements */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-32 h-32 rounded-full bg-white animate-pulse"
                    style={{
                      left: `${20 + (i * 20)}%`,
                      top: `${20 + (i % 2) * 40}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">🤝</div>
                <h2 className="text-4xl font-bold mb-6">
                  Become a Part of Our Story
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
                  Interested in bringing Artgram to your city? We are expanding and
                  looking for passionate partners to join our franchise family.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-white text-purple-600 font-bold px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                    <span className="flex items-center justify-center gap-3">
                      📞 Enquire About Franchise
                      <div className="w-0 group-hover:w-4 h-0.5 bg-purple-600 rounded transition-all duration-300" />
                    </span>
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;