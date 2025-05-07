import React from 'react';
import { HighlightMatch } from './HighlightMatch';
import { getIPType } from '../utils/getIPType ';

interface IPAddressCardProps {
  ipAddress: string;
  searchQuery: string;
}

const IPAddressCard: React.FC<IPAddressCardProps> = ({ ipAddress, searchQuery }) => {
  return (
    <div className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
      <div className='p-5'>
        <div className='flex justify-between items-center mb-3'>
          <h2 className='text-xl font-semibold text-gray-800'>
            <HighlightMatch text={ipAddress} query={searchQuery} />
          </h2>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getIPType(ipAddress).color}`}
          >
            {getIPType(ipAddress).label}
          </span>
        </div>

        <div className='border-t border-gray-100 pt-3 mt-3'>
          <div className='flex justify-between text-sm text-gray-500'>
            <span>Last ping: 10m ago</span>
            <span className='inline-flex items-center'>
              <span className='h-2 w-2 rounded-full bg-green-500 mr-1'></span>
              Online
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPAddressCard;
