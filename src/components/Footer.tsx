import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-gray-800 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold">JeAri</p>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} JeAri. All rights reserved.</p>
        </div>
        <div className="mt-6 flex gap-6 sm:mt-0">
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            연락처
          </a>
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            개인정보 처리방침
          </a>
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            이용 약관
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
