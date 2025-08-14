import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:underline">
                  Shop DIY Kits
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Company</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="hover:underline">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/artgram_yourhobbylobby"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} ArtGram. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
