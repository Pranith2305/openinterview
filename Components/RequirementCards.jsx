import React from 'react';
import { Laptop, Wifi, Chrome as Browser } from 'lucide-react';

const RequirementCards = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Requirements Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Laptop", "Internet", "Browser"].map((item, index) => (
          <div
            key={item}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center space-x-4"
          >
            <div className="bg-purple-100/50 w-10 h-10 rounded-lg flex items-center justify-center">
              {index === 0 && <Laptop className="w-5 h-5 text-purple-600" />}
              {index === 1 && <Wifi className="w-5 h-5 text-purple-600" />}
              {index === 2 && <Browser className="w-5 h-5 text-purple-600" />}
            </div>
            <div>
              <h3 className="font-semibold text-[#1a365d] text-sm">{item}</h3>
              <p className="text-gray-500 text-xs">
                Streamline task monitoring for productivity.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequirementCards;
