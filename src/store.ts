import create from 'zustand'

type Store = {
  showLogin: any
  isLogIn: () => void
}

export const useStore = create<Store>((set) => ({
  showLogin: false,
  isLogIn: () => set((state) => ({ showLogin: !state.showLogin })),
}))
