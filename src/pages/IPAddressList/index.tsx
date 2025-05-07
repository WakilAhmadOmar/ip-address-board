import React, { useState, useMemo } from 'react';
import SearchBar from '../../components/SearchBar';
import IPAddressCard from '../../components/IPAddressCard';
import { ipAddresses } from '../../assets/data/mockData';

const IPAddressList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter IP addresses based on search query
  const filteredIPs = useMemo(() => {
    if (!searchQuery.trim()) return ipAddresses;
    
    return ipAddresses.filter(ip => 
      ip.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">IP Address Board</h1>
      
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      {filteredIPs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredIPs.map((ip, index) => (
            <IPAddressCard 
              key={`${ip}-${index}`} 
              ipAddress={ip} 
              searchQuery={searchQuery}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center py-16 bg-white rounded-lg shadow">
          <p className="text-lg text-gray-600">No IP addresses found matching "{searchQuery}"</p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => setSearchQuery('')}
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default IPAddressList;