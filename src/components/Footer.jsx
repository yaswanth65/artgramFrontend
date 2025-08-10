import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white text-center py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div>
            <h5 className="text-lg font-semibold mb-3">🎨 ArtGram</h5>
            <p className="opacity-90">
              Where creativity meets community. Join us for unforgettable art
              experiences that inspire and delight.
            </p>
            <div className="mt-3">
              <strong>📞 Main Helpline: +91 9686846100</strong>
              <br />
              <small>Available: Mon-Sat 10AM-8PM, Sun 11AM-6PM</small>
            </div>
          </div>
          <div className="md:text-right">
            <h6 className="text-base font-semibold mb-3">Quick Links</h6>
            <div className="flex flex-wrap md:justify-end gap-3 mb-3">
              <Link
                to="/activities.html"
                className="text-white hover:text-yellow-400 no-underline"
              >
                Activities
              </Link>
              <Link
                to="/events.html"
                className="text-white hover:text-yellow-400 no-underline"
              >
                Events
              </Link>
              <Link
                to="/shop.html"
                className="text-white hover:text-yellow-400 no-underline"
              >
                Shop
              </Link>
              <Link
                to="/contactus.html"
                className="text-white hover:text-yellow-400 no-underline"
              >
                Contact
              </Link>
            </div>
            <div className="mt-3">
              <strong>Our Branches:</strong>
              <br />
              <small>🏛️ Hyderabad • 🌟 Bangalore • 🏞️ Vijayawada</small>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white/10" />
        <p className="mb-0">© 2025 ArtGram. Crafted with ❤️ for creators.</p>
      </div>
    </footer>
  );
};

export default Footer;
