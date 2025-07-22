import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { clubs } from '../mock/clubs';

const ClubDetailPage: React.FC = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const club = clubs.find(c => c.id === Number(clubId));
  const [activeTab, setActiveTab] = useState('introduction');

  if (!club) {
    return <div>동아리를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4">
      {/* 상단 정보 */}
      <div className="flex items-center gap-6 rounded-lg p-6">
        <img src={'/src/assets/GGOmulrack.png'} className="h-24 w-24 rounded-full object-cover" />
        <div>
          <h1 className="text-3xl font-bold">{club.name}</h1>
          <div className="mt-2 flex flex-wrap gap-2">
            {club.tags.map(tag => (
              <span key={tag} className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 기본 정보 */}
      <div className="mt-6 rounded-lg bg-white p-8 shadow-md">
        <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 md:grid-cols-[auto_1fr_auto_1fr]">
          <span className="text-left">회장</span>
          <strong className="text-left font-semibold">{club.presidentName}</strong>
          <span className="text-left">연락처</span>
          <strong className="text-left font-semibold">{club.contact}</strong>
          <span className="text-left">동아리방</span>
          <strong className="text-left font-semibold">{club.location}</strong>
          <span className="text-left">정기 모임</span>
          <strong className="text-left font-semibold">{club.regularMeetingDay}</strong>
        </div>
      </div>

      {/* 소개 및 게시판 */}
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('introduction')}
              className={`${activeTab === 'introduction' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`}
            >
              소개
            </button>
            <button
              onClick={() => setActiveTab('board')}
              className={`${activeTab === 'board' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`}
            >
              게시판
            </button>
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === 'introduction' && (
            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="whitespace-pre-wrap">{club.introduction}</p>
            </div>
          )}
          {activeTab === 'board' && (
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="text-xl font-bold">게시판</h2>
              <p>게시판 기능은 아직 준비 중입니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClubDetailPage;
