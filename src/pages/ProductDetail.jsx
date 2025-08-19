import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, comment: '' });

  useEffect(() => {
    try {
      const raw = localStorage.getItem('admin_products');
      const products = raw ? JSON.parse(raw) : [];
      const found = products.find((p) => {
        const slugified = (p.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return slugified === slug;
      });
      setProduct(found || null);
    } catch {
      setProduct(null);
    }
  }, [slug]);

  useEffect(() => {
    if (!product) return;
    const imgs = product.images && product.images.length ? product.images : product.image ? [product.image] : [];
    setSelectedImage(imgs.length ? imgs[0] : null);

    try {
      const raw = localStorage.getItem('product_reviews');
      const all = raw ? JSON.parse(raw) : {};
      const list = (product.id && all[product.id]) ? all[product.id] : [];
      setReviews(list);
    } catch {
      setReviews([]);
    }
  }, [product]);

  const saveReview = (e) => {
    e.preventDefault();
    if (!product) return;
    const r = {
      id: Date.now(),
      name: reviewForm.name || 'Anonymous',
      rating: Number(reviewForm.rating) || 5,
      comment: reviewForm.comment || '',
      date: new Date().toISOString(),
    };
    try {
      const raw = localStorage.getItem('product_reviews');
      const all = raw ? JSON.parse(raw) : {};
      const list = (product.id && all[product.id]) ? all[product.id] : [];
      list.unshift(r);
      all[product.id] = list;
      localStorage.setItem('product_reviews', JSON.stringify(all));
      setReviews(list);
      setReviewForm({ name: '', rating: 5, comment: '' });
      alert('Review added');
    } catch (err) {
      console.debug(err);
      alert('Could not save review');
    }
  };

  const addToCart = (qty) => {
    if (!product) return;
    const qtyNum = Number(qty) || 1;
    const stock = product.stock || 0;
    if (qtyNum < 1) return alert('Enter qty');
    if (qtyNum > stock) return alert('Not enough stock');
    try {
      const raw = localStorage.getItem('cart_items');
      const cart = raw ? JSON.parse(raw) : [];
      const existing = cart.find((c) => c.id === product.id);
      if (existing) {
        if ((existing.qty || 1) + qtyNum > stock) return alert('Not enough stock');
        existing.qty = (existing.qty || 1) + qtyNum;
      } else {
        cart.push({ id: product.id, title: product.title, price: product.price, image: product.image, qty: qtyNum });
      }
      localStorage.setItem('cart_items', JSON.stringify(cart));
      window.dispatchEvent(new Event('cart_updated'));
      alert('Added to cart');
    } catch (err) {
      console.debug(err);
      alert('Could not add to cart');
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
          <Link to="/shop.html" className="text-rose-600">Back to shop</Link>
        </div>
      </div>
    );
  }

  const images = product.images && product.images.length ? product.images : product.image ? [product.image] : [];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="w-full rounded-lg overflow-hidden mb-4 bg-gray-100">
              {selectedImage ? (
                <img src={selectedImage} alt={product.title} className="w-full rounded-lg object-cover h-96" />
              ) : (
                <div className="h-96 flex items-center justify-center text-gray-400">No image</div>
              )}
            </div>

            <div className="flex gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded overflow-hidden border ${selectedImage === img ? 'ring-2 ring-rose-500' : 'ring-1 ring-gray-200'}`}>
                  <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4">
              <div className="text-2xl font-bold text-purple-600">₹{product.price}</div>
              {product.originalPrice && <div className="text-sm text-gray-400 line-through">₹{product.originalPrice}</div>}
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-600">Category: <strong>{product.category || 'General'}</strong></div>
              <div className="text-sm text-gray-600">Stock: <strong>{product.stock || 0}</strong></div>
              <div className="text-sm text-gray-600">Available at: <strong>{(product.branches || []).join(', ') || 'All branches'}</strong></div>
            </div>

            <div className="mt-6">
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Quantity</label>
                <input id="pd-qty" type="number" min="1" defaultValue={1} className="w-32 p-2 border rounded" />
              </div>

              <div className="flex gap-3 items-center">
                <button
                  type="button"
                  onClick={() => addToCart(Number(document.getElementById('pd-qty')?.value || 1))}
                  className="px-4 py-3 bg-rose-600 text-white rounded font-semibold">
                  Add to cart
                </button>
                <Link to="/shop.html" className="px-4 py-3 border rounded">Back to shop</Link>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Customer Reviews</h3>

                <form onSubmit={saveReview} className="space-y-3 mb-4">
                  <input
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full p-2 border rounded"
                  />

                  <div className="flex gap-2">
                    <select
                      value={reviewForm.rating}
                      onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
                      className="p-2 border rounded"
                    >
                      {[5, 4, 3, 2, 1].map((n) => (
                        <option key={n} value={n}>{n} stars</option>
                      ))}
                    </select>

                    <input
                      value={reviewForm.comment}
                      onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                      placeholder="Write a review"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>

                  <div>
                    <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Submit review</button>
                  </div>
                </form>

                {reviews.length === 0 ? (
                  <div className="text-gray-500">No reviews yet</div>
                ) : (
                  <ul className="space-y-3">
                    {reviews.map((r) => (
                      <li key={r.id} className="p-3 border rounded bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div className="font-semibold">{r.name}</div>
                          <div className="text-sm text-yellow-500">{Array.from({ length: r.rating }).map(() => '★').join('')}</div>
                        </div>
                        <div className="text-sm text-gray-600">{new Date(r.date).toLocaleString()}</div>
                        <div className="mt-2">{r.comment}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
