import { useEffect, useState } from "react";

const KEY = "admin_transactions";
const sample = [
  { id:1, orderId:1, amount:32.5, method:'card', date: new Date().toISOString() },
  { id:2, orderId:2, amount:45.0, method:'cash', date: new Date().toISOString() }
];

const read = () => { try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : sample; } catch { return sample; } }
const write = (data) => { localStorage.setItem(KEY, JSON.stringify(data)); console.debug('transactions saved', data); };

const TransactionsAdmin = ()=>{
  const [tx, setTx] = useState([]);
  useEffect(()=> setTx(read()), []);

  const total = tx.reduce((s,t)=> s + (t.amount||0), 0);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Transactions</h2>
      <div className="p-4 border rounded bg-white">
        <div className="mb-4">Total processed: <strong>${total.toFixed(2)}</strong></div>
        <table className="w-full text-left">
          <thead>
            <tr><th className="p-2">#</th><th className="p-2">Order</th><th className="p-2">Amount</th><th className="p-2">Method</th><th className="p-2">Date</th></tr>
          </thead>
          <tbody>
            {tx.map(t=> (
              <tr key={t.id} className="border-t">
                <td className="p-2">{t.id}</td>
                <td className="p-2">{t.orderId}</td>
                <td className="p-2">${(t.amount||0).toFixed(2)}</td>
                <td className="p-2">{t.method}</td>
                <td className="p-2">{new Date(t.date).toLocaleString()}</td>
              </tr>
            ))}
            {tx.length===0 && <tr><td colSpan="5" className="p-4 text-center text-gray-500">No transactions</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionsAdmin;
