import { MOODS } from './moodUtils.js';

export const getRecommendations = (mood) => {
  const recommendations = {
    [MOODS.HAPPY]: [
      {
        type: 'quote',
        title: 'Spread the Joy',
        content: 'Share your happiness with others - it\'s contagious!',
        icon: '✨'
      },
      {
        type: 'activity',
        title: 'Creative Expression',
        content: 'Try painting, writing, or any creative activity while you\'re feeling inspired.',
        icon: '🎨'
      },
      {
        type: 'social',
        title: 'Connect with Others',
        content: 'Call a friend or family member to share your positive energy.',
        icon: '📞'
      }
    ],
    [MOODS.SAD]: [
      {
        type: 'quote',
        title: 'Gentle Reminder',
        content: 'It\'s okay to feel sad. This feeling will pass, and brighter days are ahead.',
        icon: '🌈'
      },
      {
        type: 'activity',
        title: 'Self-Care',
        content: 'Take a warm bath, listen to calming music, or practice gentle yoga.',
        icon: '🛁'
      },
      {
        type: 'support',
        title: 'Reach Out',
        content: 'Consider talking to someone you trust about how you\'re feeling.',
        icon: '🤝'
      }
    ],
    [MOODS.ANGRY]: [
      {
        type: 'breathing',
        title: 'Deep Breathing',
        content: 'Try the 4-7-8 breathing technique: inhale for 4, hold for 7, exhale for 8.',
        icon: '🫁'
      },
      {
        type: 'activity',
        title: 'Physical Release',
        content: 'Go for a walk, do jumping jacks, or try some vigorous exercise.',
        icon: '🏃'
      },
      {
        type: 'mindfulness',
        title: 'Cool Down',
        content: 'Count to 10 slowly and focus on what you can control right now.',
        icon: '🧘'
      }
    ],
    [MOODS.STRESSED]: [
      {
        type: 'breathing',
        title: 'Relaxation Technique',
        content: 'Practice progressive muscle relaxation or guided meditation.',
        icon: '🧘‍♀️'
      },
      {
        type: 'organization',
        title: 'Prioritize Tasks',
        content: 'Write down your tasks and tackle them one at a time.',
        icon: '📝'
      },
      {
        type: 'break',
        title: 'Take a Break',
        content: 'Step away from stressors and do something enjoyable for 10 minutes.',
        icon: '⏰'
      }
    ],
    [MOODS.BORED]: [
      {
        type: 'activity',
        title: 'Learn Something New',
        content: 'Watch an interesting documentary or read an article on a topic you\'re curious about.',
        icon: '🎓'
      },
      {
        type: 'creative',
        title: 'Get Creative',
        content: 'Start a small art project, write in a journal, or rearrange your space.',
        icon: '🎯'
      },
      {
        type: 'physical',
        title: 'Move Your Body',
        content: 'Dance to your favorite song or try a new workout routine.',
        icon: '💃'
      }
    ],
    [MOODS.NEUTRAL]: [
      {
        type: 'mindfulness',
        title: 'Mindful Moment',
        content: 'Take a moment to appreciate the present and notice your surroundings.',
        icon: '🌸'
      },
      {
        type: 'goal',
        title: 'Set an Intention',
        content: 'Think about one small goal you\'d like to accomplish today.',
        icon: '🎯'
      },
      {
        type: 'gratitude',
        title: 'Practice Gratitude',
        content: 'List three things you\'re grateful for right now.',
        icon: '🙏'
      }
    ]
  };

  return recommendations[mood] || recommendations[MOODS.NEUTRAL];
};

export const getSupportResources = () => [
  {
    title: 'Crisis Text Line',
    description: 'Text HOME to 741741',
    type: 'emergency',
    icon: '📱'
  },
  {
    title: 'National Suicide Prevention Lifeline',
    description: 'Call 988',
    type: 'emergency',
    icon: '☎️'
  },
  {
    title: 'Guided Meditation',
    description: 'Take a 5-minute mindfulness break',
    type: 'wellness',
    icon: '🧘'
  },
  {
    title: 'Breathing Exercise',
    description: 'Try box breathing: 4-4-4-4 pattern',
    type: 'wellness',
    icon: '🫁'
  }
];