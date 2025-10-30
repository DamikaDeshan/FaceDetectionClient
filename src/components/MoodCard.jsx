import { useState } from 'react';
import { MOOD_CONFIG } from '../utils/moodUtils.js';

const MoodCard = ({ mood, isLoading, onRefresh }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const moodConfig = MOOD_CONFIG[mood];

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefresh();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto border border-gray-100 animate-pulse-slow">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-100 rounded mb-4 animate-pulse"></div>
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            <span className="text-lg font-medium">Detecting...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${moodConfig.cardBg} rounded-3xl shadow-2xl p-10 max-w-lg w-full mx-auto transform transition-all duration-500 hover:scale-[1.02] animate-fade-in`}
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
      <div className="text-center">
        <div className="text-7xl mb-5 animate-bounce-gentle">
          {moodConfig.emoji}
        </div>
        <h2 className={`text-4xl font-extrabold ${moodConfig.textColor} mb-3`}>
          {moodConfig.label}
        </h2>
        <p className={`${moodConfig.textColor} opacity-95 mb-8 text-lg`}>
          {moodConfig.description}
        </p>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3.5 px-7 rounded-full 
                   transition-all duration-300 transform hover:scale-105 disabled:opacity-50 
                   backdrop-blur-sm border border-white/30 shadow-lg"
        >
          {isRefreshing ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Updating...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span>🔄</span>
              <span>Refresh Mood</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default MoodCard;