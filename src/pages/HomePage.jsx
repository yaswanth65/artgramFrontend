"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    label: "Art Making",
    url: "https://res.cloudinary.com/df2mieky2/image/upload/w_900,q_75,f_auto/v1754632272/COUROSEL_IMAGE_hkof14.png",
  },
  {
    label: "Slime Play",
    url: "https://res.cloudinary.com/df2mieky2/image/upload/w_900,q_75,f_auto/v1754631030/DSC07659_wdwjtp.jpg",
  },
  {
    label: "Neon & Tufting",
    url: "https://res.cloudinary.com/df2mieky2/image/upload/w_900,q_75,f_auto/v1754630801/HAR05956_c7944n.jpg",
  },
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {/* Hero with background slider */}
      <header className="relative h-[85vh] text-white flex items-center justify-center text-center overflow-hidden">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        {/* slides */}
        <div className="absolute inset-0 z-0">
          {slides.map((s, i) => (
            <div
              key={s.label}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
              style={{
                backgroundImage: `url(${s.url})`,
                opacity: i === current ? 1 : 0,
              }}
            />
          ))}
        </div>

        {/* content */}
        <div className="relative z-[2] w-full px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400">
            Creative Art Experiences
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Unleash your creativity through our guided sessions and fun events!
          </p>
          <Link
            to="/book-session.html"
            className="inline-block rounded-full text-white px-6 py-3 font-semibold no-underline bg-gray-600 hover:bg-gray-700 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>

        {/* indicators */}
        <div className="absolute bottom-6 z-[2] flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              className={`w-3.5 h-3.5 rounded-full transition-all ${
                i === current ? "bg-yellow-400 scale-125" : "bg-white/60"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        {/* prev/next */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[2] flex justify-between px-4">
          <button
            aria-label="Previous"
            onClick={() =>
              setCurrent((c) => (c - 1 + slides.length) % slides.length)
            }
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-rose-600/80 hover:bg-rose-600 shadow flex items-center justify-center"
          >
            <span className="sr-only">Previous</span>
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
              <polyline
                points="16,6 8,12 16,18"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-rose-600/80 hover:bg-rose-600 shadow flex items-center justify-center"
          >
            <span className="sr-only">Next</span>
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
              <polyline
                points="8,6 16,12 8,18"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* About section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://res.cloudinary.com/df2mieky2/image/upload/w_900,q_75,f_auto/v1754634052/WhatsApp_Image_2025-08-06_at_21.37.50_02cf774e_fcuw4t.jpg"
              alt="Our Story"
              className="w-full rounded-lg shadow"
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-2">ABOUT US</h1>
            <h2 className="text-2xl font-semibold mb-4">
              From Inspiration to Impact
            </h2>
            <p className="mb-3">
              ArtGram began with a dream — to make art accessible, joyful, and
              part of everyday life. What started as a small initiative has
              grown into a vibrant community, nurturing creativity across all
              ages.
            </p>
            <p>
              We believe that art is not just a hobby but a way to communicate,
              heal, and evolve. Through our programs and events, we've touched
              hundreds of lives, empowering individuals to create fearlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Activities preview */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-rose-600">
            ArtGram Activities
          </h2>
          <p className="text-lg mb-10">
            From messy slime fun to professional art techniques - discover your
            creative passion
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <Card
              img="https://res.cloudinary.com/df2mieky2/image/upload/w_900,q_75,f_auto/v1754633325/IMG-20250807-WA0004_bepmdp.jpg"
              title="🎨 Art Making"
              text="Enjoy hands-on activities with painting, sketching and more guided by professional artists."
            />
            <Card
              img="https://res.cloudinary.com/df2mieky2/image/upload/w_900,q_75,f_auto/v1754633013/HAR05994_xifian.jpg"
              title="🌈 Slime Play"
              text="Get messy and creative with colorful, stretchy slime! Perfect for kids and adults who love sensory fun."
            />
            <Card
              img="https://res.cloudinary.com/df2mieky2/image/upload/w_900,q_75,f_auto/v1754633457/HAR05892_ondezh.jpg"
              title="💡 Neon & Tufting"
              text="Create glowing neon art or custom tufted designs to illuminate and decorate your space."
            />
          </div>

          <div className="mt-8">
            <Link
              to="/activities.html"
              className="inline-block rounded-full bg-rose-600 text-white px-6 py-3 font-semibold hover:bg-rose-700 hover:-translate-y-0.5 hover:shadow-lg transition-all no-underline"
            >
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/df2mieky2/image/upload/v1754634788/IMG_9423_az4tmx.jpg"
                alt="Birthday Artgram"
                className="w-full max-w-md mr-10 md:max-w-lg lg:max-w-xl rounded-lg shadow"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-secondary mb-6">
                BIRTHDAY ARTGRAM
              </h2>
              <p className="mb-4 text-lg">
                Artgram is the ultimate destination for birthdays,
                get-togethers, and corporate events. Whether you're planning a
                cozy gathering or a grand celebration, we offer tailored
                packages to suit every occasion. Enjoy a private room with
                captivating activities, exquisite food with buffet set up and
                stunning decor. With capcity to accomodate 60 people artgram
                perfectly suits your venue destiantion.
              </p>
              <p className="text-lg">
                Whatever your vision, Artgrma ensures a seamless, joyful
                experience for you and your guests!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-secondary mb-10 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-highlight mb-2">⭐⭐⭐⭐⭐</p>
              <p className="mb-4 text-gray-600">
                “Had a wonderful time doing the slime activity! Everything was
                well-organized, and the staff were so kind, patient, and
                engaging. It was a lot of fun for both kids and adults, and we
                truly felt welcomed the whole time. We’ll definitely be back for
                more activities soon!”
              </p>
              <div className="flex items-center">
                <span className="text-2xl mr-2">👩</span>
                <span className="font-semibold">Tejaswi Kalisetty</span>
              </div>
            </div>
            <div className="p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-highlight mb-2">⭐⭐⭐⭐⭐</p>
              <p className="mb-4 text-gray-600">
                “We hosted a onesie-themed baby shower at Artgram, and it was
                the best decision! Their team was attentive and turned a simple
                idea into a beautiful, memorable event. The venue was clean and
                comfortable, the food was delicious and timely, and everything
                went smoothly thanks to their care.”
              </p>
              <div className="flex items-center">
                <span className="text-2xl mr-2">👨</span>
                <span className="font-semibold">Mohana Swetha Nune</span>
              </div>
            </div>
            <div className="p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-highlight mb-2">⭐⭐⭐⭐⭐</p>
              <p className="mb-4 text-gray-600">
                “I celebrated my daughter's birthday party here and everyone had
                a fantastic time! Although the slime-making was a demonstration,
                the staff made sure the kids stayed involved and had fun. The
                venue was spacious, bright, and easy to reach, and the team was
                very responsive to all our queries.”
              </p>
              <div className="flex items-center">
                <span className="text-2xl mr-2">👩</span>
                <span className="font-semibold">Bhaswati Bhar</span>
              </div>
            </div>
            <div className="p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-highlight mb-2">⭐⭐⭐⭐⭐</p>
              <p className="mb-4 text-gray-600">
                “Attending an art workshop at Artgram was a delightful
                experience. The session was creative and well-paced, and the
                instructors were knowledgeable and supportive. The materials
                provided were of good quality, and the overall atmosphere made
                learning enjoyable and stress-free.”
              </p>
              <div className="flex items-center">
                <span className="text-2xl mr-2">👨</span>
                <span className="font-semibold">Amit Vyas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-secondary mb-10 text-center">
            Artgram Events
          </h2>
          <p className="text-center mb-10 text-lg">
            We host memorable events like birthdays, team outings, corporate
            parties, and more with a creative, artistic twist.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🎂</div>
              <h3 className="text-2xl font-bold mb-2">Birthday Parties</h3>
              <p className="text-gray-600">
                Celebrate fun-filled birthday parties with artistic themes and
                creative activities for all ages. Make unforgettable memories!
              </p>
            </div>
            <div className="text-center p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🎪</div>
              <h3 className="text-2xl font-bold mb-2">Bridal Showers</h3>
              <p className="text-gray-600">
                Enjoy personalized bridal shower events filled with art,
                creativity, and meaningful community connections.
              </p>
            </div>
            <div className="text-center p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-2">Corporate Events</h3>
              <p className="text-gray-600">
                Host engaging corporate events and team-building workshops that
                combine relaxation with creative expression.
              </p>
            </div>
            <div className="text-center p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🤰</div>
              <h3 className="text-2xl font-bold mb-2">Baby Showers</h3>
              <p className="text-gray-600">
                Celebrate new beginnings with beautiful and artsy baby shower
                events designed for joy and connection.
              </p>
            </div>
            <div className="text-center p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2">Kitty Parties</h3>
              <p className="text-gray-600">
                Engage in creative art workshops that inspire learning,
                collaboration, and artistic growth for all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-secondary mb-10 text-center">
            Our Branches
          </h2>
          <p className="text-center mb-10 text-lg">
            Visit us at any of our creative hubs across South India
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="https://res.cloudinary.com/df2mieky2/image/upload/v1754637272/wp6539521_vvafqv.jpg"
                alt="Hyderabad Branch"
                className="w-full h-60 object-contain rounded-lg mb-4 bg-white"
              />
              <div className="text-3xl mb-2">🏛️ Hyderabad</div>
              <p className="mb-4">
                📍 2nd Floor, HITEC City Hub
                <br />
                Cyber Towers, Madhapur
                <br />
                Hyderabad - 500081, Telangana
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="tel:+917358484266"
                  className="text-secondary hover:underline"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/917358484266"
                  className="text-secondary hover:underline"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="https://res.cloudinary.com/df2mieky2/image/upload/v1754637135/durgamma_temple_vj_6472215382_l3h6wj.jpg"
                alt="Vijayawada Branch"
                className="w-full h-60 object-contain rounded-lg mb-4 bg-white"
              />
              <div className="text-3xl mb-2">🏛️ Vijayawada</div>
              <p className="mb-4">
                📍 2nd Floor, HITEC City Hub
                <br />
                Cyber Towers, Madhapur
                <br />
                Hyderabad - 500081, Telangana
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="tel:+917358484266"
                  className="text-secondary hover:underline"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/917358484266"
                  className="text-secondary hover:underline"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="p-6 bg-light rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="https://res.cloudinary.com/df2mieky2/image/upload/v1754637352/jayanth-muppaneni-y96JVdGu7XU-unsplash_1_kooajm.jpg"
                alt="Bangalore Branch"
                className="w-full h-60 object-contain rounded-lg mb-4 bg-white"
              />
              <div className="text-3xl mb-2">🏛️ Bangalore</div>
              <p className="mb-4">
                📍 2nd Floor, HITEC City Hub
                <br />
                Cyber Towers, Madhapur
                <br />
                Hyderabad - 500081, Telangana
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="tel:+917358484266"
                  className="text-secondary hover:underline"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/917358484266"
                  className="text-secondary hover:underline"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="text-lg">
              Can't decide which branch to visit? Call our main helpline:
            </p>
            <p className="text-xl font-bold">📞 +91 77660 12299</p>
            <a
              href="https://wa.me/917358484266"
              className="text-secondary hover:underline"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const Card = ({ img, title, text }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all">
      <img
        src={img || "/placeholder.svg"}
        alt={title}
        className="w-full h-[220px] object-cover"
      />
      <div className="p-6">
        <h5 className="font-bold text-lg mb-2">{title}</h5>
        <p className="text-slate-600">{text}</p>
      </div>
    </div>
  );
};

export default HomePage;
