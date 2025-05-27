import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SellWithUs = () => {
  const handleJoinClick = () => {
    alert('Redirecting to seller registration...');
    // You can navigate to another page using React Router if needed
    // e.g., navigate("/register-seller");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition duration-300 px-6 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Start Selling With Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Join our platform to reach thousands of customers and grow your business online.
        </p>
        <button
          onClick={handleJoinClick}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition flex items-center gap-2 mx-auto"
        >
          Join Now <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Wide Reach",
            desc: "Access a vast customer base across multiple regions and markets.",
          },
          {
            title: "Easy Setup",
            desc: "Get started with a simple onboarding process and helpful tools.",
          },
          {
            title: "24/7 Support",
            desc: "Our team is here to support you every step of the way.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition-all text-left"
          >
            <CheckCircle className="text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Have questions or need help getting started?
        </p>
        <button
          onClick={() => alert('Contact support')}
          className="px-5 py-2 bg-gray-800 dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default SellWithUs;
