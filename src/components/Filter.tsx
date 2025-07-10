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
    <div className="my-4 flex items-center justify-center gap-8 rounded-lg p-4">
      <label className="flex cursor-pointer items-center gap-2">
        <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" checked={isRecruiting} onChange={e => setIsRecruiting(e.target.checked)} />
        모집중
      </label>
      <div className="flex items-center gap-4">
        {allTags.map(tag => (
          <label key={tag} className="flex cursor-pointer items-center gap-2">
            <input type="checkbox" value={tag} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" onChange={() => handleTagChange(tag)} />
            {tag}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
