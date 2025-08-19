import { useEffect, useMemo, useState } from "react";
import ProductsAdmin from "./admin/ProductsAdmin";
import OrdersAdmin from "./admin/OrdersAdmin";
import TransactionsAdmin from "./admin/TransactionsAdmin";
import ReportsAdmin from "./admin/ReportsAdmin";
import BookingsAdmin from "./admin/BookingsAdmin";

const TABS = [
  "Overview",
  "Sales Analytics",
  "Content Management",
  "Branches",
  "Managers",
];

function readJSON(key, fallback = []) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

const AdminDashboard = () => {
  const [tab, setTab] = useState("Overview");
  const [transactions, setTransactions] = useState([]);
  const [orders, setOrders] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setTransactions(readJSON("admin_transactions", []));
    setOrders(readJSON("admin_orders", []));
  setBookings(readJSON("admin_bookings", []));
  }, []);

  const totalSales = useMemo(() => transactions.reduce((s, t) => s + (t.amount || 0), 0), [transactions]);
  const totalBookings = useMemo(() => bookings.length, [bookings]);
  const totalOrders = useMemo(() => orders.length, [orders]);
  const activeBranches = useMemo(() => Array.from(new Set(bookings.map((b) => b.branch))).filter(Boolean).length, [bookings]);

  const recentBookings = bookings.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
  const recentOrders = orders.slice().sort((a, b) => (b.id || 0) - (a.id || 0)).slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">Welcome back, Admin User</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b mb-6">
          <nav className="flex gap-6" aria-label="Admin tabs">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-3 -mb-px ${tab === t ? "border-b-2 border-rose-600 text-rose-600 font-semibold" : "text-gray-600"}`}
              >
                {t}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview */}
        {tab === "Overview" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-white rounded shadow-sm">
                <p className="text-sm text-gray-500">Total Revenue</p>
                <div className="mt-2 text-2xl font-semibold">${totalSales.toFixed(2)}</div>
              </div>

              <div className="p-4 bg-white rounded shadow-sm">
                <p className="text-sm text-gray-500">Total Bookings</p>
                <div className="mt-2 text-2xl font-semibold">{totalBookings}</div>
              </div>

              <div className="p-4 bg-white rounded shadow-sm">
                <p className="text-sm text-gray-500">Total Orders</p>
                <div className="mt-2 text-2xl font-semibold">{totalOrders}</div>
              </div>

              <div className="p-4 bg-white rounded shadow-sm">
                <p className="text-sm text-gray-500">Active Branches</p>
                <div className="mt-2 text-2xl font-semibold">{activeBranches}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-semibold mb-2">Recent Bookings</h3>
                {recentBookings.length === 0 ? (
                  <div className="text-gray-500">No recent bookings</div>
                ) : (
                  <ul className="space-y-2">
                    {recentBookings.map((b) => (
                      <li key={b.id} className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">{b.customer || 'Unknown'}</div>
                          <div className="text-sm text-gray-500">{b.branch} • {new Date(b.date).toLocaleString()}</div>
                        </div>
                        <div className="text-sm text-gray-700">{b.status}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="p-4 bg-white rounded shadow-sm">
                <h3 className="font-semibold mb-2">Recent Orders</h3>
                {recentOrders.length === 0 ? (
                  <div className="text-gray-500">No recent orders</div>
                ) : (
                  <ul className="space-y-2">
                    {recentOrders.map((o) => (
                      <li key={o.id} className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">Order #{o.id}</div>
                          <div className="text-sm text-gray-500">{o.customer || 'Guest'}</div>
                        </div>
                        <div className="text-sm text-gray-700">${(o.total||0).toFixed(2)}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Sales Analytics */}
        {tab === "Sales Analytics" && (
          <div className="p-4 bg-white rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Sales Analytics</h2>
            <ReportsAdmin />
          </div>
        )}

        {/* Content Management */}
        {tab === "Content Management" && (
          <div className="p-4 bg-white rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Content Management</h2>
            <ProductsAdmin />
          </div>
        )}

        {/* Branches */}
        {tab === "Branches" && (
          <div className="p-4 bg-white rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Branches</h2>
            <BookingsAdmin />
          </div>
        )}

        {/* Managers */}
        {tab === "Managers" && (
          <div className="p-4 bg-white rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Managers</h2>
            <p className="text-gray-600">No managers configured yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
