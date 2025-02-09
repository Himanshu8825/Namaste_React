import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Company Info
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Press Releases
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Help</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Customer Support
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Cancellation Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* App Download Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Download Our App</h2>
          <div className="space-y-2">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-32"
              />
            </Link>
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_App_Store_badge.svg"
                alt="App Store"
                className="w-32"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © 2025 Foodies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
