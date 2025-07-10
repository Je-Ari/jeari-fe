import React, { useState, useEffect } from 'react';

interface Props {
  allTags: string[];
  onFilterChange: (recruiting: boolean, tags: string[]) => void;
}

const Filter: React.FC<Props> = ({ allTags, onFilterChange }) => {
  const [isRecruiting, setIsRecruiting] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    onFilterChange(isRecruiting, selectedTags);
  }, [isRecruiting, selectedTags, onFilterChange]);

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev => (prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]));
  };

  return (
    <div className="my-4 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-100 p-4 md:flex-row md:gap-8">
      <label className="flex flex-shrink-0 cursor-pointer items-center gap-2">
        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" checked={isRecruiting} onChange={e => setIsRecruiting(e.target.checked)} />
        모집중
      </label>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => handleTagChange(tag)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              selectedTags.includes(tag) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
