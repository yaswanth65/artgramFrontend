import { useEffect, useState } from "react";

const STORAGE_KEY = "admin_products";

const sample = [
  {
    id: 1,
    title: "Rainbow Slime Kit",
    price: 499,
    originalPrice: 699,
    stock: 10,
    category: "slime",
    branches: ["Central"],
    description: "Colorful slime kit with glitter",
    image: "https://res.cloudinary.com/df2mieky2/image/upload/v1754831666/IMG_3413_iqs2bq.jpg",
  },
  {
    id: 2,
    title: "Tufting Starter Kit",
    price: 2499,
    originalPrice: 2999,
    stock: 5,
    category: "tufting",
    branches: ["Central", "West"],
    description: "All-in-one tufting starter pack",
    image: "https://res.cloudinary.com/df2mieky2/image/upload/v1754831660/IMG_3352_nsdiar.jpg",
  },
];

function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : sample;
  } catch {
    return sample;
  }
}

function write(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ id: null, title: "", price: "", originalPrice: "", stock: "", category: "", branches: "", description: "", image: "" });
  const [preview, setPreview] = useState("");

  useEffect(() => setProducts(read()), []);
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'admin_products' || !e.key) setProducts(read());
    };
    const onProductsUpdated = () => setProducts(read());
    window.addEventListener('storage', onStorage);
    window.addEventListener('products_updated', onProductsUpdated);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('products_updated', onProductsUpdated);
    };
  }, []);

  const reset = () => {
    setForm({ id: null, title: "", price: "", originalPrice: "", stock: "", category: "", branches: "", description: "", image: "" });
    setPreview("");
  };

  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((f) => ({ ...f, image: reader.result }));
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const save = (e) => {
    e.preventDefault();
  const title = (form.title || "").trim();
  const price = parseFloat(form.price || 0) || 0;
  const originalPrice = form.originalPrice ? parseFloat(form.originalPrice) || 0 : undefined;
  const stock = parseInt(form.stock || 0, 10) || 0;
  const description = form.description || "";
  const category = form.category || "";
  const branches = (form.branches || "").split(",").map(s => s.trim()).filter(Boolean);

  if (!title) return alert("Please provide a product name");

  const p = { ...form, title, price, originalPrice, stock, description, category, branches, image: form.image };
    if (p.id) {
      const updated = products.map((x) => (x.id === p.id ? p : x));
      setProducts(updated);
      write(updated);
    } else {
      const id = products.length ? Math.max(...products.map((x) => x.id)) + 1 : 1;
      const inserted = [...products, { ...p, id }];
      setProducts(inserted);
      write(inserted);
    }
    reset();
  };

  const edit = (p) => {
    setForm({ ...p, branches: (p.branches || []).join(", ") });
    setPreview(p.image || "");
  };
  const remove = (id) => {
    if (!confirm("Delete this product?")) return;
    const filtered = products.filter((p) => p.id !== id);
    setProducts(filtered);
    write(filtered);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Products</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <form onSubmit={save} className="p-4 border rounded bg-gray-50">
          <label className="block mb-2">Image</label>
          <div className="mb-2 flex items-center gap-3">
            <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
              {preview ? (
                <img src={preview} alt="preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm text-gray-400">No image</span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFile(e.target.files && e.target.files[0])}
            />
          </div>

          <label className="block mb-2">Name</label>
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full mb-2 p-2 border rounded" />

          <label className="block mb-2">Price</label>
          <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full mb-2 p-2 border rounded" />

          <label className="block mb-2">Original Price (optional)</label>
          <input value={form.originalPrice} onChange={(e) => setForm({ ...form, originalPrice: e.target.value })} className="w-full mb-2 p-2 border rounded" />

          <label className="block mb-2">Stock</label>
          <input value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} className="w-full mb-2 p-2 border rounded" />

          <label className="block mb-2">Category</label>
          <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="slime, art, tufting" className="w-full mb-2 p-2 border rounded" />

          <label className="block mb-2">Available Branches (comma separated)</label>
          <input value={form.branches} onChange={(e) => setForm({ ...form, branches: e.target.value })} placeholder="Central, West" className="w-full mb-2 p-2 border rounded" />

          <label className="block mb-2">Description</label>
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full mb-2 p-2 border rounded" rows={4} />

          <div className="flex gap-2">
            <button type="submit" className="px-3 py-2 bg-rose-600 text-white rounded">{form.id ? "Update" : "Add"}</button>
            <button type="button" onClick={reset} className="px-3 py-2 border rounded">Cancel</button>
          </div>
        </form>

        <div className="p-4 border rounded bg-white overflow-auto">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="p-2">Image</th>
                <th className="p-2">Name</th>
                <th className="p-2">Price</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Description</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t align-top">
                  <td className="p-2 w-24">
                    <div className="w-16 h-16 bg-gray-50 rounded overflow-hidden">
                      {p.image ? <img src={p.image} alt={p.title} className="w-full h-full object-cover" /> : <div className="p-2 text-sm text-gray-400">No image</div>}
                    </div>
                  </td>
                  <td className="p-2">{p.title}</td>
                  <td className="p-2">${(p.price||0).toFixed(2)}</td>
                  <td className="p-2">{p.stock}</td>
                  <td className="p-2">{p.category || <span className="text-gray-400">—</span>}</td>
                  <td className="p-2">{(p.branches || []).join(', ') || <span className="text-gray-400">—</span>}</td>
                  <td className="p-2">{p.description ? (p.description.length > 80 ? p.description.slice(0, 77) + '...' : p.description) : <span className="text-gray-400">—</span>}</td>
                  <td className="p-2">
                    <button onClick={() => edit(p)} className="mr-2 text-blue-600">Edit</button>
                    <button onClick={() => remove(p.id)} className="text-red-600">Delete</button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-500">No products yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsAdmin;
