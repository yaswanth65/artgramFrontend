const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-rose-700 to-red-600 text-white text-center py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 z-10 relative">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Our Story</h1>
          <p className="text-xl">Discover how ArtGram ignited a creative revolution.</p>
        </div>
        <div className="absolute inset-0 bg-pattern opacity-10" />
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <img src="/OUR STORY/placeholder-image.jpg" alt="Our Story" className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-rose-600">ABOUT US</h1>
            <h2 className="text-3xl font-semibold text-gray-700">From Inspiration to Impact</h2>
            <p className="text-gray-600 leading-relaxed">
              ArtGram began with a dream — to make art accessible, joyful, and part of everyday life. What started as a small initiative has grown into a vibrant community, nurturing creativity across all ages.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that art is not just a hobby but a way to communicate, heal, and evolve. Through our programs and events, we've touched hundreds of lives, empowering individuals to create fearlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-slate-100 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-rose-600 text-center mb-16 relative">
            Our Journey Through the Years
            <span className="block w-24 h-1.5 bg-yellow-400 mx-auto mt-3 rounded-full" />
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-rose-600 to-yellow-400 rounded-full" />

            <TimelineItem
              side="left"
              year="2020"
              title="The Spark of Creativity"
              icon="💡"
              text="ArtGram was born out of a passion to make art accessible to everyone. Started in a small studio with just 5 dedicated artists, we launched our first slime-making workshop with 12 excited participants."
              stat="12 Happy Faces"
              imageSrc="/OUR STORY/placeholder-image-2020.jpg"
            />
            <TimelineItem
              side="right"
              year="2021"
              title="Building Our Community"
              icon="🌱"
              text="Expanded to include traditional art classes and clay modeling workshops. Introduced birthday party packages and saw our first corporate team-building event. Our community grew to over 200 regular participants."
              stat="200+ Members"
              imageSrc="/OUR STORY/placeholder-image-2021.jpg"
            />
            <TimelineItem
              side="left"
              year="2022"
              title="Innovation Breakthrough"
              icon="🚀"
              text="Launched our signature tufting workshops and neon art sessions. Opened our second branch in Bangalore. Introduced digital art classes and reached our first milestone of 1000 happy customers."
              stat="1000+ Customers"
              imageSrc="/OUR STORY/placeholder-image-2022.jpg"
            />
            <TimelineItem
              side="right"
              year="2023"
              title="Recognition & Milestones"
              icon="🏆"
              text="Received 'Best Creative Studio' award from the City Arts Council. Launched our third branch in Vijayawada. Hosted our first major art exhibition featuring customer creations, showcasing over 500 artworks."
              stat="500+ Artworks"
              imageSrc="/OUR STORY/placeholder-image-2023.jpg"
            />
            <TimelineItem
              side="left"
              year="2024"
              title="Digital Revolution"
              icon="💻"
              text="Launched our online booking platform and virtual workshops. Introduced advanced digital art courses and AI-assisted creative sessions. Reached 5000+ satisfied customers across all our branches with 50+ weekly sessions."
              stat="5000+ Happy Customers"
              imageSrc="/OUR STORY/placeholder-image-2024.jpg"
            />
            <TimelineItem
              side="right"
              year="2025"
              title="Expanding Horizons"
              icon="🌟"
              text="Planning nationwide expansion with 10 new branches. Launching our mobile app for seamless bookings and virtual reality art experiences. Our vision: touching 50,000 lives through art by 2026."
              stat="Future: 50K Lives"
              imageSrc="/OUR STORY/placeholder-image-2025.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const TimelineItem = ({ side, year, title, icon, text, stat, imageSrc }) => {
  const align = side === "left" ? "md:flex-row" : "md:flex-row-reverse"
  const imageAlign = side === "left" ? "md:order-1" : "md:order-2"
  const textAlign = side === "left" ? "md:order-2" : "md:order-1"
  return (
    <div className={`flex flex-col md:flex-row items-center my-16 ${align}`}>
      <div className={`w-full md:w-1/3 p-4 ${imageAlign}`}>
        <img src={imageSrc} alt={`${year} Image`} className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
      </div>
      <div className={`relative w-full md:w-2/3 p-6 ${textAlign}`}>
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-rose-100 hover:border-yellow-300 transition-all">
          <h3 className="text-rose-600 font-bold text-xl mb-3 flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {text} <span className="ml-2 inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-semibold text-sm">{stat}</span>
          </p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center shadow-[0_0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(225,29,72,0.5)]">
          {year}
        </div>
      </div>
    </div>
  )
}

export default OurStoryPage