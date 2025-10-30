export const MOODS = {
  HAPPY: 'happy',
  SAD: 'sad',
  ANGRY: 'angry',
  STRESSED: 'stressed',
  BORED: 'bored',
  NEUTRAL: 'neutral'
};

export const MOOD_CONFIG = {
  [MOODS.HAPPY]: {
    label: 'Happy',
    emoji: '😊',
    color: 'happy',
    bgClass: 'bg-gradient-to-br from-mood-happy-50 to-mood-happy-100',
    cardBg: 'bg-mood-happy-500',
    textColor: 'text-white',
    borderColor: 'border-mood-happy-200',
    description: 'Feeling joyful and positive!'
  },
  [MOODS.SAD]: {
    label: 'Sad',
    emoji: '😢',
    color: 'sad',
    bgClass: 'bg-gradient-to-br from-mood-sad-50 to-mood-sad-100',
    cardBg: 'bg-mood-sad-500',
    textColor: 'text-white',
    borderColor: 'border-mood-sad-200',
    description: 'Feeling down and melancholic'
  },
  [MOODS.ANGRY]: {
    label: 'Angry',
    emoji: '😠',
    color: 'angry',
    bgClass: 'bg-gradient-to-br from-mood-angry-50 to-mood-angry-100',
    cardBg: 'bg-mood-angry-500',
    textColor: 'text-white',
    borderColor: 'border-mood-angry-200',
    description: 'Feeling frustrated and irritated'
  },
  [MOODS.STRESSED]: {
    label: 'Stressed',
    emoji: '😰',
    color: 'stressed',
    bgClass: 'bg-gradient-to-br from-mood-stressed-50 to-mood-stressed-100',
    cardBg: 'bg-mood-stressed-500',
    textColor: 'text-white',
    borderColor: 'border-mood-stressed-200',
    description: 'Feeling overwhelmed and anxious'
  },
  [MOODS.BORED]: {
    label: 'Bored',
    emoji: '😑',
    color: 'bored',
    bgClass: 'bg-gradient-to-br from-mood-bored-50 to-mood-bored-100',
    cardBg: 'bg-mood-bored-500',
    textColor: 'text-white',
    borderColor: 'border-mood-bored-200',
    description: 'Feeling unengaged and restless'
  },
  [MOODS.NEUTRAL]: {
    label: 'Neutral',
    emoji: '😐',
    color: 'neutral',
    bgClass: 'bg-gradient-to-br from-mood-neutral-50 to-mood-neutral-100',
    cardBg: 'bg-mood-neutral-500',
    textColor: 'text-white',
    borderColor: 'border-mood-neutral-200',
    description: 'Feeling balanced and calm'
  }
};

export const getRandomMood = () => {
  const moodKeys = Object.keys(MOODS);
  const randomKey = moodKeys[Math.floor(Math.random() * moodKeys.length)];
  return MOODS[randomKey];
};

export const isExtremeMood = (mood) => {
  return mood === MOODS.ANGRY || mood === MOODS.SAD || mood === MOODS.STRESSED;
};