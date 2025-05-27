import React from 'react'

function AuctionFilterComponent() {
  return (
    <>

<div className="bg-white rounded-lg shadow p-4">
  <h3 className="text-lg font-semibold mb-4">Filter Auctions</h3>
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
      <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
        <option>All Categories</option>
        <option>Art &amp; Antiques</option>
        <option>Jewelry</option>
        <option>Collectibles</option>
        <option>Electronics</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
      <div className="flex items-center space-x-2">
        <input type="number" placeholder="Min" className="w-full border border-gray-300 rounded-md px-3 py-2" />
        <span>to</span>
        <input type="number" placeholder="Max" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Auction Status</label>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
          <span className="ml-2">Live Auctions</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
          <span className="ml-2">Upcoming Auctions</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
          <span className="ml-2">Ended Auctions</span>
        </label>
      </div>
    </div>
    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md font-medium">
      Apply Filters
    </button>
  </div>
</div>

      
    </>
  )
}

export default AuctionFilterComponent
