import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">How It Works</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {[
          {
            step: "1",
            title: "Sign Up",
            desc: "Create your account using your email or social login.",
          },
          {
            step: "2",
            title: "Choose Service",
            desc: "Browse and select the service that fits your needs.",
          },
          {
            step: "3",
            title: "Get Started",
            desc: "Connect and enjoy the service with just a click.",
          },
        ].map(({ step, title, desc }) => (
          <div
            key={step}
            className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-6 shadow hover:shadow-lg transition-all"
          >
            <div className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
              Step {step}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => alert('Let’s Get Started!')}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition"
        >
          Let’s Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
