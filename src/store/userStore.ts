import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  studentId: string;
  username: string;
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    set => ({
      user: null,
      isLoggedIn: false,
      setUser: user => set({ user, isLoggedIn: true }),
      clearUser: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: 'user-store', // 스토리지 키
      storage: createJSONStorage(() => localStorage), // SSR 안전
      // 필요한 값만 저장하고 싶다면:
      // partialize: (state) => ({ user: state.user, isLoggedIn: state.isLoggedIn }),
      // 버전 마이그레이션이 필요할 때:
      // version: 1,
      // migrate: (persistedState, version) => persistedState as UserState,
    },
  ),
);

export default useUserStore;
