import { useState, useEffect } from 'react';
import MoodCard from './components/MoodCard.jsx';
import CameraPreview from './components/CameraPreview.jsx';
import MoodHistory from './components/MoodHistory.jsx';
import RecommendationPanel from './components/RecommendationPanel.jsx';
import SupportBanner from './components/SupportBanner.jsx';
import { MOODS, MOOD_CONFIG, getRandomMood, isExtremeMood } from './utils/moodUtils.js';

function App() {
  const [currentMood, setCurrentMood] = useState(MOODS.NEUTRAL);
  const [isLoading, setIsLoading] = useState(false);
  const [moodHistory, setMoodHistory] = useState([]);
  const [showSupportBanner, setShowSupportBanner] = useState(false);

  // Initialize with a random mood on first load
  useEffect(() => {
    const initialMood = getRandomMood();
    setCurrentMood(initialMood);
    addToHistory(initialMood, 'initial');
  }, []);

  // Check for extreme moods and show support banner
  useEffect(() => {
    if (isExtremeMood(currentMood)) {
      setShowSupportBanner(true);
    }
  }, [currentMood]);

  const addToHistory = (mood, source = 'manual') => {
    const newEntry = {
      mood,
      timestamp: Date.now(),
      source
    };
    setMoodHistory(prev => [newEntry, ...prev].slice(0, 50)); // Keep last 50 entries
  };

  const handleMoodRefresh = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newMood = getRandomMood();
    setCurrentMood(newMood);
    addToHistory(newMood, 'refresh');
    setIsLoading(false);
  };

  const handleCameraCapture = () => {
    const newMood = getRandomMood();
    setCurrentMood(newMood);
    addToHistory(newMood, 'camera');
  };

  const currentMoodConfig = MOOD_CONFIG[currentMood];

  return (
    <div className={`min-h-screen transition-all duration-1000 ${currentMoodConfig.bgClass}`}>
      <div className="container mx-auto px-4 py-10">
        {/* Support Banner */}
        {showSupportBanner && (
          <SupportBanner
            mood={currentMood}
            onDismiss={() => setShowSupportBanner(false)}
          />
        )}

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-3">
            Emotional Internet Filter
          </h1>
          <p className="text-gray-600 text-xl">
            Your personal mood tracking and wellness companion
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Camera */}
          <div className="lg:col-span-3 space-y-6 h-full">
            <CameraPreview onCaptureComplete={handleCameraCapture} />
          </div>

          {/* Center Column - Main Mood Card */}
          <div className="lg:col-span-6 flex justify-center self-start">
            <MoodCard
              mood={currentMood}
              isLoading={isLoading}
              onRefresh={handleMoodRefresh}
            />
          </div>

          {/* Right Column - Recommendations */}
          <div className="lg:col-span-3 h-full">
            <RecommendationPanel mood={currentMood} />
          </div>
        </div>

        {/* Bottom Section - Mood History */}
        <div className="mt-8">
          <MoodHistory history={moodHistory} />
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Your emotional well-being matters. Take care of yourself today. 💙</p>
        </div>
      </div>
    </div>
  );
}

export default App;