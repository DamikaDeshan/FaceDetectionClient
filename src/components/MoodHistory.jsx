import { MOOD_CONFIG } from '../utils/moodUtils.js';

const MoodHistory = ({ history }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  if (history.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <span className="mr-2">📊</span>
          Mood History
        </h3>
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-2">📈</div>
          <p>No mood history yet</p>
          <p className="text-sm">Start tracking your emotions!</p>
        </div>
      </div>
    );
  }

  // Group history by date
  const groupedHistory = history.reduce((groups, entry) => {
    const date = formatDate(entry.timestamp);
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(entry);
    return groups;
  }, {});

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">📊</span>
        Mood History
      </h3>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {Object.entries(groupedHistory).map(([date, entries]) => (
          <div key={date} className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600 border-b border-gray-100 pb-1">
              {date}
            </h4>
            {entries.map((entry, index) => {
              const moodConfig = MOOD_CONFIG[entry.mood];
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg 
                           hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{moodConfig.emoji}</span>
                    <div>
                      <span className="font-medium text-gray-800">
                        {moodConfig.label}
                      </span>
                      {entry.source && (
                        <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {entry.source}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {formatTime(entry.timestamp)}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Simple mood trend */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-600 mb-3">Recent Trend</h4>
        <div className="flex space-x-1">
          {history.slice(-10).map((entry, index) => {
            const moodConfig = MOOD_CONFIG[entry.mood];
            return (
              <div
                key={index}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
                         ${moodConfig.cardBg} ${moodConfig.textColor} 
                         transition-transform duration-200 hover:scale-125`}
                title={`${moodConfig.label} - ${formatTime(entry.timestamp)}`}
              >
                {moodConfig.emoji}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoodHistory;