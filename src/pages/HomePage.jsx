"use client";

import { useEffect, useState } from "react";

// Carousel images for hero section
const carouselImages = [
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651195/DSC07659_zj2pcc.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1755025999/IMG-20250807-WA0003_u999yh.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1755026061/HAR05826_hv05wz.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651197/HAR05826_iefkzg.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754831665/HAR05956_cwxrxr.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754831662/IMG_4561_axaohh.jpg",
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function openWhatsApp(phoneNumber, message) {
    // Only proceed if window is available (client-side)
    if (typeof window !== 'undefined') {
      const encodedMessage = encodeURIComponent(message);
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const url = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

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
      <header className="relative h-[80vh] text-white flex items-end justify-center text-center overflow-hidden">
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
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-[1]" />

        {/* Text Content - Simplified and at bottom */}
        <div className="relative z-[2] mb-17 pb-2 px-6 w-full">
          <h1 className="text-4xl md:text-6xl font-black mb-2 text-amber-300 drop-shadow-2xl">
            Creative Art Experiences
          </h1>
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

      {/* Map Section (from ContactUsPage) */}
     

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
              img="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754632272/COUROSEL_IMAGE_hkof14.png"
              title="🎨 Art Making"
              text="Enjoy 30+ hands on activities for all age groups"
              bgColor="bg-gradient-to-br from-pink-100 to-purple-100"
            />
            <ActivityCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754630801/HAR05956_c7944n.jpg"
              title="🌈 Slime Play"
              text="Get messy and creative with colorful, stretchy slime! Perfect for kids and adults who love sensory fun."
              bgColor="bg-gradient-to-br from-blue-100 to-cyan-100"
            />
            <ActivityCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651197/HAR05826_iefkzg.jpg"
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
              <a
                href="https://youtube.com/shorts/3Ho2S0v2PF0?si=jqswBjCvh31Vbd4u"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-lg h-72 rounded-2xl shadow-2xl border-4 border-gradient-to-r from-pink-200 to-purple-200 overflow-hidden relative"
              >
                <img
                  src="https://img.youtube.com/vi/3Ho2S0v2PF0/maxresdefault.jpg"
                  alt="YouTube Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
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
          {/* Event Cards */}
          <div className="flex flex-wrap justify-center gap-4">

            <EventCard
              icon="🎂"
              title="Birthdays"
              bgColor="bg-gradient-to-br from-purple-100 to-violet-100"
            />

            <EventCard
              icon="👶"
              title="Baby Shower"
              bgColor="bg-gradient-to-br from-blue-100 to-cyan-100"
            />
            
            <EventCard
              icon="🏢"
              title="Corporate"
              bgColor="bg-gradient-to-br from-indigo-100 to-blue-100"
            />
            
            <EventCard
              icon="🎨"
              title="Workshops"
              bgColor="bg-gradient-to-br from-green-100 to-teal-100"
            />
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            From Our Instagram
          </h2>
          <p className="text-gray-600 mb-6">
            Follow us{" "}
            <a
              href="https://www.instagram.com/artgram_yourhobbylobby/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-pink-600 hover:text-purple-600 hover:underline transition-colors"
            >
              @artgram_yourhobbylobby
            </a>
          </p>

          <div className="flex justify-center gap-12 flex-wrap">
            <iframe 
              src="https://www.instagram.com/reel/DGS5MUppMc4/embed" 
              width="280" 
              height="360" 
              frameBorder="0" 
              scrolling="no" 
              allowTransparency="true"
              title="Instagram Reel 1"
            ></iframe>
            
            <iframe 
              src="https://www.instagram.com/reel/DNC-sJuR0A4/embed?utm_source=ig_embed&hidecaption=true" 
              width="280" 
              height="360" 
              frameBorder="0" 
              scrolling="no" 
              allowTransparency="true"
              title="Instagram Reel 2"
            ></iframe>
            
            <iframe 
              src="https://www.instagram.com/reel/DM91tFgvQrS/embed?utm_source=ig_embed&hidecaption=false" 
              width="280" 
              height="360" 
              frameBorder="0" 
              scrolling="no" 
              allowTransparency="true"
              title="Instagram Reel 3"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-16 text-center">
            In their own words: Artgram experiences
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-white">
            <TestimonialCard
              stars="⭐⭐⭐⭐⭐"
              text="Had a wonderful time doing the slime activity! Everything was well-organized, and the staff were so kind, patient, and engaging. It was a lot of fun for both kids and adults!"
              name="Tejaswi Kalisetty"
              bgColor="bg-gradient-to-br from-gray-600 to-blue-900 text-white"
            />
            <TestimonialCard
              stars="⭐⭐⭐⭐⭐"
              text="We hosted a onesie-themed baby shower at Artgram, and it was the best decision! Their team was attentive and turned a simple idea into a beautiful, memorable event."
              name="Mohana Swetha Nune"
              bgColor="bg-gradient-to-br from-gray-600 to-blue-900 text-white"
            />
            <TestimonialCard
              stars="⭐⭐⭐⭐⭐"
              text="I celebrated my daughter's birthday party here and everyone had a fantastic time! The venue was spacious, bright, and easy to reach, and the team was very responsive."
              name="Bhaswati Bhar"
              bgColor="bg-gradient-to-br from-gray-600 to-blue-900 text-white"
            />
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
    </div>
  );
};

// Activity Card Component
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

// Testimonial Card Component
const TestimonialCard = ({ stars, text, name, bgColor }) => {
  return (
    <div
      className={`${bgColor} p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-white/50`}
    >
      <div className="flex flex-col h-full text-white">
        <div className="text-2xl mb-4 text-amber-500">{stars}</div>
        <p className="leading-relaxed mb-6 flex-grow italic opacity-90">"{text}"</p>
        <div className="flex items-center mt-auto">
          <p className="font-bold text-lg opacity-95">{name}</p>
        </div>
      </div>
    </div>
  );
};

// Event Card Component
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

// Branch Card Component with official logos (from ContactUsPage.jsx)
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

export default HomePage;
