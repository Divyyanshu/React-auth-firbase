import { create } from 'zustand'

export const useStore = create((set) => ({
  loggedIn: false,
  Login: () => set({ loggedIn : true}),
  LogOut: () => set({ loggedIn: false }),
}))