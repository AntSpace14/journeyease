
import React from 'react';
import Navbar from '@/components/Navbar';
import SearchForm from '@/components/SearchForm';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import SpecialOffers from '@/components/SpecialOffers';
import Footer from '@/components/Footer';
import { ArrowRight, Clock, Shield, CreditCard, PhoneCall } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-travel-blue pt-20 pb-32 px-4">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Discover the World with Amazing Deals
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Book flights, hotels, and holiday packages at the best prices. Your journey begins here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-travel-blue font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center">
                Get App Exclusive Offers 
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-white" style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0% 100%)' }}></div>
      </section>

      {/* Search Form */}
      <SearchForm />

      {/* Trust Badges */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-travel-blue/10 p-4 rounded-full mr-4">
                <Shield className="h-6 w-6 text-travel-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-travel-dark-blue">Secure Booking</h3>
                <p className="text-sm text-gray-600">With trusted payment options</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-travel-blue/10 p-4 rounded-full mr-4">
                <CreditCard className="h-6 w-6 text-travel-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-travel-dark-blue">No Hidden Charges</h3>
                <p className="text-sm text-gray-600">Total transparency in pricing</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-travel-blue/10 p-4 rounded-full mr-4">
                <Clock className="h-6 w-6 text-travel-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-travel-dark-blue">Quick Booking Process</h3>
                <p className="text-sm text-gray-600">Book your trip in minutes</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-travel-blue/10 p-4 rounded-full mr-4">
                <PhoneCall className="h-6 w-6 text-travel-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-travel-dark-blue">24/7 Support</h3>
                <p className="text-sm text-gray-600">Help available anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* Special Offers */}
      <SpecialOffers />

      {/* Download App Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-travel-blue to-travel-dark-blue">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Download Our Mobile App</h2>
              <p className="text-white/80 mb-8 max-w-lg">
                Get exclusive app-only deals and manage your bookings on the go. Available for iOS and Android devices.
              </p>
              <div className="flex flex-wrap gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
