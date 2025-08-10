const EventsPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-700 text-white text-center py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Special Events</h1>
          <p className="text-lg md:text-xl mb-4">Celebrate life's special moments with creative experiences</p>
          <p className="text-base md:text-lg">Birthday parties, corporate events, and community workshops</p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              icon="🎂"
              title="Birthday Parties"
              price="Starting ₹2,999"
              desc="Make birthdays unforgettable with themed art parties, slime making, and creative activities for all ages."
            />
            <EventCard
              icon="🏢"
              title="Corporate Events"
              price="Starting ₹4,999"
              desc="Team building activities with art workshops, collaborative projects, and stress-relief creative sessions."
            />
            <EventCard
              icon="🎨"
              title="Art Workshops"
              price="Starting ₹799"
              desc="Community workshops featuring guest artists, new techniques, and collaborative art projects."
            />
            <EventCard
              icon="👫"
              title="Kitty Parties"
              price="Starting ₹1,999"
              desc="Private group bookings for friends, families, or special occasions with customized activities."
            />
            <EventCard
              icon="🎪"
              title="Baby Shower Parties"
              price="Starting ₹599"
              desc="Holiday-themed workshops, summer camps, and special celebration events throughout the year."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const EventCard = ({ icon, title, desc, price }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_5px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all text-center">
      <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-3xl mx-auto mb-5">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-slate-500 leading-relaxed mb-4">{desc}</p>
      <div className="text-rose-600 font-bold text-lg mb-4">{price}</div>
      <button className="w-full rounded-lg bg-slate-900 hover:bg-slate-800 text-white py-3 font-semibold transition-colors">
        Book Event
      </button>
    </div>
  )
}

export default EventsPage
