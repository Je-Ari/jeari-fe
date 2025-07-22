const tagColors: { [key: string]: string } = {
  예술: 'bg-red-200 text-red-800',
  스포츠: 'bg-blue-200 text-blue-800',
  문화: 'bg-yellow-200 text-yellow-800',
  봉사: 'bg-green-200 text-green-800',
  IT: 'bg-indigo-200 text-indigo-800',
};

export const getTagColor = (tag: string) => {
  return tagColors[tag] || 'bg-gray-200 text-gray-800';
};
