import { useState } from 'react';
import { getSupportResources } from '../utils/recommendations.js';

const SupportBanner = ({ mood, onDismiss }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const resources = getSupportResources();

  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-4 mb-6 rounded-lg shadow-md animate-slide-up">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🆘</span>
          <div>
            <h3 className="text-lg font-semibold text-red-800">
              We're here to help
            </h3>
            <p className="text-red-700 text-sm">
              It looks like you might be going through a tough time. You're not alone.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-lg 
                     transition-colors duration-200 text-sm font-medium"
          >
            {isExpanded ? 'Hide Resources' : 'Show Resources'}
          </button>
          <button
            onClick={onDismiss}
            className="text-red-400 hover:text-red-600 transition-colors duration-200"
          >
            ✕
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border ${
                resource.type === 'emergency' 
                  ? 'bg-red-100 border-red-200 hover:bg-red-150' 
                  : 'bg-blue-100 border-blue-200 hover:bg-blue-150'
              } transition-colors duration-200 cursor-pointer`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">{resource.icon}</span>
                <div>
                  <h4 className={`font-medium ${
                    resource.type === 'emergency' ? 'text-red-800' : 'text-blue-800'
                  }`}>
                    {resource.title}
                  </h4>
                  <p className={`text-sm ${
                    resource.type === 'emergency' ? 'text-red-700' : 'text-blue-700'
                  }`}>
                    {resource.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SupportBanner;