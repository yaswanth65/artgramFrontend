import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ActivitiesPage from "./pages/ActivitiesPage"
import ArtMakingActivityPage from "./pages/ArtMakingActivityPage"
import SlimePlayPage from "./pages/SlimePlayPage"
import TuftingActivityPage from "./pages/TuftingActivityPage"
import OurStoryPage from "./pages/OurStoryPage"
import ContactUsPage from "./pages/ContactUsPage"
import ShopPage from "./pages/ShopPage"
import EventsPage from "./pages/EventsPage"
import BookSessionPage from "./pages/BookSessionPage"

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <BrowserRouter>
        <Navbar />
        <main className="pt-[76px]">
          <Routes>
            {/* Support both root and index.html */}
            <Route path="/" element={<HomePage />} />
            <Route path="/index.html" element={<HomePage />} />

            <Route path="/activities.html" element={<ActivitiesPage />} />
            <Route path="/art-making-activity.html" element={<ArtMakingActivityPage />} />
            <Route path="/slime-play.html" element={<SlimePlayPage />} />
            <Route path="/tufting-activity.html" element={<TuftingActivityPage />} />
            <Route path="/ourstory.html" element={<OurStoryPage />} />
            <Route path="/contactus.html" element={<ContactUsPage />} />
            <Route path="/shop.html" element={<ShopPage />} />
            <Route path="/events.html" element={<EventsPage />} />
            <Route path="/book-session.html" element={<BookSessionPage />} />

            {/* Fallback to home */}
            <Route path="*" element={<Navigate to="/index.html" replace />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
