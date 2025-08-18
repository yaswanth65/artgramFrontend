import React, { useState, useEffect } from 'react';

const ShopPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState(3000)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      id: 1,
      title: "DIY Slime Kit",
      desc: "Create colorful, glittery slime at home! Includes glue, activator, glitter & tools.",
      price: 499,
      originalPrice: 699,
      category: "slime",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      bg: "https://res.cloudinary.com/df2mieky2/image/upload/v1754831666/IMG_3413_iqs2bq.jpg",
      href: "/shop/diy-slime-kit",
      features: ["Easy to follow guide", "Safe ingredients", "Multiple colors"]
    },
    {
      id: 2,
      title: "Beginner Art Set",
      desc: "Includes sketchbook, paints, brushes & pencils for young aspiring artists.",
      price: 799,
      originalPrice: 999,
      category: "art",
      rating: 4.9,
      reviews: 89,
      badge: "New",
      bg: "https://res.cloudinary.com/df2mieky2/image/upload/v1754831666/IMG_3400_oazvl5.jpg",
      href: "/shop/beginner-art-set",
      features: ["Professional quality", "Complete starter set", "Instruction booklet"]
    },
    {
      id: 3,
      title: "Mini Tufting Gun Kit",
      desc: "Perfect for beginners wanting to try rug tufting at home.",
      price: 2499,
      originalPrice: 2999,
      category: "tufting",
      rating: 4.7,
      reviews: 45,
      badge: "Premium",
      bg: "https://res.cloudinary.com/df2mieky2/image/upload/v1754831660/IMG_3352_nsdiar.jpg",
      href: "/shop/mini-tufting-kit",
      features: ["Professional tool", "Beginner friendly", "Video tutorials included"]
    },
    {
      id: 4,
      title: "Advanced Slime Kit",
      desc: "Glow-in-the-dark and color-changing slime ingredients for the slime expert.",
      price: 899,
      originalPrice: 1199,
      category: "slime",
      rating: 4.8,
      reviews: 67,
      badge: "Popular",
      bg: "https://res.cloudinary.com/df2mieky2/image/upload/v1754831818/Screenshot_2025-08-10_184600_dugdpm.png",
      href: "/shop/advanced-slime-kit",
      features: ["Glow-in-the-dark", "Color changing", "Advanced techniques"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', icon: '🎨', count: products.length },
    { id: 'slime', name: 'Slime Kits', icon: '🌈', count: products.filter(p => p.category === 'slime').length },
    { id: 'art', name: 'Art Kits', icon: '🎨', count: products.filter(p => p.category === 'art').length },
    { id: 'tufting', name: 'Tufting Kits', icon: '🧶', count: products.filter(p => p.category === 'tufting').length }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products.filter(p => p.price <= priceRange)
    : products.filter(p => p.category === selectedCategory && p.price <= priceRange)

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Seller': return 'bg-gradient-to-r from-orange-400 to-red-500'
      case 'New': return 'bg-gradient-to-r from-green-400 to-emerald-500'
      case 'Premium': return 'bg-gradient-to-r from-purple-400 to-indigo-500'
      case 'Popular': return 'bg-gradient-to-r from-blue-400 to-cyan-500'
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500'
    }
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-rose-50 ">
      
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm animate-pulse"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-4">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-rose-200 bg-clip-text text-transparent mb-1">
                Art & Slime
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto rounded-full mb-6" />
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Curated premium kits and materials to bring your creativity to life at home!
            </p>

            
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">

            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  Filters
                </h2>
                
                <div className="space-y-8">
                  {/* Categories */}
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 text-left
                            ${selectedCategory === category.id 
                              ? 'bg-gradient-to-r from-purple-600 to-rose-600 text-white shadow-lg' 
                              : 'bg-gray-50 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                            }`}
                        >
                          <span className="text-xl">{category.icon}</span>
                          <div className="flex-1">
                            <div className="font-semibold">{category.name}</div>
                            <div className={`text-sm ${selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                              {category.count} items
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Price Range</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>₹0</span>
                        <span className="font-semibold text-purple-600">₹{priceRange}</span>
                        <span>₹3000</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="3000" 
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600" 
                      />
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gradient-to-br from-purple-50 to-rose-50 p-6 rounded-2xl">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎯</div>
                      <div className="text-lg font-bold text-purple-600">{filteredProducts.length} Products</div>
                      <div className="text-sm text-gray-600">Match your filters</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <main className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    isHovered={hoveredProduct === product.id}
                    onHover={() => setHoveredProduct(product.id)}
                    onLeave={() => setHoveredProduct(null)}
                    getBadgeColor={getBadgeColor}
                  />
                ))}
              </div>

              {/* No Products Found */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">😔</div>
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your filters to see more products</p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('all')
                      setPriceRange(3000)
                    }}
                    className="bg-gradient-to-r from-purple-600 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Bulk Orders Section */}
              <div className="bg-gradient-to-br from-white via-purple-50 to-rose-50 p-12 rounded-3xl shadow-xl border border-purple-100">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="text-6xl mb-6">📦</div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent mb-4">
                    Looking for Bulk Orders?
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    We offer special discounts on bulk purchases for parties, corporate events, and gifting. 
                    Get in touch with us for a custom quote and exclusive deals!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group bg-gradient-to-r from-purple-600 to-rose-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <span className="flex items-center justify-center gap-3">
                        📞 Get Custom Quote
                        <div className="w-0 group-hover:w-4 h-0.5 bg-white rounded transition-all duration-300" />
                      </span>
                    </button>
                    <button className="bg-white text-purple-600 border-2 border-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300">
                      Learn More
                    </button>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">10%+</div>
                      <div className="text-sm text-gray-600">Bulk Discounts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">24h</div>
                      <div className="text-sm text-gray-600">Quick Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">🎁</div>
                      <div className="text-sm text-gray-600">Custom Packaging</div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

const ProductCard = ({ product, index, onHover, onLeave }) => {
  return (
    <div
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Product Image */}
      <div
        className="h-80 w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${product.bg}')` }}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          View Details
        </button>
      </div>

      {/* Optional Badge (Top Left) */}
      {product.badge && (
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg`}
        >
          {product.badge}
        </div>
      )}

      {/* Optional Discount Badge (Top Right) */}
      {product.originalPrice && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
        </div>
      )}
    </div>
  );
};


export default ShopPage;
