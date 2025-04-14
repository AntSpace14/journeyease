
import React from 'react';
import Navbar from '@/components/Navbar';
import SearchForm from '@/components/SearchForm';
import Footer from '@/components/Footer';

const HotelsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-travel-blue pt-20 pb-32 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Book Your Stay</h1>
            <p className="text-white/90 text-xl">Find the perfect hotel for your next trip</p>
          </div>
        </div>
        <SearchForm defaultTab="hotels" />
      </div>
      <Footer />
    </div>
  );
};

export default HotelsPage;
