import { IUser } from '@/app/interfaces'
import { create } from 'zustand'

const usersGlobalStore = create((set) => ({
  user: null,
  setUser: (user: IUser) => set({user})
}))