import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './component/Auth/AuthContext';
import ProtectedRoute from './component/Auth/ProtectedRoute';
import BidMaster from './component/pages/BidMaster';
import Categories from './component/pages/Categories';
import HowItWorks from './component/pages/HowItWorks';
import LiveAuctions from './component/pages/LiveAuctions';
import SellWithUs from './component/pages/SellWithUs';
import Dashboard from './component/pages/Dashboard'; // Added missing import
import Login from './component/Auth/Login';
import Signup from './component/Auth/Signup';
import NAVBAR from './component/layout/NAVBAR'; // Corrected import name
import FOOTER from './component/layout/FOOTER';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <NAVBAR /> {/* Corrected component name */}
          <main className="flex-grow">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<BidMaster />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/live-auctions" element={<LiveAuctions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected routes - only accessible when logged in */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* Protected version of SellWithUs */}
              <Route 
                path="/sell-with-us" 
                element={
                  <ProtectedRoute>
                    <SellWithUs />
                  </ProtectedRoute>
                } 
              />

              {/* Public version of SellWithUs (remove if you only want protected) */}
              {/* <Route path="/sell-with-us" element={<SellWithUs />} /> */}
            </Routes>
          </main>
          <FOOTER />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;