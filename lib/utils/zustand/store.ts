import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Store } from '@/types'

export const useStore = create<Store>()(persist((set) => ({
  waitList: false,
  setWaitList: (value: boolean) => set({ waitList: value }),
}), {
  name: 'store', // name of the item in the storage (must be unique)
//   getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
}));