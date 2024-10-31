import { urlsListItem } from "../../types"

export async function getURLs() {
  return fetch(import.meta.env.VITE_URL_API)
    .then(res => {
      if (res.ok) return res.json()
      else return new Error("Error to get the data")
    })
    .then(({ urls }: { urls: urlsListItem[] }) => {
      return urls
    })
}