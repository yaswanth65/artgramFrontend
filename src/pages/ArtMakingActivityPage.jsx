"use client"

import { useEffect, useState } from "react"

const slides = [
  {
    img: "art-painting.jpg",
    title: "Express Your Vision",
    text: "Transform your imagination into stunning visual masterpieces",
  },
  {
    img: "art-sculpture.jpg",
    title: "Sculpt Your Dreams",
    text: "Shape clay and materials into three-dimensional art",
  },
  { img: "art-digital.jpg", title: "Digital Innovation", text: "Blend traditional techniques with modern technology" },
]

const ArtMakingActivityPage = () => {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      {/* Hero carousel */}
      <div className="relative h-[100vh] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === idx ? 1 : 0 }}
          >
            <img src={s.img || "/placeholder.svg"} alt={s.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-400/70 to-teal-400/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-[90%]">
                <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow mb-3 animate-slideInFromTop">
                  {s.title}
                </h2>
                <p className="text-lg md:text-2xl drop-shadow animate-slideInFromBottom">{s.text}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
          <button
            onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)}
            className="text-white text-3xl bg-white/30 hover:bg-white/60 px-4 py-2 rounded-full backdrop-blur"
          >
            ❮
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % slides.length)}
            className="text-white text-3xl bg-white/30 hover:bg-white/60 px-4 py-2 rounded-full backdrop-blur"
          >
            ❯
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIdx(i)}
              className={`w-4 h-4 rounded-full cursor-pointer ${i === idx ? "bg-white scale-110" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-10">Discover Your Artistic Journey</h1>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Feature
              icon="🎨"
              title="Create Original Masterpieces"
              text="Design your own compositions, choose from professional-grade materials, and bring your artistic vision to life through various mediums and techniques."
            />
            <Feature
              icon="🧘"
              title="Mindful Art Practice"
              text="Experience the meditative flow of creation. Perfect for stress relief, focus building, and mindful expression through colors, shapes, and textures."
            />
            <Feature
              icon="🖼️"
              title="Create Lasting Beauty"
              text="Create meaningful art! Every session produces beautiful paintings, sculptures, mixed media pieces, or decorative works you'll treasure forever."
            />
          </div>

          {/* Video CTA */}
          <div className="text-center bg-white/10 rounded-2xl p-8 backdrop-blur mb-12">
            <h2 className="text-2xl font-bold mb-6">Watch Our Art Process</h2>
            <a
              href="https://youtube.com/shorts/P8No32l-kxo?feature=shared"
              target="_blank"
              className="block no-underline"
              rel="noreferrer"
            >
              <div className="rounded-2xl p-12 bg-gradient-to-tr from-pink-400 to-purple-300 hover:scale-[1.03] transition-transform">
                <div className="text-5xl drop-shadow mb-3">▶</div>
                <p className="text-lg font-bold">Click to watch on YouTube</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-2">Start Your Artistic Adventure</h2>
            <p className="opacity-90 mb-6">Join our community of artists and discover the joy of creative expression</p>
            <button className="rounded-full bg-gradient-to-tr from-red-400 to-teal-400 px-6 py-3 font-semibold shadow-md hover:-translate-y-0.5 transition-all">
              Book Your Session
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Feature = ({ icon, title, text }) => {
  return (
    <div className="text-center bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur hover:-translate-y-1 hover:shadow-2xl transition-all">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/90">{text}</p>
    </div>
  )
}

export default ArtMakingActivityPage
