import React from 'react'

function CountdownTimerComponent() {
  return (
    <>
  <div className="bg-gray-800 text-white p-4 rounded-lg">
  <h4 className="text-center font-medium mb-3">Auction Ending Soon</h4>
  <div className="flex justify-center space-x-4">
    <div className="text-center">
      <div className="bg-gray-700 rounded-lg p-2 w-14">
        <span className="text-xl font-bold">02</span>
      </div>
      <span className="text-xs mt-1 block">Days</span>
    </div>
    <div className="text-center">
      <div className="bg-gray-700 rounded-lg p-2 w-14">
        <span className="text-xl font-bold">08</span>
      </div>
      <span className="text-xs mt-1 block">Hours</span>
    </div>
    <div className="text-center">
      <div className="bg-gray-700 rounded-lg p-2 w-14">
        <span className="text-xl font-bold">23</span>
      </div>
      <span className="text-xs mt-1 block">Mins</span>
    </div>
    <div className="text-center">
      <div className="bg-gray-700 rounded-lg p-2 w-14">
        <span className="text-xl font-bold">45</span>
      </div>
      <span className="text-xs mt-1 block">Secs</span>
    </div>
  </div>
</div>


    </>
  )
}

export default CountdownTimerComponent
