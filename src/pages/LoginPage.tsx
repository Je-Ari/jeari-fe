import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore'; // 스토어 import

const LoginPage: React.FC = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUserStore(); // 스토어 액션 가져오기

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData); // 스토어에 사용자 정보 저장
        alert('로그인 성공!');
        navigate('/'); // 메인 페이지로 리디렉션
      } else {
        const errorData = await response.json();
        setError(errorData.message || '학번 또는 비밀번호가 올바르지 않습니다.');
      }
    } catch (err) {
      setError('서버와 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <Link to="/">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">JEAri</h2>
          </div>
        </Link>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-center text-sm text-red-600">{error}</p>}
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="student-id" className="sr-only">
                학번
              </label>
              <input
                id="student-id"
                name="student-id"
                type="text"
                autoComplete="username"
                required
                className="relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:ring-orange-500 focus:outline-none sm:text-sm"
                placeholder="학번"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:ring-orange-500 focus:outline-none sm:text-sm"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-400 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
            >
              로그인
            </button>
          </div>
        </form>
        <div className="text-center text-sm">
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            아직 계정이 없으신가요? 회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
