"use client";

import { useEffect, useState } from "react";

// Carousel images for hero section
const carouselImages = [
  "https://res.cloudinary.com/df2mieky2/image/upload/v1754651195/DSC07659_zj2pcc.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/v1755025999/IMG-20250807-WA0003_u999yh.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/v1755026061/HAR05826_hv05wz.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/v1754651197/HAR05826_iefkzg.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/v1754831665/HAR05956_cwxrxr.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/v1754831662/IMG_4561_axaohh.jpg",
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section with Carousel */}
      <header className="relative h-[80vh] text-white flex items-center justify-center text-center overflow-hidden">
        {/* Carousel Container */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 z-[1]" />

        {/* Text Content */}
        <div className="relative z-[2] mt-auto mb-16 px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-amber-300 tracking-wide drop-shadow-2xl">
            Creative Art Experiences
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-6 font-medium drop-shadow-lg">
            Unleash your creativity through our guided sessions and fun events!
          </p>
          <a
            href="#activities"
            className="inline-block rounded-full text-white px-8 py-4 text-lg font-bold no-underline bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all hover:scale-105 shadow-xl"
          >
            Start Your Journey
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <video
              className="w-full h-72 rounded-2xl object-cover shadow-2xl border-4 border-white"
              src="https://res.cloudinary.com/df2mieky2/video/upload/v1754938196/EVENTS_AT_ARTGRAM_v9yeol.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-black text-4xl mb-4 text-slate-800">
              ABOUT ARTGRAM
            </h2>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              From Inspiration to Impact
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              ArtGram began with a dream — to make art accessible, joyful, and
              part of everyday life. What started as a small initiative has
              grown into a vibrant community, nurturing creativity across all
              ages.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We believe that art is not just a hobby but a way to communicate,
              heal, and evolve. Through our programs and events, we've touched
              hundreds of lives, empowering individuals to create fearlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section
        id="activities"
        className="py-20 text-center bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Explore activities at Artgram
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <ActivityCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/v1754632272/COUROSEL_IMAGE_hkof14.png"
              title="🎨 Art Making"
              text="Enjoy 30+ hands on activities for all age groups"
              bgColor="bg-gradient-to-br from-pink-100 to-purple-100"
            />
            <ActivityCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/v1754630801/HAR05956_c7944n.jpg"
              title="🌈 Slime Play"
              text="Get messy and creative with colorful, stretchy slime! Perfect for kids and adults who love sensory fun."
              bgColor="bg-gradient-to-br from-blue-100 to-cyan-100"
            />
            <ActivityCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/v1754651197/HAR05826_iefkzg.jpg"
              title="🧶 Tufting"
              text="Explore a new art form: make your own rugs and coasters to decorate your home."
              bgColor="bg-gradient-to-br from-green-100 to-emerald-100"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <video
                className="w-full max-w-lg h-72 rounded-2xl object-cover shadow-2xl border-4 border-gradient-to-r from-pink-200 to-purple-200"
                src="https://res.cloudinary.com/df2mieky2/video/upload/v1754938174/TEAM_BUILDING_ACTIVITIES_x4vfij.mp4"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Events at Artgram
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Artgram is the ultimate destination for birthdays,
                get-togethers, and corporate events. Whether you're planning a
                cozy gathering or a grand celebration, we offer tailored
                packages to suit every occasion.
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Whatever your vision, Artgram ensures a seamless, joyful
                experience for you and your guests!
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <EventCard
              icon="🎂"
              title="Birthday Parties"
              bgColor="bg-gradient-to-br from-pink-100 to-rose-100"
            />
            <EventCard
              icon="🎪"
              title="Bridal Showers"
              bgColor="bg-gradient-to-br from-purple-100 to-pink-100"
            />
            <EventCard
              icon="🏢"
              title="Corporate Events"
              bgColor="bg-gradient-to-br from-blue-100 to-indigo-100"
            />
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
      From Our Instagram
    </h2>
    <p className="text-gray-600 mb-8">
      Follow us{" "}
      <a
        href="https://www.instagram.com/artgram_yourhobbylobby/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-pink-600 hover:text-purple-600 hover:underline transition-colors"
      >
        @artgram_yourhobbylobby
      </a>
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
      {[
        "https://res.cloudinary.com/df2mieky2/image/upload/v1755027036/Screenshot_2025-08-13_010005_eg9zck.png",
        "https://res.cloudinary.com/df2mieky2/image/upload/v1755026984/Screenshot_2025-08-13_005822_i6lhh6.png",
        "https://res.cloudinary.com/df2mieky2/image/upload/v1755026835/Screenshot_2025-08-13_005644_w2ul15.png",
        "https://res.cloudinary.com/df2mieky2/image/upload/v1755026734/Screenshot_2025-08-13_005505_dgcpr6.png"
      ].map((src, i) => (
        <a
          key={i}
          href="https://www.instagram.com/artgram_yourhobbylobby/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white aspect-square rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 border-gradient-to-r from-pink-200 to-purple-200 block"
        >
          <img
            src={src}
            alt={`Instagram Post ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </a>
      ))}
    </div>
  </div>
</section>




      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-16 text-center">
            In their own words: Artgram experiences
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              stars="⭐⭐⭐⭐⭐"
              text="Had a wonderful time doing the slime activity! Everything was well-organized, and the staff were so kind, patient, and engaging. It was a lot of fun for both kids and adults!"
              name="Tejaswi Kalisetty"
              bgColor="bg-gradient-to-br from-pink-100 to-rose-100"
            />
            <TestimonialCard
              stars="⭐⭐⭐⭐⭐"
              text="We hosted a onesie-themed baby shower at Artgram, and it was the best decision! Their team was attentive and turned a simple idea into a beautiful, memorable event."
              name="Mohana Swetha Nune"
              bgColor="bg-gradient-to-br from-blue-100 to-cyan-100"
            />
            <TestimonialCard
              stars="⭐⭐⭐⭐⭐"
              text="I celebrated my daughter's birthday party here and everyone had a fantastic time! The venue was spacious, bright, and easy to reach, and the team was very responsive."
              name="Bhaswati Bhar"
              bgColor="bg-gradient-to-br from-green-100 to-emerald-100"
            />
          </div>
        </div>
      </section>

      {/* Enhanced Branches Section */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-7xl mx-auto">
        <EnhancedBranchCard
          name="Hyderabad"
          address="#NO.8-2-686/K/1 AND 8-2686/K/2, 5TH FLOOR, KIMTEE SQUARE, ROAD NO-12, BANJARA HILLS, CIRCLE 37, HYDERABAD 500034"
          phone="+917766012299"
          bgColor="from-orange-400 via-red-400 to-pink-400"
          textColor="text-white"
          imageUrl="https://res.cloudinary.com/df2mieky2/image/upload/v1754637272/wp6539521_vvafqv.jpg"
          cityTag="Pearl City"
        />
        <EnhancedBranchCard
          name="Bangalore"
          address="#418, 4TH FLOOR, JB ARCADE, 27TH MAIN ROAD, HSR LAYOUT, SECTOR 1, BENGALURU 560102"
          phone="+919216345672"
          bgColor="from-purple-500 via-indigo-500 to-blue-500"
          textColor="text-white"
          imageUrl="https://res.cloudinary.com/df2mieky2/image/upload/v1754637352/jayanth-muppaneni-y96JVdGu7XU-unsplash_1_kooajm.jpg"
          cityTag="Garden City"
        />
        <EnhancedBranchCard
          name="Vijayawada"
          address="#40-6-11, 2ND FLOOR, MEENAKSHI TOWERS HOTEL, MURALI FORTUNE ROAD, MOGALRAJPURAM, OPP. SUBWAY 520010"
          phone="+919686846100"
          bgColor="from-pink-500 via-rose-500 to-red-500"
          textColor="text-white"
          imageUrl="https://res.cloudinary.com/df2mieky2/image/upload/v1754637135/durgamma_temple_vj_6472215382_l3h6wj.jpg"
          cityTag="Business Capital"
        />
      </div>
    </div>
  );
};

// Enhanced Activity Card Component
const ActivityCard = ({ img, title, text, bgColor }) => {
  return (
    <div
      className={`${bgColor} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col border border-white/50`}
    >
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed flex-grow">
          {text}
        </p>
      </div>
    </div>
  );
};

// Enhanced Testimonial Card Component
const TestimonialCard = ({ stars, text, name, bgColor }) => {
  return (
    <div
      className={`${bgColor} p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-white/50`}
    >
      <div className="flex flex-col h-full text-gray-800">
        <div className="text-2xl mb-4 text-amber-500">{stars}</div>
        <p className="leading-relaxed mb-6 flex-grow italic">"{text}"</p>
        <div className="flex items-center mt-auto">
          <p className="font-bold text-lg">{name}</p>
        </div>
      </div>
    </div>
  );
};

// Enhanced Event Card Component
const EventCard = ({ icon, title, bgColor }) => {
  return (
    <div
      className={`text-center p-8 ${bgColor} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50`}
    >
      <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
  );
};

// Enhanced Branch Card Component
const EnhancedBranchCard = ({
  name,
  address,
  phone,
  bgColor,
  textColor,
  imageUrl,
  cityTag,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1">
      {/* Background Gradient Overlay - more transparent */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-60 z-10`}
      ></div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={`${name} branch`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-96 flex flex-col justify-between p-8">
        {/* Top Section - City Tag */}
        <div className="flex justify-between items-start">
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white border border-white/30">
            {cityTag}
          </span>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
        </div>

        {/* Middle Section - City Name */}
        <div className="text-center py-4">
          <h3
            className={`text-4xl font-black ${textColor} tracking-tight leading-none`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {name}
          </h3>
          <div className="w-20 h-1 bg-white/50 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Bottom Section - Address & Actions */}
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <p
              className={`text-sm ${textColor} leading-relaxed opacity-90`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {address}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={`tel:${phone}`}
              className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 flex items-center justify-center gap-2 text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call
            </a>
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500/80 hover:bg-green-500 backdrop-blur-sm border border-green-400/50 rounded-xl px-4 py-3 flex items-center justify-center gap-2 text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.434-9.889 9.891.001 2.23.855 4.34 2.379 5.965l-1.546 5.578 5.762-1.511z" />
              </svg>
              Chat
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-6 right-6 z-30">
        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full mt-2 ml-1"></div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-15"></div>
    </div>
  );
};

export default HomePage;
