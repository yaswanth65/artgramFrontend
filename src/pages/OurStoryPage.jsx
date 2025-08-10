const OurStoryPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-700 text-white text-center py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Story</h1>
          <p className="text-lg">Discover how ArtGram started and what drives our creative journey.</p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <img src="/OUR STORY/IMG_5282.JPEG.jpg" alt="Our Story" className="w-full rounded-lg shadow" />
          <div>
            <h1 className="font-bold text-3xl mb-2">ABOUT US</h1>
            <h2 className="text-2xl font-semibold mb-4">From Inspiration to Impact</h2>
            <p className="mb-3">
              ArtGram began with a dream — to make art accessible, joyful, and part of everyday life. What started as a
              small initiative has grown into a vibrant community, nurturing creativity across all ages.
            </p>
            <p>
              We believe that art is not just a hobby but a way to communicate, heal, and evolve. Through our programs
              and events, we've touched hundreds of lives, empowering individuals to create fearlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-rose-600 text-center mb-12 relative">
            Our Journey Through the Years
            <span className="block w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded" />
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-rose-600 to-yellow-400 rounded" />

            <TimelineItem
              side="left"
              year="2020"
              title="The Spark of Creativity"
              icon="💡"
              text="ArtGram was born out of a passion to make art accessible to everyone. Started in a small studio with just 5 dedicated artists, we launched our first slime-making workshop with 12 excited participants."
              stat="12 Happy Faces"
            />
            <TimelineItem
              side="right"
              year="2021"
              title="Building Our Community"
              icon="🌱"
              text="Expanded to include traditional art classes and clay modeling workshops. Introduced birthday party packages and saw our first corporate team-building event. Our community grew to over 200 regular participants."
              stat="200+ Members"
            />
            <TimelineItem
              side="left"
              year="2022"
              title="Innovation Breakthrough"
              icon="🚀"
              text="Launched our signature tufting workshops and neon art sessions. Opened our second branch in Bangalore. Introduced digital art classes and reached our first milestone of 1000 happy customers."
              stat="1000+ Customers"
            />
            <TimelineItem
              side="right"
              year="2023"
              title="Recognition & Milestones"
              icon="🏆"
              text="Received 'Best Creative Studio' award from the City Arts Council. Launched our third branch in Vijayawada. Hosted our first major art exhibition featuring customer creations, showcasing over 500 artworks."
              stat="500+ Artworks"
            />
            <TimelineItem
              side="left"
              year="2024"
              title="Digital Revolution"
              icon="💻"
              text="Launched our online booking platform and virtual workshops. Introduced advanced digital art courses and AI-assisted creative sessions. Reached 5000+ satisfied customers across all our branches with 50+ weekly sessions."
              stat="5000+ Happy Customers"
            />
            <TimelineItem
              side="right"
              year="2025"
              title="Expanding Horizons"
              icon="🌟"
              text="Planning nationwide expansion with 10 new branches. Launching our mobile app for seamless bookings and virtual reality art experiences. Our vision: touching 50,000 lives through art by 2026."
              stat="Future: 50K Lives"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const TimelineItem = ({ side, year, title, icon, text, stat }) => {
  const align = side === "left" ? "justify-end text-right" : "justify-start text-left"
  const float = side === "left" ? "md:pr-[55%]" : "md:pl-[55%]"
  const beforeSide =
    side === "left" ? "before:right-[-30px] before:border-l-white" : "before:left-[-30px] before:border-r-white"
  return (
    <div className={`relative flex ${align} my-10`}>
      <div
        className={`relative bg-white p-6 rounded-2xl shadow-xl border-4 border-transparent hover:border-yellow-400 transition-all w-full md:w-[45%] ${float} before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:border-8 before:border-transparent ${beforeSide}`}
      >
        <h3 className="text-rose-600 font-bold text-lg mb-2 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400">{icon}</span>
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {text}{" "}
          <span className="ml-2 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full font-bold text-xs">{stat}</span>
        </p>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-rose-600 text-white font-extrabold flex items-center justify-center shadow-[0_0_0_6px_white,0_0_20px_rgba(225,29,72,0.3)]">
        {year}
      </div>
    </div>
  )
}

export default OurStoryPage
