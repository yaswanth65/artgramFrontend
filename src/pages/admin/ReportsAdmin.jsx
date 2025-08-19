import { useEffect, useState } from "react";

const TX_KEY = "admin_transactions";
const ORD_KEY = "admin_orders";

const read = (k, sample=[])=>{ try{const r=localStorage.getItem(k); return r?JSON.parse(r):sample;}catch{return sample;} }

const ReportsAdmin = ()=>{
  const [transactions, setTransactions] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    setTransactions(read(TX_KEY, []));
    setOrders(read(ORD_KEY, []));
  },[]);

  const totalSales = transactions.reduce((s,t)=> s + (t.amount||0), 0);
  const totalOrders = orders.length;

  // find top products from orders items
  const productCounts = {};
  orders.forEach(o=>{
    (o.items||[]).forEach(it=>{ productCounts[it.productId] = (productCounts[it.productId]||0) + (it.qty||0); });
  });
  const topProducts = Object.entries(productCounts).sort((a,b)=> b[1]-a[1]).slice(0,5);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Reports</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded bg-white">
          <h3 className="font-semibold mb-2">Sales Summary</h3>
          <p>Total sales: <strong>${totalSales.toFixed(2)}</strong></p>
          <p>Total orders: <strong>{totalOrders}</strong></p>
        </div>

        <div className="p-4 border rounded bg-white">
          <h3 className="font-semibold mb-2">Top Products (by qty)</h3>
          {topProducts.length===0 && <div className="text-gray-500">No data</div>}
          <ul>
            {topProducts.map(([id,qty])=> (
              <li key={id}>Product {id}: {qty} units</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ReportsAdmin;
