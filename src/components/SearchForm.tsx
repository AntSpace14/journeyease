
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Search, Plane, Hotel, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-auto -mt-16 relative z-10 max-w-5xl">
      <Tabs defaultValue="flights" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="flights" className="flex items-center justify-center">
            <Plane className="mr-2 h-4 w-4" />
            <span>Flights</span>
          </TabsTrigger>
          <TabsTrigger value="hotels" className="flex items-center justify-center">
            <Hotel className="mr-2 h-4 w-4" />
            <span>Hotels</span>
          </TabsTrigger>
          <TabsTrigger value="holidays" className="flex items-center justify-center">
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Holiday Packages</span>
          </TabsTrigger>
        </TabsList>

        {/* Flight Search Tab */}
        <TabsContent value="flights">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="oneWay"
                  name="tripType"
                  defaultChecked
                  className="mr-2"
                />
                <label htmlFor="oneWay" className="mr-4">One Way</label>
                <input
                  type="radio"
                  id="roundTrip"
                  name="tripType"
                  className="mr-2"
                />
                <label htmlFor="roundTrip">Round Trip</label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">From</label>
              <div className="flex items-center border rounded-md p-2 hover:border-travel-blue">
                <MapPin className="text-gray-400 mr-2 h-5 w-5" />
                <Input 
                  placeholder="Delhi" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">To</label>
              <div className="flex items-center border rounded-md p-2 hover:border-travel-blue">
                <MapPin className="text-gray-400 mr-2 h-5 w-5" />
                <Input 
                  placeholder="Mumbai" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Departure</label>
              <div className="flex items-center border rounded-md p-2 hover:border-travel-blue">
                <Calendar className="text-gray-400 mr-2 h-5 w-5" />
                <Input 
                  placeholder="14 Apr, 2025" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  type="text"
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Travellers & Class</label>
              <div className="flex items-center border rounded-md p-2 hover:border-travel-blue">
                <Users className="text-gray-400 mr-2 h-5 w-5" />
                <Input 
                  placeholder="1 Adult, Economy" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </div>

          <Button className="w-full md:w-auto bg-travel-orange hover:bg-travel-light-orange text-white px-10 py-6 rounded-md font-semibold text-lg">
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </TabsContent>

        {/* Hotels Search Tab */}
        <TabsContent value="hotels">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">City, Area or Property</label>
              <div className="flex items-center border rounded-md p-2 hover:border-travel-blue">
                <MapPin className="text-gray-400 mr-2 h-5 w-5" />
                <Input 
                  placeholder="Goa" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-in</label>
              <div className="flex items-center border rounded-md p-2 hover:border-travel-blue">
                <Calendar className="text-gray-400 mr-2 h-5 w-5" />
                <Input 
                  placeholder="14 Apr, 2025" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  type="text"
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Rooms & Guests</label>
              <div className="flex items-center border rounded-md p-2 hover:border-travel-blue">
                <Users className="text-gray-400 mr-2 h-5 w-5" />
                <Input 
                  placeholder="1 Room, 2 Adults" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </div>

          <Button className="w-full md:w-auto bg-travel-orange hover:bg-travel-light-orange text-white px-10 py-6 rounded-md font-semibold text-lg">
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </TabsContent>

        {/* Holiday Packages Tab */}
        <TabsContent value="holidays">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">From</label>
              <div className="flex items-center border rounded-md p-2 hover:border-travel-blue">
                <MapPin className="text-gray-400 mr-2 h-5 w-5" />
                <Input 
                  placeholder="Delhi" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">To</label>
              <div className="flex items-center border rounded-md p-2 hover:border-travel-blue">
                <MapPin className="text-gray-400 mr-2 h-5 w-5" />
                <Input 
                  placeholder="Thailand" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Month of Travel</label>
              <div className="flex items-center border rounded-md p-2 hover:border-travel-blue">
                <Calendar className="text-gray-400 mr-2 h-5 w-5" />
                <Input 
                  placeholder="April 2025" 
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  type="month"
                />
              </div>
            </div>
          </div>

          <Button className="w-full md:w-auto bg-travel-orange hover:bg-travel-light-orange text-white px-10 py-6 rounded-md font-semibold text-lg">
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchForm;
