
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Smartphone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-travel-dark-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1 - About */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">JourneyEase</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop platform for booking flights, hotels, holiday packages, and more. Travel made simple with the best prices and 24/7 customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Flights</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hotels</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Holiday Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Flight + Hotel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cruise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Activities</a></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Account</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cancel Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Safety Resources</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-travel-orange" />
                <span className="text-gray-300">
                  123 Travel Street, Tourism Tower, Delhi, 110001
                </span>
              </li>
              <li className="flex items-center">
                <Smartphone className="h-5 w-5 mr-3 text-travel-orange" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-travel-orange" />
                <a href="mailto:support@journeyease.com" className="text-gray-300 hover:text-white transition-colors">
                  support@journeyease.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 JourneyEase. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
