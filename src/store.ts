import create, { GetState, SetState } from 'zustand'

type Store = {
  showLogin: boolean
  isLogIn: () => void
}

// export const useStore = create<Store>((set: SetState<Store>) => ({
//   showLogin: false,
//   isLogIn: () => set((state) => ({ showLogin: !state.showLogin })),
// }))

export const useStore = create<Store>(
  (set: SetState<Store>, get: GetState<Store>) => ({
    showLogin: false,
    isLogIn: (): void => {
      const { showLogin } = get()
      set({ showLogin: !showLogin })
    },
  })
)
