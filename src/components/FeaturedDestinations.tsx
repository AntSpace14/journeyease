
import React from 'react';
import { ChevronRight } from 'lucide-react';

type DestinationProps = {
  name: string;
  image: string;
  price: string;
  category: string;
};

const destinations: DestinationProps[] = [
  {
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=1000',
    price: '₹35,599',
    category: 'Beach',
  },
  {
    name: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&q=80&w=1000',
    price: '₹75,999',
    category: 'Mountains',
  },
  {
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000',
    price: '₹42,799',
    category: 'Beach',
  },
  {
    name: 'Singapore',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=1000',
    price: '₹54,399',
    category: 'City',
  },
];

const DestinationCard: React.FC<DestinationProps> = ({ name, image, price, category }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex justify-between items-end">
          <div>
            <span className="inline-block px-2 py-1 bg-travel-orange text-white text-xs rounded-full mb-2">
              {category}
            </span>
            <h3 className="text-white text-xl font-bold">{name}</h3>
          </div>
          <div className="text-right">
            <span className="text-gray-300 text-sm">Starting from</span>
            <p className="text-white font-bold">{price}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-travel-blue text-white px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center">
          Explore Now <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const FeaturedDestinations = () => {
  return (
    <section className="py-16 px-4 bg-travel-gray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-travel-dark-blue mb-4">
            Featured Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore handpicked destinations perfect for your next adventure. From pristine beaches to mountain retreats.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center text-travel-blue hover:text-travel-dark-blue font-semibold transition-colors">
            View All Destinations <ChevronRight className="ml-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
