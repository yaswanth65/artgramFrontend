import { useEffect, useState } from "react";

const KEY = "admin_bookings";
const sample = [
  { id:1, branch:'Central', customer:'Alice', contact:'alice@example.com', seats:2, date: new Date().toISOString(), status:'Booked' },
  { id:2, branch:'West', customer:'Bob', contact:'bob@example.com', seats:1, date: new Date().toISOString(), status:'Confirmed' },
];
const read = ()=>{ try{ const r=localStorage.getItem(KEY); return r?JSON.parse(r):sample;}catch{return sample;} }
const write = (d)=> localStorage.setItem(KEY, JSON.stringify(d));

const BookingsAdmin = ()=>{
  const [bookings, setBookings] = useState([]);
  const [branchFilter, setBranchFilter] = useState('All');
  const [quick, setQuick] = useState({ branch: '', customer: '', contact: '', seats: 1 });

  useEffect(()=> setBookings(read()), []);
  useEffect(() => {
    const onStorage = (e) => { if (e.key === KEY || !e.key) setBookings(read()); };
    const onBookingsUpdated = () => setBookings(read());
    window.addEventListener('storage', onStorage);
    window.addEventListener('bookings_updated', onBookingsUpdated);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('bookings_updated', onBookingsUpdated);
    };
  }, []);

  const updateStatus = (id, status)=>{
    const updated = bookings.map(b=> b.id===id?{...b,status}:b);
    setBookings(updated); write(updated);
  }
  const remove = (id)=>{ const filtered = bookings.filter(b=>b.id!==id); setBookings(filtered); write(filtered); }

  const addQuick = ()=>{
    const id = bookings.length ? Math.max(...bookings.map(b=>b.id)) + 1 : 1;
    const nb = { id, branch: quick.branch || 'Central', customer: quick.customer || 'Guest', contact: { name: quick.customer||'Guest', email: quick.contact||'', phone: '' }, seats: parseInt(quick.seats||1,10)||1, session: 'General', slot: 'Any', payment: { method: 'cash', amount: 0, ref: '' }, date: new Date().toISOString(), status: 'Booked' };
    const added = [nb, ...bookings];
    setBookings(added); write(added);
    setQuick({ branch: '', customer: '', contact: '', seats: 1 });
  }
  const [open, setOpen] = useState(null);

  const branches = Array.from(new Set(bookings.map(b=>b.branch))).filter(Boolean);
  const list = branchFilter==='All'?bookings:bookings.filter(b=>b.branch===branchFilter);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Bookings</h2>
      <div className="p-4 border rounded bg-white">
        <div className="mb-3">
          <label className="mr-2">Branch:</label>
          <select value={branchFilter} onChange={(e)=>setBranchFilter(e.target.value)} className="p-2 border rounded">
            <option value="All">All</option>
            {branches.map(b=> <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div className="mb-4 p-3 border rounded bg-gray-50">
          <h4 className="font-semibold mb-2">Quick add booking (for testing)</h4>
          <div className="flex gap-2 flex-wrap">
            <input placeholder="Branch" value={quick.branch} onChange={(e)=>setQuick({...quick,branch:e.target.value})} className="p-2 border rounded" />
            <input placeholder="Customer name" value={quick.customer} onChange={(e)=>setQuick({...quick,customer:e.target.value})} className="p-2 border rounded" />
            <input placeholder="Contact" value={quick.contact} onChange={(e)=>setQuick({...quick,contact:e.target.value})} className="p-2 border rounded" />
            <input type="number" min="1" placeholder="Seats" value={quick.seats} onChange={(e)=>setQuick({...quick,seats:e.target.value})} className="w-24 p-2 border rounded" />
            <button onClick={addQuick} className="px-3 py-2 bg-rose-600 text-white rounded">Add</button>
          </div>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr><th className="p-2">#</th><th className="p-2">Branch</th><th className="p-2">Customer</th><th className="p-2">Seats</th><th className="p-2">Date</th><th className="p-2">Status</th><th className="p-2">Actions</th></tr>
          </thead>
          <tbody>
            {list.map(b=> (
              <>
              <tr key={b.id} className="border-t">
                <td className="p-2">{b.id}</td>
                <td className="p-2">{b.branch}</td>
                <td className="p-2">{b.customer}</td>
                <td className="p-2">{b.seats || 1}</td>
                <td className="p-2">{new Date(b.date).toLocaleString()}</td>
                <td className="p-2">{b.status}</td>
                <td className="p-2">
                  <button onClick={()=>updateStatus(b.id,'Confirmed')} className="mr-2 text-green-600">Confirm</button>
                  <button onClick={()=>updateStatus(b.id,'Cancelled')} className="mr-2 text-yellow-600">Cancel</button>
                  <button onClick={()=>remove(b.id)} className="mr-2 text-red-600">Delete</button>
                  <button onClick={()=>setOpen(open===b.id?null:b.id)} className="text-blue-600">Details</button>
                </td>
              </tr>
              {open===b.id && (
                <tr className="bg-gray-50">
                  <td colSpan="7" className="p-4">
                    <div className="mb-2"><strong>Contact:</strong> {b.contact?.name || '—'} — {b.contact?.email || '—'} — {b.contact?.phone || '—'}</div>
                    <div className="mb-2"><strong>Session:</strong> {b.session || '—'} • <strong>Slot:</strong> {b.slot || '—'}</div>
                    <div className="mb-2"><strong>Seats:</strong> {b.seats}</div>
                    <div className="mb-2"><strong>Payment:</strong> {b.payment?.method || '—'} • ₹{(b.payment?.amount||0).toFixed(2)} {b.payment?.ref ? `• ref: ${b.payment.ref}` : ''}</div>
                  </td>
                </tr>
              )}
              </>
            ))}
            {list.length===0 && <tr><td colSpan="8" className="p-4 text-center text-gray-500">No bookings</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookingsAdmin;
