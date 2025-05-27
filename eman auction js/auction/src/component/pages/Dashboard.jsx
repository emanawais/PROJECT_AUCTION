// src/component/pages/Dashboard.jsx
import React from 'react';
import { useAuth } from '../Auth/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {currentUser && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg">Welcome, {currentUser.email}!</p>
          <p className="mt-4">This is your personalized dashboard where you can:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>View your active bids</li>
            <li>Track items you're selling</li>
            <li>Manage your account settings</li>
            <li>View auction statistics</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;