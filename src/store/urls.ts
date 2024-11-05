import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface State {
  user: boolean,
  setUser: (data: boolean) => void
}

export const useUserStore = create<State>()(
  devtools(
    (set) => {
      return {
        user: false,
        setUser(data) {
          set({ user: data })
        },
      }
    },
    { name: "urls" },
  ),
)
