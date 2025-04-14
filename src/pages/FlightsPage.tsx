
import React from 'react';
import Navbar from '@/components/Navbar';
import SearchForm from '@/components/SearchForm';
import Footer from '@/components/Footer';

const FlightsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-travel-blue pt-20 pb-32 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Find Your Flight</h1>
            <p className="text-white/90 text-xl">Search and compare flights from multiple airlines</p>
          </div>
        </div>
        <SearchForm defaultTab="flights" />
      </div>
      <Footer />
    </div>
  );
};

export default FlightsPage;
