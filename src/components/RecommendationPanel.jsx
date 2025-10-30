import { getRecommendations } from '../utils/recommendations.js';
import { MOOD_CONFIG } from '../utils/moodUtils.js';

const RecommendationPanel = ({ mood }) => {
  const recommendations = getRecommendations(mood);
  const moodConfig = MOOD_CONFIG[mood];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">💡</span>
        Recommendations
      </h3>
      
      <div className={`p-4 rounded-lg mb-4 ${moodConfig.bgClass} border ${moodConfig.borderColor}`}>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-2xl">{moodConfig.emoji}</span>
          <span className="font-medium text-gray-700">
            For when you're feeling {moodConfig.label.toLowerCase()}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 
                     transition-colors duration-200 border border-gray-100
                     transform hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-start space-x-3">
              <span className="text-2xl flex-shrink-0">{rec.icon}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">
                  {rec.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {rec.content}
                </p>
                <div className="mt-2">
                  {/* Avoid dynamic class names that Tailwind cannot statically analyze. */}
                  <span
                    className={`text-xs px-2 py-1 rounded-full bg-white/50 border ${moodConfig.textColor.replace('text', 'border')} ${moodConfig.textColor}`}
                  >
                    {rec.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-xl">🌟</span>
          <span className="font-medium text-gray-700">Daily Tip</span>
        </div>
        <p className="text-sm text-gray-600">
          Remember: Every emotion is valid and temporary. Take care of yourself today.
        </p>
      </div>
    </div>
  );
};

export default RecommendationPanel;