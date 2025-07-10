import React from 'react';
import type { Club } from '../types';

interface Props {
  club: Club;
}

const ClubCard: React.FC<Props> = ({ club }) => {
  return (
    <div className="relative rounded-lg border border-gray-300 bg-white p-4 text-left text-gray-800 shadow-md">
      <h3 className="mb-2 text-xl font-bold">{club.name}</h3>
      <p className="mb-4 text-gray-600">{club.description}</p>
      <div className="flex flex-wrap gap-2">
        {club.tags.map(tag => (
          <span key={tag} className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            {tag}
          </span>
        ))}
      </div>
      {club.isRecruiting && <div className="absolute top-2 right-2 rounded-full bg-green-500 px-2 py-1 text-xs font-bold text-white">모집중</div>}
    </div>
  );
};

export default ClubCard;
