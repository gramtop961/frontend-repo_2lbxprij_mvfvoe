import React from 'react';
import Hero from './components/Hero';
import Platform from './components/Platform';
import Solutions from './components/Solutions';
import PricingResources from './components/PricingResources';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Platform />
      <Solutions />
      <PricingResources />
    </div>
  );
}

export default App;
