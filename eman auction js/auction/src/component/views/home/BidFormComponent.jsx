import React from 'react'

function BidFormComponent() {
  return (
    <>
      
  <div className="bg-white rounded-lg shadow p-6">
  <h3 className="text-xl font-semibold mb-4">Place Your Bid</h3>
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-600">Current Bid:</span>
      <span className="text-xl font-bold text-amber-600">$2,450</span>
    </div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-600">Minimum Bid:</span>
      <span className="font-medium">$2,550</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-gray-600">Your Max Bid:</span>
      <span className="font-medium">$3,000</span>
    </div>
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Bid Amount</label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
      <input type="number" className="w-full pl-8 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Enter amount" />
    </div>
  </div>
  <div className="mb-6">
    <label className="flex items-center">
      <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
      <span className="ml-2 text-sm">Set as maximum bid (automatic bidding)</span>
    </label>
  </div>
  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium text-lg">
    Place Bid
  </button>
  <p className="mt-4 text-sm text-gray-500">
    By placing a bid, you agree to our <a href="#" className="text-amber-600 hover:underline">Terms of Service</a>
  </p>
</div>


    </>
  )
}

export default BidFormComponent
