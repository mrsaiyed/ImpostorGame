import { create } from 'zustand';

export const useSession = create((set) => ({
  deviceId: (crypto.randomUUID && crypto.randomUUID()) || String(Math.random()).slice(2),
  nickname: '',
  setNickname: (n) => set({ nickname: n }),
  chosenBankId: null, // built-in or custom
}));
