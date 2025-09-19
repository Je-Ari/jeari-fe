import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';

const Header: React.FC = () => {
  const { user, isLoggedIn, clearUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    // TODO: 백엔드에 로그아웃 요청 (쿠키 삭제 등)
    alert('로그아웃 되었습니다.');
    navigate('/login');
  };

  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-white px-6 shadow-md lg:px-32">
      {/* 로고 영역 */}
      <Link to="/" className="flex items-center gap-2">
        <div className="h-12 w-12 rounded-full">
          <img src={'/src/assets/jeari3.png'} className="h-full w-full rounded-full object-cover" />
        </div>
        <span className="text-2xl font-medium text-black">
          <span className="text-3xl text-orange-500">JEA</span>ri
        </span>
      </Link>

      {/* 네비게이션 메뉴 (모바일에서 숨김) */}
      <nav className="hidden items-center gap-6 md:flex">
        <Link to="/" className="text-sm text-black hover:underline lg:text-base">
          홈
        </Link>
        {['동아리 전체', '이벤트', '공지사항'].map(label => (
          <a key={label} href="#" className="text-sm text-black hover:underline lg:text-base">
            {label}
          </a>
        ))}

        <div className="flex items-center gap-4">
          {isLoggedIn && user ? (
            <>
              <span className="text-sm text-gray-700 lg:text-base">{user.username}님</span>
              <button onClick={handleLogout} className="text-sm text-orange-600 hover:underline lg:text-base">
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-orange-600 hover:underline lg:text-base">
                로그인
              </Link>
            </>
          )}
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
