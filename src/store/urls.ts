import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { urlRegister } from "../../types.d"

interface State {
  urls: urlRegister[],
  addURL: (data: urlRegister) => void
}

export const useGameStore = create<State>()(
  devtools(
    (set, get) => {
      return {
        urls: [],
        addURL(data) {
          const urls = get().urls
          urls.push(data)
          set({ urls: urls })
        },
      }
    },
    { name: "urls" },
  ),
)
