import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState(3000)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const [productsFromStore, setProductsFromStore] = useState([]);
  useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem('admin_products');
        setProductsFromStore(raw ? JSON.parse(raw) : []);
      } catch {
        setProductsFromStore([]);
      }
    };
    load();
    const onStorage = (e) => {
      if (e.key === 'admin_products' || !e.key) load();
    };
    const onProductsUpdated = () => load();
    window.addEventListener('storage', onStorage);
    window.addEventListener('products_updated', onProductsUpdated);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('products_updated', onProductsUpdated);
    };
  }, []);

  const products = productsFromStore.map(p => ({
    id: p.id,
    title: p.title,
    desc: p.description,
    price: p.price,
    originalPrice: p.originalPrice,
  stock: p.stock || 0,
    category: p.category || 'other',
    rating: p.rating || 4.5,
    reviews: p.reviews || 0,
    badge: p.badge || '',
    bg: p.image || '',
    href: `/shop/${(p.title||'product').toLowerCase().replace(/[^a-z0-9]+/g,'-')}`,
    features: (p.features && p.features.length) ? p.features : [],
  }));

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

const ProductCard = ({ product, index, onHover, onLeave, onAddToCart, getBadgeColor }) => {
  const slug = `${(product.title||'').toLowerCase().replace(/[^a-z0-9]+/g,'-')}`;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    try {
      const raw = localStorage.getItem('cart_items');
      const cart = raw ? JSON.parse(raw) : [];
      const existing = cart.find(c => c.id === product.id);
      // check stock if available
      const stock = product.stock || Infinity;
      if (existing) {
        if ((existing.qty || 1) + 1 > stock) return alert('Not enough stock');
        existing.qty = (existing.qty || 1) + 1;
      } else {
        if (stock < 1) return alert('Out of stock');
        cart.push({ 
          id: product.id, 
          title: product.title, 
          price: product.price, 
          image: product.bg, 
          qty: 1 
        });
      }
      localStorage.setItem('cart_items', JSON.stringify(cart));
      window.dispatchEvent(new Event('cart_updated'));
      alert('Added to cart');
      if (onAddToCart) onAddToCart(product);
    } catch {
      alert('Could not add to cart');
    }
  };

  return (
    <div
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Product Image */}
      <div className="relative h-80 w-full overflow-hidden">
        <div
          className="h-full w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${product.bg}')` }}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link 
            to={`/shop/${slug}`}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            View Details
          </Link>
        </div>

        {/* Optional Badge (Top Left) */}
        {product.badge && (
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg ${getBadgeColor ? getBadgeColor(product.badge) : 'bg-purple-600'}`}>
            {product.badge}
          </div>
        )}

        {/* Optional Discount Badge (Top Right) */}
        {product.originalPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}

        {/* Shop Icon (Bottom Right) */}
        <div 
          className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white cursor-pointer"
          onClick={handleAddToCart}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-800" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
            />
          </svg>
        </div>
      </div>

      {/* Product Info */}
      
    </div>
  );
};

export default ShopPage;
