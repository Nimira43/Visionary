// import { IUser } from '@/app/interfaces'
// import { create } from 'zustand'

// const usersGlobalStore = create((set) => ({
//   user: null,
//   setUser: (user: IUser) => set({user})
// }))

// export default usersGlobalStore

// export interface IUsersGlobalStore {
//   user: IUser | null
//   setUser: (user: IUser) => void
// }

import { IUser } from '@/app/interfaces'
import { create } from 'zustand'

export interface IUsersGlobalStore {
  user: IUser | null
  setUser: (user: IUser | null) => void
}

const usersGlobalStore = create<IUsersGlobalStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))

export default usersGlobalStore
