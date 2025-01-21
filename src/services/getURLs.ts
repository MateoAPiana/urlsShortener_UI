import { urlsListItem } from "../../types"

export async function getURLs() {
  try {
    return fetch(`${import.meta.env.VITE_URL_API}/url/read`, {
      credentials: 'include',
      Cookie: await window.cookieStore.get("accessToken")
    })
      .then(res => {
        if (res.ok) return res.json()
        else return "Error to get the data"
      })
      .then(({ urls }: { urls: urlsListItem[] }) => {
        return urls
      })
  } catch {
    return "Error to send the data"
  }
}