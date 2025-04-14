
import React from 'react';
import Navbar from '@/components/Navbar';
import SearchForm from '@/components/SearchForm';
import Footer from '@/components/Footer';

const HolidaysPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-travel-blue pt-20 pb-32 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Holiday Packages</h1>
            <p className="text-white/90 text-xl">Discover amazing vacation packages</p>
          </div>
        </div>
        <SearchForm defaultTab="holidays" />
      </div>
      <Footer />
    </div>
  );
};

export default HolidaysPage;
