"use client"; // Declare this component as a client component

import React from 'react';
import Link from 'next/link';

const categories = [
  'Vehicles',
  'Property Rentals',
  'Apparel',
  'Classifieds',
  'Electronics',
  'Entertainment',
  'Family',
  'Free Stuff',
  'Garden & Outdoor',
  'Hobbies',
  'Home Goods',
  'Home Improvement Supplies',
  'Home Sales',
  'Musical Instruments',
  'Office Supplies',
  'Pet Supplies',
  'Sporting Goods',
  'Tools',
  'College Textbooks',
  'Other',
];

const StickyBar = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed top-0 left-0 flex flex-col">
      {/* Sticky Search Bar */}
      <div className="sticky top-0 z-10 bg-gray-900">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Marketplace</h2>
          <input
            type="text"
            placeholder="Search Marketplace"
            className="w-full p-3 bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>
      </div>

      {/* Scrollable Content: Action Buttons, Create Listing Button, and Categories */}
      <div className="flex-1 overflow-y-auto">
        {/* Action Buttons and Create New Listing */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex flex-col space-y-2">
            <button
              onClick={scrollToTop}
              className="text-sm py-3 px-4 bg-gray-700 rounded-xl"
            >
              Browse all
            </button>
            <Link href="/marketplace/notifications">
              <div className="text-sm py-3 px-4 bg-transparent rounded-xl hover:bg-gray-700">
                Notifications
              </div>
            </Link>
            <Link href="/marketplace/inbox">
              <div className="text-sm py-3 px-4 bg-transparent rounded-xl hover:bg-gray-700">
                Inbox
              </div>
            </Link>
            <Link href="/marketplace/buying">
              <div className="text-sm py-3 px-4 bg-transparent rounded-xl hover:bg-gray-700">
                Buying
              </div>
            </Link>
            <Link href="/marketplace/selling">
              <div className="text-sm py-3 px-4 bg-transparent rounded-xl hover:bg-gray-700">
                Selling
              </div>
            </Link>
            <button className="w-full text-sm py-3 px-4 bg-blue-600 rounded-xl hover:bg-blue-500 mt-2">
              + Create new listing
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="p-4">
          <h3 className="text-sm font-semibold mb-2">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  href={`/marketplace/${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="block py-3 px-4 bg-gray-900 text-white rounded-xl hover:bg-gray-700">
                    {category}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
