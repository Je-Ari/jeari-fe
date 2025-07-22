import React from 'react';
import { Link } from 'react-router-dom';
import type { Club } from '../types';
import { getTagColor } from '../utils/tagColors';

interface Props {
  club: Club;
}

const ClubCard: React.FC<Props> = ({ club }) => {
  const [mainTag, ...otherTags] = club.tags;

  return (
    <Link to={`/club/${club.id}`}>
      <div className="relative rounded-lg border border-gray-300 bg-white p-4 text-left text-gray-800 shadow-sm shadow-gray-300">
        <h3 className="mb-4 text-xl font-bold">{club.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className={`rounded-md px-2 py-1 text-xs font-semibold ${getTagColor(mainTag)}`}>{mainTag}</span>
          {otherTags.length > 0 && <span className="text-gray-400">|</span>}
          <span>{otherTags.join(' | ')}</span>
        </div>
        {club.isRecruiting && <div className="absolute top-2 right-2 rounded-full bg-green-500 px-2 py-1 text-xs font-bold text-white">모집중</div>}
      </div>
    </Link>
  );
};

export default ClubCard;
