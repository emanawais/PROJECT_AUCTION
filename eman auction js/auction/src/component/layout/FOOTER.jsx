import React from 'react'

function FOOTER() {
  return (
    <>
      
  {/* Footer Section */}
<footer className="bg-gray-900 text-white pt-12 pb-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {/* About Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <i className="fas fa-gavel text-amber-500 text-2xl" />
          <span className="text-xl font-bold">BidMaster</span>
        </div>
        <p className="text-gray-400">
          The premier online auction platform connecting buyers and sellers worldwide since 2010.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-amber-500">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="text-gray-400 hover:text-amber-500">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-amber-500">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="text-gray-400 hover:text-amber-500">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-amber-500 transition">How to Bid</a></li>
          <li><a href="#" className="hover:text-amber-500 transition">Auction Calendar</a></li>
          <li><a href="#" className="hover:text-amber-500 transition">Featured Items</a></li>
          <li><a href="#" className="hover:text-amber-500 transition">Past Auctions</a></li>
          <li><a href="#" className="hover:text-amber-500 transition">Bidding Tips</a></li>
        </ul>
      </div>
      {/* Categories */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Popular Categories</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-amber-500 transition">Art &amp; Antiques</a></li>
          <li><a href="#" className="hover:text-amber-500 transition">Jewelry &amp; Watches</a></li>
          <li><a href="#" className="hover:text-amber-500 transition">Collectibles</a></li>
          <li><a href="#" className="hover:text-amber-500 transition">Electronics</a></li>
          <li><a href="#" className="hover:text-amber-500 transition">Automobiles</a></li>
        </ul>
      </div>
      {/* Newsletter */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Stay Updated</h3>
        <p className="text-gray-400">
          Subscribe to our newsletter for upcoming auctions and special offers.
        </p>
        <form className="flex flex-col space-y-3">
          <input type="email" placeholder="Your email address" className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500" />
          <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    {/* Divider */}
    <div className="border-t border-gray-800 my-6" />
    {/* Bottom Footer */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-gray-400 text-sm mb-4 md:mb-0">
        © 2023 BidMaster Auctions. All rights reserved.
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-400 hover:text-amber-500 text-sm">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-amber-500 text-sm">Terms of Service</a>
        <a href="#" className="text-gray-400 hover:text-amber-500 text-sm">FAQ</a>
        <a href="#" className="text-gray-400 hover:text-amber-500 text-sm">Contact Us</a>
      </div>
    </div>
  </div>
</footer>



    </>
  )
}

export default FOOTER
