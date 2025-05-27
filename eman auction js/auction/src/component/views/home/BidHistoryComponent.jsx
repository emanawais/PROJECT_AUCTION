import React from 'react'

function BidHistoryComponent() {
  return (
    <>
      
 <div className="bg-white rounded-lg shadow p-4">
  <h3 className="text-lg font-semibold border-b pb-2 mb-3">Bid History</h3>
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Bidder" className="w-8 h-8 rounded-full mr-2" />
        <span className="font-medium">johndoe</span>
      </div>
      <div className="text-right">
        <p className="font-semibold text-amber-600">$2,450</p>
        <p className="text-xs text-gray-500">10 min ago</p>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Bidder" className="w-8 h-8 rounded-full mr-2" />
        <span className="font-medium">sarahsmith</span>
      </div>
      <div className="text-right">
        <p className="font-semibold text-amber-600">$2,300</p>
        <p className="text-xs text-gray-500">25 min ago</p>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Bidder" className="w-8 h-8 rounded-full mr-2" />
        <span className="font-medium">mikejones</span>
      </div>
      <div className="text-right">
        <p className="font-semibold text-amber-600">$2,150</p>
        <p className="text-xs text-gray-500">1 hour ago</p>
      </div>
    </div>
  </div>
  <button className="mt-4 text-amber-600 hover:text-amber-700 text-sm font-medium">
    View All Bids (12)
  </button>
</div>


    </>
  )
}

export default BidHistoryComponent
