
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, HelpCircle, Globe } from 'lucide-react';
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
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-travel-blue">JourneyEase</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link to="/flights" className="flex items-center text-gray-700 hover:text-travel-blue">
                <span>Flights</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative group">
              <Link to="/hotels" className="flex items-center text-gray-700 hover:text-travel-blue">
                <span>Hotels</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <Link to="/holidays" className="text-gray-700 hover:text-travel-blue">Holiday Packages</Link>
            <Link to="/offers" className="text-gray-700 hover:text-travel-blue">Offers</Link>
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
              <Link to="/flights" className="text-gray-700 hover:text-travel-blue py-2 border-b border-gray-200">Flights</Link>
              <Link to="/hotels" className="text-gray-700 hover:text-travel-blue py-2 border-b border-gray-200">Hotels</Link>
              <Link to="/holidays" className="text-gray-700 hover:text-travel-blue py-2 border-b border-gray-200">Holiday Packages</Link>
              <Link to="/offers" className="text-gray-700 hover:text-travel-blue py-2 border-b border-gray-200">Offers</Link>
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
