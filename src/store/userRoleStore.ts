import { create } from 'zustand';

type UserRole = 'ROLE_CUSTOM' | 'ROLE_NAVER';

interface UserRoleState {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

export const useUserRoleStore = create<UserRoleState>((set) => ({
  userRole: 'ROLE_NAVER', // 초기값
  setUserRole: (role) => set({ userRole: role }),
}));
