import React from 'react';
import type { Club } from '../types';

interface Props {
  club: Club;
}

const RecruitingClubCard: React.FC<Props> = ({ club }) => {
  return (
    <div className="w-full flex-shrink-0 p-2 sm:w-1/2 md:w-1/3">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="relative aspect-square w-full">
          <img src="src/assets/GGOmulrack.png" alt={club.name} className="h-full w-full object-cover" />
          {club.isRecruiting && <div className="absolute top-2 left-2 rounded bg-blue-600 px-2 py-1 text-xs font-bold text-white">모집중</div>}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{club.name}</h3>
          <p className="mt-1 text-sm text-gray-600">{club.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecruitingClubCard;
