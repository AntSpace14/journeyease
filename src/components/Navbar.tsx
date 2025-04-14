
import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, HelpCircle, Briefcase, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-travel-blue">JourneyEase</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-travel-blue">
                <span>Flights</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-48 z-10">
                <a href="#" className="block py-2 text-gray-700 hover:text-travel-blue">Domestic Flights</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-travel-blue">International Flights</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-travel-blue">Check Flight Status</a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-travel-blue">
                <span>Hotels</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-48 z-10">
                <a href="#" className="block py-2 text-gray-700 hover:text-travel-blue">Domestic Hotels</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-travel-blue">International Hotels</a>
                <a href="#" className="block py-2 text-gray-700 hover:text-travel-blue">Holiday Packages</a>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-travel-blue">Holiday Packages</a>
            <a href="#" className="text-gray-700 hover:text-travel-blue">Offers</a>
          </div>

          {/* Login/Profile Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center text-travel-blue">
              <Globe className="mr-2 h-4 w-4" />
              <span>INR</span>
            </Button>
            <Button variant="ghost" className="flex items-center text-travel-blue">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Support</span>
            </Button>
            <Button className="flex items-center bg-travel-blue hover:bg-travel-dark-blue text-white">
              <User className="mr-2 h-4 w-4" />
              <span>Login</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-travel-blue focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-3 py-3">
              <a href="#" className="text-gray-700 hover:text-travel-blue py-2 border-b border-gray-200">Flights</a>
              <a href="#" className="text-gray-700 hover:text-travel-blue py-2 border-b border-gray-200">Hotels</a>
              <a href="#" className="text-gray-700 hover:text-travel-blue py-2 border-b border-gray-200">Holiday Packages</a>
              <a href="#" className="text-gray-700 hover:text-travel-blue py-2 border-b border-gray-200">Offers</a>
              <a href="#" className="text-gray-700 hover:text-travel-blue py-2 border-b border-gray-200">Support</a>
              <Button className="bg-travel-blue hover:bg-travel-dark-blue text-white w-full">
                <User className="mr-2 h-4 w-4" />
                <span>Login</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
