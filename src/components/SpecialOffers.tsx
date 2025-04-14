
import React from 'react';
import { Tag, CalendarCheck, Percent } from 'lucide-react';

type OfferProps = {
  title: string;
  description: string;
  code: string;
  icon: 'tag' | 'calendar' | 'percent';
  color: string;
};

const offers: OfferProps[] = [
  {
    title: 'Domestic Flights Offer',
    description: 'Get up to ₹2,000 off on domestic flight bookings',
    code: 'FLYHOME',
    icon: 'tag',
    color: 'bg-blue-100 text-travel-blue',
  },
  {
    title: 'Hotels Flash Sale',
    description: 'Flat 20% off on premium hotel bookings worldwide',
    code: 'STAYCAY',
    icon: 'percent',
    color: 'bg-green-100 text-green-700',
  },
  {
    title: 'Weekend Getaway',
    description: 'Special discounts on weekend holiday packages',
    code: 'WEEKEND',
    icon: 'calendar',
    color: 'bg-orange-100 text-travel-orange',
  },
];

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'tag':
      return <Tag className="h-8 w-8" />;
    case 'calendar':
      return <CalendarCheck className="h-8 w-8" />;
    case 'percent':
      return <Percent className="h-8 w-8" />;
    default:
      return <Tag className="h-8 w-8" />;
  }
};

const OfferCard: React.FC<OfferProps> = ({ title, description, code, icon, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 flex flex-col h-full">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${color} mb-4`}>
          {renderIcon(icon)}
        </div>
        <h3 className="text-xl font-bold mb-3 text-travel-dark-blue">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            Code: {code}
          </div>
          <button className="text-travel-blue hover:text-travel-dark-blue font-semibold transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

const SpecialOffers = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-travel-blue/10 text-travel-blue rounded-full text-sm font-medium mb-3">
            Limited Time
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-travel-dark-blue mb-4">
            Special Offers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take advantage of our exclusive deals and save on your next trip. Use these promo codes at checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-travel-blue to-travel-light-blue rounded-lg shadow-lg mt-12 overflow-hidden">
          <div className="p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Subscribe & Save More!
              </h3>
              <p className="text-white/80">
                Get exclusive offers and travel updates directly to your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-l-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-travel-yellow mb-2 sm:mb-0"
              />
              <button className="bg-travel-yellow hover:bg-travel-orange text-white font-semibold px-6 py-3 rounded-md sm:rounded-l-none transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
