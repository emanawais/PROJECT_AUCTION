import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaGavel, FaPaintBrush, FaCar, FaHome, FaTshirt, FaLaptop, FaGem } from 'react-icons/fa';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Art & Collectibles', icon: <FaPaintBrush className="text-3xl mb-2 text-amber-600" />, count: 1245 },
    { id: 2, name: 'Vehicles', icon: <FaCar className="text-3xl mb-2 text-amber-600" />, count: 892 },
    { id: 3, name: 'Real Estate', icon: <FaHome className="text-3xl mb-2 text-amber-600" />, count: 367 },
    { id: 4, name: 'Jewelry', icon: <FaGem className="text-3xl mb-2 text-amber-600" />, count: 1568 },
    { id: 5, name: 'Electronics', icon: <FaLaptop className="text-3xl mb-2 text-amber-600" />, count: 2310 },
    { id: 6, name: 'Fashion', icon: <FaTshirt className="text-3xl mb-2 text-amber-600" />, count: 1789 },
    { id: 7, name: 'Antiques', icon: <FaGavel className="text-3xl mb-2 text-amber-600" />, count: 654 },
    { id: 8, name: 'Sports Memorabilia', icon: <FaGavel className="text-3xl mb-2 text-amber-600" />, count: 432 },
  ];

  const trendingAuctions = [
    { id: 1, title: 'Vintage Rolex Watch', category: 'Jewelry', bids: 24, timeLeft: '2h 15m', price: '$2,450' },
    { id: 2, title: 'Abstract Oil Painting', category: 'Art', bids: 12, timeLeft: '1h 30m', price: '$1,200' },
    { id: 3, title: 'Limited Edition Sneakers', category: 'Fashion', bids: 42, timeLeft: '4h 45m', price: '$850' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Categories</h1>
          <p className="text-xl mb-8">Discover unique items across all categories</p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full py-4 px-6 rounded-full shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button className="absolute right-2 top-2 bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-full transition duration-300">
              <FaSearch className="inline mr-2" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* All Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-2">All Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                to={`/live-auctions?category=${category.name}`} 
                key={category.id}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 hover:transform hover:-translate-y-1"
              >
                {category.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.name}</h3>
                <p className="text-gray-500">{category.count} items</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Auctions */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-2">Trending Auctions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingAuctions.map((auction) => (
              <div key={auction.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Item Image</span>
                </div>
                <div className="p-6">
                  <span className="text-sm text-amber-600 font-medium">{auction.category}</span>
                  <h3 className="text-xl font-bold my-2 text-gray-800">{auction.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">{auction.bids} bids</span>
                    <span className="text-gray-600">{auction.timeLeft} left</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">{auction.price}</span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-full transition duration-300">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to sell your items?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">Join thousands of sellers who are making money with BidMaster auctions</p>
          <Link 
            to="/sell-with-us" 
            className="inline-block bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Start Selling Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Categories;