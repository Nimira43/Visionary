import { IUser } from '@/interfaces'
import { create } from 'zustand'

const useGlobalStore = create((set) => ({
  user: null,
  setUser : (user: IUser) => set({ user })
}))