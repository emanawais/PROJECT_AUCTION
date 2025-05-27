import React from 'react'

function AuctionCardComponent() {
  return (
    <>

<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
  <div className="relative">
    <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115" alt="Auction Item" className="w-full h-48 object-cover" />
    <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
      LIVE
    </div>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-1">Vintage Rolex Watch</h3>
    <p className="text-gray-600 text-sm mb-3">1950s, Excellent Condition</p>
    <div className="flex justify-between items-center mb-3">
      <div>
        <p className="text-xs text-gray-500">Current Bid</p>
        <p className="text-lg font-bold text-amber-600">$2,450</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-500">Ends In</p>
        <p className="font-medium">12h 34m</p>
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
      <div className="bg-amber-500 h-2 rounded-full" style={{width: '65%'}} />
    </div>
    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md font-medium transition">
      Place Bid
    </button>
  </div>
</div>


    </>
  )
}

export default AuctionCardComponent
