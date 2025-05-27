import React, { useState } from 'react';
import { Clock, Gavel, Plus } from 'lucide-react';

const LiveAuctions = () => {
  const [auctions, setAuctions] = useState([
    {
      id: 1,
      title: 'Vintage Watch',
      description: 'A rare collector’s timepiece from 1960s.',
      currentBid: '$250',
      timeLeft: '2h 30m',
    },
    {
      id: 2,
      title: 'Art Painting',
      description: 'Original hand-painted abstract art.',
      currentBid: '$540',
      timeLeft: '5h 15m',
    },
  ]);

  const [newAuction, setNewAuction] = useState({
    title: '',
    description: '',
    startingBid: '',
  });

  const handleInputChange = (e) => {
    setNewAuction({ ...newAuction, [e.target.name]: e.target.value });
  };

  const handleAddAuction = () => {
    if (newAuction.title && newAuction.description && newAuction.startingBid) {
      const newItem = {
        id: auctions.length + 1,
        title: newAuction.title,
        description: newAuction.description,
        currentBid: newAuction.startingBid,
        timeLeft: '24h',
      };
      setAuctions([...auctions, newItem]);
      setNewAuction({ title: '', description: '', startingBid: '' });
      alert('Auction added successfully!');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 transition duration-300">
      <h1 className="text-4xl font-bold text-center mb-10">Live Auctions</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {auctions.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="mb-2 text-gray-600 dark:text-gray-300">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Gavel className="w-5 h-5" />
                <span>{item.currentBid}</span>
              </div>
              <div className="flex items-center gap-2 text-red-500">
                <Clock className="w-5 h-5" />
                <span>{item.timeLeft}</span>
              </div>
            </div>
            <button
              onClick={() => alert(`Placed bid on ${item.title}`)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Place Bid
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Plus size={20} /> Add New Auction
        </h2>
        <div className="grid gap-4">
          <input
            type="text"
            name="title"
            value={newAuction.title}
            onChange={handleInputChange}
            placeholder="Item Title"
            className="p-3 rounded-lg border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 w-full"
          />
          <textarea
            name="description"
            value={newAuction.description}
            onChange={handleInputChange}
            placeholder="Item Description"
            className="p-3 rounded-lg border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 w-full"
            rows={3}
          />
          <input
            type="text"
            name="startingBid"
            value={newAuction.startingBid}
            onChange={handleInputChange}
            placeholder="Starting Bid (e.g., $100)"
            className="p-3 rounded-lg border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 w-full"
          />
          <button
            onClick={handleAddAuction}
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
          >
            Submit Auction
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveAuctions;
