const ShopPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-rose-600 to-rose-700 text-white py-20 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Shop Art Supplies & Kits</h1>
          <p className="text-lg">Curated kits and materials to bring your creativity to life!</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              title="DIY Slime Kit"
              desc="Create colorful, glittery slime at home! Includes glue, activator, glitter & tools."
              price="₹499"
              bg="https://via.placeholder.com/300x200?text=Slime+Kit"
            />
            <ProductCard
              title="Beginner Art Set"
              desc="Includes sketchbook, paints, brushes & pencils for young aspiring artists."
              price="₹799"
              bg="https://via.placeholder.com/300x200?text=Art+Set"
            />
            <ProductCard
              title="Mini Tufting Gun Kit"
              desc="Perfect for beginners wanting to try rug tufting at home."
              price="₹2,499"
              bg="https://via.placeholder.com/300x200?text=Tufting+Kit"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const ProductCard = ({ title, desc, price, bg }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_5px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all h-full">
      <div className="h-52 rounded-lg mb-4 bg-center bg-cover" style={{ backgroundImage: `url('${bg}')` }} />
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-slate-600 my-3">{desc}</p>
      <div className="text-rose-600 font-bold text-lg mb-4">{price}</div>
      <button className="w-full rounded-lg bg-slate-900 hover:bg-slate-800 text-white py-3 font-semibold transition-colors">
        Buy Now
      </button>
    </div>
  )
}

export default ShopPage
