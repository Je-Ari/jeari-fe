import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-white px-6 shadow-md lg:px-20">
      {/* 로고 영역 */}
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-black/10" />
        <span className="text-2xl font-medium text-black">JeAri</span>
      </div>

      {/* 네비게이션 메뉴 (모바일에서 숨김) */}
      <nav className="hidden items-center gap-6 md:flex">
        {['홈', '동아리 전체', '이벤트', '공지사항'].map(label => (
          <a key={label} href="#" className="text-sm text-black hover:underline lg:text-base">
            {label}
          </a>
        ))}

        {/* 검색창 */}
        <div className="flex w-32 items-center gap-2 rounded-md border border-black/10 p-2 lg:w-48">
          <span className="flex-1 text-sm text-black/50">Search in site</span>
          <div className="h-4 w-4 bg-black/70" />
        </div>
      </nav>

      {/* 모바일 햄버거 아이콘 (md 이하만 보이게) */}
      <div className="md:hidden">
        <button className="flex h-8 w-8 flex-col items-center justify-between">
          <span className="block h-[2px] w-6 bg-black"></span>
          <span className="block h-[2px] w-6 bg-black"></span>
          <span className="block h-[2px] w-6 bg-black"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
