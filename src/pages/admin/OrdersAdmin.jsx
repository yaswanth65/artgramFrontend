import { useEffect, useState } from "react";

const KEY = "admin_orders";
const sample = [
  { id: 1, customer: "Alice", total: 32.5, status: "Pending", items: [{ productId:1, qty:2 }] },
  { id: 2, customer: "Bob", total: 45.0, status: "Completed", items: [{ productId:2, qty:1 }] },
];

const read = () => {
  try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : sample; } catch { return sample; }
}
const write = (data) => localStorage.setItem(KEY, JSON.stringify(data));

const OrdersAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => setOrders(read()), []);

  const updateStatus = (id, status) => {
    const updated = orders.map(o => o.id === id ? { ...o, status } : o);
    setOrders(updated); write(updated);
  }

  const remove = (id) => { const filtered = orders.filter(o=>o.id!==id); setOrders(filtered); write(filtered); }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Orders</h2>
      <div className="p-4 border rounded bg-white">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2">#</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Total</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <>
              <tr key={o.id} className="border-t">
                <td className="p-2">{o.id}</td>
                <td className="p-2">{o.customer}</td>
                <td className="p-2">${o.total.toFixed(2)}</td>
                <td className="p-2">{o.status}</td>
                <td className="p-2">
                  <button onClick={()=>updateStatus(o.id, 'Completed')} className="mr-2 text-green-600">Mark Complete</button>
                  <button onClick={()=>updateStatus(o.id, 'Cancelled')} className="mr-2 text-yellow-600">Cancel</button>
                  <button onClick={()=>remove(o.id)} className="mr-2 text-red-600">Delete</button>
                  <button onClick={()=>setOpen(open===o.id?null:o.id)} className="text-blue-600 ml-2">Details</button>
                </td>
              </tr>
              {open===o.id && (
                <tr className="bg-gray-50">
                  <td colSpan="5" className="p-4">
                    <div className="mb-2"><strong>Contact:</strong> {o.contact ? `${o.contact.name} — ${o.contact.email} • ${o.contact.phone || '-'}` : 'N/A'}</div>
                    <div className="mb-2"><strong>Address:</strong> {o.contact?.address || '—'}</div>
                    <div className="mb-2"><strong>Items:</strong></div>
                    <ul className="pl-5 list-disc">
                      {(o.items||[]).map((it, idx)=>(<li key={idx}>{it.title || `Product ${it.productId}`} — qty: {it.qty} — ₹{(it.price||0).toFixed(2)}</li>))}
                    </ul>
                    <div className="mt-3"><strong>Payment:</strong></div>
                    <div className="text-sm text-gray-700">Search transactions for order #{o.id} in Transactions tab for details.</div>
                  </td>
                </tr>
              )}
              </>
            ))}
            {orders.length===0 && (
              <tr><td colSpan="5" className="p-4 text-center text-gray-500">No orders</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersAdmin;
